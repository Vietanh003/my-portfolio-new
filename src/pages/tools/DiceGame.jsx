import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, X, Dices, RotateCcw, Crown, Trophy } from "lucide-react";
import "../../styles/Tools.css";
import "../../styles/DiceGame.css";
import Footer from "../../components/Footer";
import { useLanguage } from "../../i18n/LanguageContext";

const DEFAULT_PLAYERS = ["Player 1", "Player 2", "Player 3", "Player 4"];
const ROLL_DURATION = 1100; // ms — visible spinning before settling

const rand = (max) => Math.floor(Math.random() * max);

/* ============== Pip layouts for a real-looking d6 face ============== */
const PIP_LAYOUTS = {
  1: [[50, 50]],
  2: [[25, 25], [75, 75]],
  3: [[25, 25], [50, 50], [75, 75]],
  4: [[25, 25], [75, 25], [25, 75], [75, 75]],
  5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
  6: [[25, 28], [75, 28], [25, 50], [75, 50], [25, 72], [75, 72]],
};

const DiceFace = ({ value, sides, rolling }) => {
  const isD6 = sides === 6 && value >= 1 && value <= 6;
  return (
    <span
      className={
        "dice-face " +
        (isD6 ? "dice-face--pips " : "dice-face--num ") +
        (rolling ? "dice-face--rolling" : "")
      }
      aria-label={`Rolled ${value}`}
    >
      {isD6 ? (
        <svg viewBox="0 0 100 100" className="dice-pips" aria-hidden="true">
          {PIP_LAYOUTS[value].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="9" />
          ))}
        </svg>
      ) : (
        <span className="dice-num">{value}</span>
      )}
    </span>
  );
};

const DiceGame = () => {
  const { t } = useLanguage();

  const [players, setPlayers] = useState(DEFAULT_PLAYERS);
  const [name, setName] = useState("");
  const [sides, setSides] = useState(6);
  const [mode, setMode] = useState("roll"); // "roll" | "pick"
  const [results, setResults] = useState({}); // { name: number }
  const [picked, setPicked] = useState(null);
  const [rolling, setRolling] = useState(false);

  /* ============== player list management ============== */
  const addPlayer = (e) => {
    e?.preventDefault();
    const n = name.trim();
    if (!n || players.includes(n) || players.length >= 15) {
      setName("");
      return;
    }
    setPlayers((p) => [...p, n]);
    setName("");
  };

  const removePlayer = (n) => {
    setPlayers((p) => p.filter((x) => x !== n));
    setResults((r) => {
      const cp = { ...r };
      delete cp[n];
      return cp;
    });
  };

  const reset = () => {
    setResults({});
    setPicked(null);
  };

  /* ============== roll dice for everyone ============== */
  const rollAll = () => {
    if (rolling || players.length < 2) return;
    setRolling(true);
    setPicked(null);

    const tickInterval = 80;
    const ticker = setInterval(() => {
      const fake = {};
      players.forEach((p) => (fake[p] = rand(sides) + 1));
      setResults(fake);
    }, tickInterval);

    setTimeout(() => {
      clearInterval(ticker);
      const final = {};
      players.forEach((p) => (final[p] = rand(sides) + 1));
      setResults(final);
      setRolling(false);
    }, ROLL_DURATION);
  };

  /* ============== pick one random player ============== */
  const pickOne = () => {
    if (rolling || players.length < 2) return;
    setRolling(true);
    setResults({});

    const ticker = setInterval(() => {
      setPicked(players[rand(players.length)]);
    }, 70);

    setTimeout(() => {
      clearInterval(ticker);
      setPicked(players[rand(players.length)]);
      setRolling(false);
    }, ROLL_DURATION);
  };

  /* ============== derive winner / loser ============== */
  const entries = Object.entries(results);
  const max = entries.length ? Math.max(...entries.map(([, v]) => v)) : null;
  const min = entries.length ? Math.min(...entries.map(([, v]) => v)) : null;

  const tooFew = players.length < 2;

  return (
    <div className="tools-page">
      <div className="tools-container">
        <Link to="/tools" className="tool-back">
          <ArrowLeft size={14} /> {t("tools.backToTools")}
        </Link>

        <h2 className="tools-title">{t("tools.dice.title")}</h2>
        <p className="tools-subtitle">{t("tools.dice.kicker")}</p>

        {/* Mode tabs */}
        <div className="dice-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "roll"}
            className={`dice-tab ${mode === "roll" ? "dice-tab--active" : ""}`}
            onClick={() => { setMode("roll"); reset(); }}
          >
            <Dices size={14} /> {t("tools.dice.modeRoll")}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "pick"}
            className={`dice-tab ${mode === "pick" ? "dice-tab--active" : ""}`}
            onClick={() => { setMode("pick"); reset(); }}
          >
            <Crown size={14} /> {t("tools.dice.modePick")}
          </button>
        </div>

        {/* Settings */}
        {mode === "roll" && (
          <div className="dice-settings">
            <span className="dice-settings__label">{t("tools.dice.sides")}</span>
            {[6, 10, 20].map((s) => (
              <button
                key={s}
                type="button"
                className={`dice-side ${s === sides ? "dice-side--active" : ""}`}
                onClick={() => setSides(s)}
              >
                d{s}
              </button>
            ))}
          </div>
        )}

        {/* Players list */}
        <div className="dice-players-head">
          <h3 className="dice-section-title">
            {t("tools.dice.players")} ({players.length})
          </h3>
        </div>

        <form className="dice-add" onSubmit={addPlayer}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("tools.dice.playerPlaceholder")}
            maxLength={20}
          />
          <button type="submit" className="dice-add__btn">
            <Plus size={14} /> {t("tools.dice.addPlayer")}
          </button>
        </form>

        <div className="dice-players">
          {players.map((p) => {
            const v = results[p];
            const isWinner = mode === "roll" && v != null && v === max && !rolling;
            const isLoser  = mode === "roll" && v != null && v === min && !rolling && max !== min;
            const isPicked = mode === "pick" && picked === p && !rolling;
            return (
              <div
                key={p}
                className={
                  "dice-player " +
                  (isWinner ? "dice-player--winner " : "") +
                  (isLoser  ? "dice-player--loser "  : "") +
                  (isPicked ? "dice-player--picked " : "")
                }
              >
                <span className="dice-player__name">{p}</span>

                {mode === "roll" && v != null && (
                  <DiceFace value={v} sides={sides} rolling={rolling} />
                )}
                {mode === "pick" && isPicked && <Trophy size={16} />}

                <button
                  type="button"
                  onClick={() => removePlayer(p)}
                  className="dice-player__remove"
                  aria-label={`Remove ${p}`}
                  disabled={rolling}
                >
                  <X size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {tooFew && <div className="dice-hint">{t("tools.dice.empty")}</div>}

        {/* Action button */}
        <div className="dice-actions">
          {mode === "roll" ? (
            <button
              type="button"
              className="dice-btn dice-btn--primary"
              onClick={rollAll}
              disabled={tooFew || rolling}
            >
              <Dices size={18} />
              {rolling ? t("tools.dice.rolling") : t("tools.dice.rollBtn")}
            </button>
          ) : (
            <button
              type="button"
              className="dice-btn dice-btn--primary"
              onClick={pickOne}
              disabled={tooFew || rolling}
            >
              <Crown size={18} />
              {rolling ? t("tools.dice.picking") : t("tools.dice.pickBtn")}
            </button>
          )}

          <button
            type="button"
            className="dice-btn dice-btn--ghost"
            onClick={reset}
            disabled={rolling}
          >
            <RotateCcw size={16} /> {t("tools.dice.reset")}
          </button>
        </div>

        {/* Result summary banner */}
        {mode === "roll" && entries.length > 0 && !rolling && max !== min && (
          <div className="dice-summary">
            <div>
              <span className="dice-summary__label">{t("tools.dice.winnerLabel")}</span>
              <strong>
                {entries.find(([, v]) => v === max)[0]} ({max})
              </strong>
            </div>
            <div>
              <span className="dice-summary__label">{t("tools.dice.loserLabel")}</span>
              <strong>
                {entries.find(([, v]) => v === min)[0]} ({min})
              </strong>
            </div>
          </div>
        )}
        {mode === "pick" && picked && !rolling && (
          <div className="dice-summary dice-summary--single">
            <div>
              <span className="dice-summary__label">{t("tools.dice.winnerLabel")}</span>
              <strong>{picked}</strong>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DiceGame;
