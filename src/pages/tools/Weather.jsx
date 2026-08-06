import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  MapPin,
  Droplets,
  Wind,
  Thermometer,
  Loader2,
} from "lucide-react";
import "../../styles/Tools.css";
import "../../styles/Weather.css";
import Footer from "../../components/Footer";
import { useLanguage } from "../../i18n/LanguageContext";

/* ============== WMO weather codes → emoji + label ============== */
const codeToInfo = (code, isNight = false) => {
  const map = {
    0: ["Clear", "Trời quang", isNight ? "🌙" : "☀️"],
    1: ["Mainly clear", "Quang đãng", isNight ? "🌙" : "🌤️"],
    2: ["Partly cloudy", "Có mây", "⛅"],
    3: ["Overcast", "Nhiều mây", "☁️"],
    45: ["Fog", "Sương mù", "🌫️"],
    48: ["Rime fog", "Sương băng", "🌫️"],
    51: ["Light drizzle", "Mưa phùn nhẹ", "🌦️"],
    53: ["Drizzle", "Mưa phùn", "🌦️"],
    55: ["Heavy drizzle", "Mưa phùn nặng", "🌧️"],
    61: ["Light rain", "Mưa nhẹ", "🌧️"],
    63: ["Rain", "Mưa", "🌧️"],
    65: ["Heavy rain", "Mưa to", "🌧️"],
    71: ["Light snow", "Tuyết nhẹ", "🌨️"],
    73: ["Snow", "Tuyết", "❄️"],
    75: ["Heavy snow", "Tuyết dày", "❄️"],
    77: ["Snow grains", "Hạt tuyết", "🌨️"],
    80: ["Rain showers", "Mưa rào", "🌦️"],
    81: ["Heavy showers", "Mưa rào nặng", "🌧️"],
    82: ["Violent showers", "Mưa cực to", "⛈️"],
    85: ["Snow showers", "Tuyết rào", "🌨️"],
    86: ["Heavy snow showers", "Tuyết rào nặng", "❄️"],
    95: ["Thunderstorm", "Dông", "⛈️"],
    96: ["Storm w/ hail", "Dông + mưa đá", "⛈️"],
    99: ["Storm w/ heavy hail", "Dông + mưa đá lớn", "⛈️"],
  };
  return map[code] || ["—", "—", "❔"];
};

const fmtHour = (iso) => {
  const d = new Date(iso);
  return d.toLocaleTimeString([], { hour: "numeric", hour12: false }) + "h";
};
const fmtDay = (iso, lang) => {
  const d = new Date(iso);
  return d.toLocaleDateString(lang === "vi" ? "vi-VN" : "en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
};

/* ============== Component ============== */

const Weather = () => {
  const { t, lang } = useLanguage();
  const [query, setQuery] = useState("Ho Chi Minh City");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchByCity = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const geo = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          cityName
        )}&count=1&language=en&format=json`
      ).then((r) => r.json());

      const place = geo.results?.[0];
      if (!place) {
        setError(t("tools.weather.notFound"));
        setData(null);
        return;
      }
      await fetchByCoords(place.latitude, place.longitude, {
        name: place.name,
        country: place.country,
        admin1: place.admin1,
      });
    } catch (e) {
      setError(t("tools.weather.errorGeneric"));
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchByCoords = async (lat, lon, place) => {
    setLoading(true);
    setError(null);
    try {
      const w = await fetch(
        `https://api.open-meteo.com/v1/forecast` +
          `?latitude=${lat}&longitude=${lon}` +
          `&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m` +
          `&hourly=temperature_2m,weather_code` +
          `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
          `&timezone=auto&forecast_days=7`
      ).then((r) => r.json());

      setData({
        place: place || {
          name: `${lat.toFixed(2)}, ${lon.toFixed(2)}`,
          country: "",
          admin1: "",
        },
        current: w.current,
        hourly: w.hourly,
        daily: w.daily,
      });
    } catch (e) {
      setError(t("tools.weather.errorGeneric"));
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchByCity(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) fetchByCity(query.trim());
  };

  const onUseLocation = () => {
    if (!navigator.geolocation) return;
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetchByCoords(pos.coords.latitude, pos.coords.longitude, {
          name: t("tools.weather.useLocation"),
          country: "",
          admin1: "",
        });
      },
      () => {
        setLoading(false);
        setError(t("tools.weather.errorGeneric"));
      }
    );
  };

  return (
    <div className="tools-page">
      <div className="tools-container">
        <Link to="/tools" className="tool-back">
          <ArrowLeft size={14} /> {t("tools.backToTools")}
        </Link>

        <h2 className="tools-title">{t("tools.weather.title")}</h2>
        <p className="tools-subtitle">{t("tools.weather.kicker")}</p>

        {/* Search bar */}
        <form className="weather-search" onSubmit={onSubmit}>
          <div className="weather-search__input">
            <Search size={16} aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("tools.weather.searchPlaceholder")}
            />
          </div>
          <button type="submit" className="weather-btn weather-btn--primary">
            {t("tools.weather.searchBtn")}
          </button>
          <button
            type="button"
            onClick={onUseLocation}
            className="weather-btn weather-btn--ghost"
          >
            <MapPin size={14} /> {t("tools.weather.useLocation")}
          </button>
        </form>

        {loading && (
          <div className="weather-state">
            <Loader2 size={20} className="spin" />
            <span>{t("tools.weather.loading")}</span>
          </div>
        )}

        {error && !loading && <div className="weather-state error">{error}</div>}

        {data && !loading && (
          <>
            {/* Current weather */}
            <CurrentCard data={data} t={t} lang={lang} />

            {/* Hourly forecast */}
            <h3 className="weather-section-title">{t("tools.weather.hourly")}</h3>
            <div className="weather-hourly">
              {data.hourly.time.slice(0, 24).map((iso, i) => {
                const [, viLabel, emoji] = codeToInfo(data.hourly.weather_code[i]);
                return (
                  <div key={iso} className="weather-hour">
                    <div className="weather-hour__time">{fmtHour(iso)}</div>
                    <div className="weather-hour__icon" aria-label={viLabel}>{emoji}</div>
                    <div className="weather-hour__temp">
                      {Math.round(data.hourly.temperature_2m[i])}°
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Daily forecast */}
            <h3 className="weather-section-title">{t("tools.weather.daily")}</h3>
            <div className="weather-daily">
              {data.daily.time.map((iso, i) => {
                const [enLabel, viLabel, emoji] = codeToInfo(data.daily.weather_code[i]);
                return (
                  <div key={iso} className="weather-day">
                    <div className="weather-day__name">{fmtDay(iso, lang)}</div>
                    <div className="weather-day__icon" aria-label={viLabel}>{emoji}</div>
                    <div className="weather-day__label">{lang === "vi" ? viLabel : enLabel}</div>
                    <div className="weather-day__temps">
                      <span className="weather-day__hi">
                        {Math.round(data.daily.temperature_2m_max[i])}°
                      </span>
                      <span className="weather-day__lo">
                        {Math.round(data.daily.temperature_2m_min[i])}°
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

const CurrentCard = ({ data, t, lang }) => {
  const { current, place } = data;
  const [enLabel, viLabel, emoji] = codeToInfo(current.weather_code, !current.is_day);
  const placeText = [place.name, place.admin1, place.country].filter(Boolean).join(", ");
  return (
    <div className="weather-current">
      <div className="weather-current__main">
        <div className="weather-current__icon">{emoji}</div>
        <div>
          <div className="weather-current__location">{placeText}</div>
          <div className="weather-current__temp">
            {Math.round(current.temperature_2m)}°
          </div>
          <div className="weather-current__condition">
            {lang === "vi" ? viLabel : enLabel}
          </div>
        </div>
      </div>

      <div className="weather-current__metrics">
        <div className="weather-metric">
          <Thermometer size={14} />
          <span>{t("tools.weather.feelsLike")}</span>
          <strong>{Math.round(current.apparent_temperature)}°</strong>
        </div>
        <div className="weather-metric">
          <Droplets size={14} />
          <span>{t("tools.weather.humidity")}</span>
          <strong>{Math.round(current.relative_humidity_2m)}%</strong>
        </div>
        <div className="weather-metric">
          <Wind size={14} />
          <span>{t("tools.weather.wind")}</span>
          <strong>{Math.round(current.wind_speed_10m)} km/h</strong>
        </div>
      </div>
    </div>
  );
};

export default Weather;
