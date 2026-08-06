// All UI strings — keep tech / brand names in English in both locales.

const en = {
  nav: {
    home: "Home",
    about: "Info",
    projects: "Projects",
    contact: "Contact",
    tools: "Tools",
    cv: "Resume",
    hireMe: "Hire me",
  },

  tools: {
    title: "Tools & Toys",
    subtitle:
      "A few small utilities I built for fun — APIs, randomisers and party tricks.",
    backToTools: "Back to tools",
    weather: {
      cardTitle: "Weather forecast",
      cardDesc: "Live weather for any city. No login. Powered by Open-Meteo.",
      title: "Weather forecast",
      kicker: "Open-Meteo",
      searchPlaceholder: "Search a city (e.g. Hanoi, Tokyo, Paris)",
      searchBtn: "Search",
      useLocation: "Use my location",
      loading: "Loading…",
      notFound: "City not found. Try a different name.",
      errorGeneric: "Couldn't fetch weather. Try again in a moment.",
      humidity: "Humidity",
      wind: "Wind",
      feelsLike: "Feels like",
      hourly: "Next 24 hours",
      daily: "7-day forecast",
    },
    dice: {
      cardTitle: "Dice roll game",
      cardDesc: "Roll dice for your group — highest wins, lowest pays. Fun for up to 15 players.",
      title: "Dice roll",
      kicker: "Random",
      modeRoll: "Roll for everyone",
      modePick: "Pick one",
      players: "Players",
      addPlayer: "Add player",
      playerPlaceholder: "Name…",
      sides: "Sides",
      rollBtn: "Roll!",
      rolling: "Rolling…",
      reset: "Reset",
      pickBtn: "Pick a winner",
      picking: "Picking…",
      winnerLabel: "Winner",
      loserLabel: "Lowest",
      empty: "Add at least 2 players to start.",
    },
  },

  hero: {
    greeting: "Hi, I'm",
    subtitle:
      "I build fullstack web applications, backend services and modern user interfaces.",
    viewWork: "View my work",
    getInTouch: "Get in touch",
  },

  aboutHome: {
    kicker: "About",
    title: "A few things about me.",
    introBefore: "I'm a",
    introRole: "fullstack developer",
    introAfter:
      " who enjoys shaping ideas into clean, reliable software. Always learning, always curious, always shipping.",
    link: "More about me",
  },

  projectsHome: {
    kicker: "Selected work",
    title: "Projects",
    subtitle:
      "A few products I've built — focused on clean UI, clear logic, and easy to extend.",
    viewAll: "View all",
    moreInfo: "More info",
  },

  projectsData: {
    emr: {
      title: "EMR / HIS — Electronic Medical Records Platform",
      shortHome:
        "Angular + ASP.NET Web API platform for electronic medical records, HL7 FHIR R4 and HSM digital signing.",
      shortPage:
        "A hospital-grade EMR/HIS platform (Angular + ASP.NET / C#) built to Vietnam MoH & Social-Insurance standards, with HL7 FHIR R4 interoperability.",
      intro:
        "An Electronic Medical Records (EMR) and Hospital Information System (HIS) platform serving Vietnamese healthcare facilities — deployed in production at hospitals including Nhan Dan 115 Hospital and Nguyen Tri Phuong Hospital, among others. It digitizes clinical record forms across 25+ specialties, standardizes data to Ministry of Health (BYT) and Social Insurance (VSS) schemas, exposes records as HL7 FHIR R4, and secures exchange with HSM-based digital signatures. My main product at Linksoft Vietnam.",
      work:
        "I develop features end-to-end. On the frontend (Angular 13) I build clinical form modules, statistics dashboards with Chart.js and Leaflet region maps, PDF viewers and a real-time transfer-notification flow over SignalR, with a JWT interceptor using a custom tokencode header. On the backend (ASP.NET Web API 2 / C#) I build REST endpoints backed by a dual MongoDB + SQL Server / Oracle data layer, FHIR conversion, reflection-driven form validation and Word/PDF clinical report generation — the web platform centralizes and reports clinical data to the Ministry of Health (BYT) and provincial Departments of Health (Sở Y tế). I also build the companion WPF desktop application (DevExpress), used directly by staff at partner hospitals for the same clinical workflows.",
    },
    pharmacy: {
      title: "Pharmacy Management System",
      shortHome:
        "Node.js + Next.js monorepo for pharmacy management, with Express TypeScript APIs and admin/customer apps.",
      shortPage:
        "An internship project built as a Node.js + Next.js monorepo for pharmacy management, with separate admin and customer experiences.",
      intro:
        "A full-stack pharmacy management platform built during internship. It uses an Express TypeScript REST API plus two Next.js 16 / React applications for admin and customer workflows, covering product, inventory, order, payroll, attendance, and online payment features.",
      work:
        "I contributed to backend API design, JWT role-based authentication, SQL Server integration via Prisma and stored procedures, Excel exports, image uploads, and responsive UI flows for both admin and customer screens.",
    },
  },

  aboutPage: {
    title: "About Me",
    introBefore: "Driven",
    introRole: "Backend Developer",
    introAfter:
      " with foundational skills in Java, C#, and Node.js, passionate about building reliable software solutions. I seek to join a collaborative team where I can learn advanced backend technologies and DevOps practices, contributing to innovative projects and company success.",
    education: "Education",
    skills: "Skills",
    experience: "Work Experience",
    school: "Ho Chi Minh City University of Industry and Trade",
    schoolDate: "September 2021 - October 2025",
    major: "Major: Bachelor of Information Technology",
    skillBackend: "Backend",
    skillDatabase: "Database",
    skillFrontend: "Frontend",
    skillHealthcare: "Healthcare / Interop",
    skillTools: "Tools & DevOps",
    skillSoft: "Soft Skills",
    levelExpert: "expert",
    levelAdvanced: "advanced",
    levelIntermediate: "intermediate",
    linksoft: "Linksoft Vietnam JSC",
    linksoftDate: "August 2025 - Present",
    linksoftRole: "Fullstack Developer",
    linksoftR1:
      "Build an EMR / Hospital Information System (HIS) with Angular 13 on the frontend and ASP.NET Web API 2 (C#) on the backend, to Vietnam MoH (BYT) & Social-Insurance (VSS) standards.",
    linksoftR2:
      "Develop features end-to-end: clinical form modules, statistics dashboards (Chart.js + Leaflet maps), REST APIs and a dual MongoDB + SQL Server / Oracle data layer.",
    linksoftR3:
      "Integrate HL7 FHIR R4 exchange, real-time transfer notifications over SignalR, JWT auth (custom tokencode header) and Word/PDF clinical report generation.",
    linksoftR4:
      "Collaborate on requirements analysis, code review and deployment; use AI tools (Claude, Copilot) to speed up development and debugging.",
    cyberskill: "CyberSkill Software Solutions Company",
    cyberskillDate: "August 2024 - February 2025",
    cyberskillRole: "Internship Backend Developer",
    cyberskillR1: "Assist in analyzing business requirements for assigned projects.",
    cyberskillR2: "Learn and apply Node.js and Next.js in backend development tasks.",
    cyberskillR3: "Contribute to building and testing project modules using Next.js.",
    cyberskillR4:
      "Participate in training sessions on soft skills and emerging technologies.",
  },

  cvPage: {
    role: "Backend / Fullstack Developer",
    objective: "Objective",
    summaryTitle: "Objective",
    summary:
      "Fullstack developer with 1+ year building a production EMR / Hospital Information System (HIS) at Linksoft Vietnam — Angular on the frontend and ASP.NET Web API (C#) on the backend, to Vietnam Ministry of Health (BYT) and Social-Insurance (VSS) standards. Comfortable across REST APIs, SQL Server / Oracle / MongoDB, HL7 FHIR interoperability and real-time SignalR, and I use AI tools daily to develop and debug faster.",
    experience: "Work Experience",
    projects: "Projects",
    education: "Education",
    skills: "Skills",
    techLabel: "Technologies",
    websiteLabel: "Website",
    portfolioLabel: "Portfolio",
    photo: "Photo",
    emrDate: "2025 - Present",
    emrType: "Company product — Linksoft Vietnam",
    pharmacyDate: "2024",
    pharmacyType: "Graduation Project — team of 3",
    print: "Print / Save PDF",
    backToSite: "Portfolio",
  },

  projectsPage: {
    title: "My Projects",
    subtitle:
      "Here are some of my featured projects that showcase my skills and experience.",
    techLabel: "Tech",
    moreInfo: "More Info →",
  },

  projectDetail: {
    intro: "Project Introduction",
    work: "My Work",
    tech: "Technologies Used",
    live: "Visit Website",
    github: "View Source on GitHub",
    demo: "Watch Demo Video",
    back: "Back to Projects",
    notFound: "Project not found",
  },

  contact: {
    badge: "Let's build something",
    title: "Get in touch",
    subtitle:
      "Have a question, an idea, or a project? Send a message — I usually reply within 24 hours.",
    detailsTitle: "Contact details",
    detailsSubtitle: "Fastest ways to reach me.",
    formTitle: "Send a message",
    formSubtitle: "I'll read every message.",
    labelSubject: "Subject",
    labelName: "Your name",
    labelEmail: "Email address",
    labelMessage: "Message",
    placeholderSubject: "What's it about?",
    placeholderName: "Enter your name",
    placeholderEmail: "Enter your email",
    placeholderMessage: "Write your message...",
    hint: "Tip: share context + goals + deadline.",
    sendBtn: "Send message",
    sending: "Sending...",
    sent: "Message sent! I'll get back to you soon.",
    error: "Something went wrong. Please try again.",
    note:
      "Prefer a quick chat? Email is best. If you include your timeline + budget, I can respond faster.",
    replies: "Typically responds within 24 hours",
    infoEmail: "Email",
    infoPhone: "Phone",
    infoLocation: "Location",
    location: "Ho Chi Minh City",
  },

  footer: {
    meetMe: "Meet me at",
    address: "Address",
    contact: "Contact",
    addressValue: "District 12, Ho Chi Minh City",
  },

  hireMenu: {
    header: "What can I help with?",
    formLink: "Or use the contact form",
    options: {
      project: {
        title: "Full project",
        desc: "Build a website or web app",
      },
      feature: {
        title: "Add a feature",
        desc: "Extend an existing project",
      },
      consult: {
        title: "Quick consult",
        desc: "Code review or technical advice",
      },
      collab: {
        title: "Collaboration",
        desc: "Build something together",
      },
    },
    prefill: {
      projectSubject: "Hire me — Full project",
      projectBody:
        "Hi Viet Anh, I'd like to hire you for a full project.\n\n- What I need: \n- Timeline: \n- Budget range: \n",
      featureSubject: "Hire me — Feature work",
      featureBody:
        "Hi Viet Anh, I have an existing project and need to add a feature.\n\n- Project: \n- Feature: \n- Timeline: \n",
      consultSubject: "Hire me — Consultation",
      consultBody:
        "Hi Viet Anh, I'd love your input on the following:\n\n- Topic: \n- Context: \n- Specific question(s): \n",
      collabSubject: "Hire me — Collaboration",
      collabBody:
        "Hi Viet Anh, let's collaborate. Here's the idea:\n\n- The idea: \n- What I bring: \n- What I need from you: \n",
    },
  },

  langSwitch: {
    label: "Language",
    en: "English",
    vi: "Tiếng Việt",
  },
};

const vi = {
  nav: {
    home: "Trang chủ",
    about: "Giới thiệu",
    projects: "Dự án",
    contact: "Liên hệ",
    tools: "Tiện ích",
    cv: "CV",
    hireMe: "Thuê tôi",
  },

  tools: {
    title: "Tiện ích & Thư giãn",
    subtitle:
      "Một vài tool nhỏ tôi làm cho vui — gọi API, random, trò chơi nhóm.",
    backToTools: "Quay lại tiện ích",
    weather: {
      cardTitle: "Dự báo thời tiết",
      cardDesc: "Thời tiết real-time cho mọi thành phố. Không cần đăng ký. Dùng Open-Meteo.",
      title: "Dự báo thời tiết",
      kicker: "Open-Meteo",
      searchPlaceholder: "Tìm thành phố (vd: Hà Nội, Tokyo, Paris)",
      searchBtn: "Tìm",
      useLocation: "Dùng vị trí của tôi",
      loading: "Đang tải…",
      notFound: "Không tìm thấy thành phố. Hãy thử tên khác.",
      errorGeneric: "Không lấy được dữ liệu. Vui lòng thử lại.",
      humidity: "Độ ẩm",
      wind: "Gió",
      feelsLike: "Cảm giác",
      hourly: "24 giờ tới",
      daily: "Dự báo 7 ngày",
    },
    dice: {
      cardTitle: "Trò xúc xắc",
      cardDesc: "Tung xúc xắc cho cả nhóm — cao nhất thắng, thấp nhất chi. Tối đa 15 người.",
      title: "Tung xúc xắc",
      kicker: "Random",
      modeRoll: "Tung cho cả nhóm",
      modePick: "Chọn 1 người",
      players: "Người chơi",
      addPlayer: "Thêm",
      playerPlaceholder: "Tên người chơi…",
      sides: "Số mặt",
      rollBtn: "Tung!",
      rolling: "Đang tung…",
      reset: "Reset",
      pickBtn: "Chọn người thắng",
      picking: "Đang chọn…",
      winnerLabel: "Người thắng",
      loserLabel: "Thấp nhất",
      empty: "Thêm ít nhất 2 người để chơi.",
    },
  },

  hero: {
    greeting: "Xin chào, tôi là",
    subtitle:
      "Tôi xây dựng ứng dụng web fullstack, dịch vụ backend và giao diện người dùng hiện đại.",
    viewWork: "Xem dự án",
    getInTouch: "Liên hệ ngay",
  },

  aboutHome: {
    kicker: "Giới thiệu",
    title: "Đôi điều về tôi.",
    introBefore: "Tôi là một",
    introRole: "lập trình viên fullstack",
    introAfter:
      " thích biến ý tưởng thành phần mềm gọn gàng, đáng tin cậy. Luôn học hỏi, luôn tò mò, luôn ship sản phẩm.",
    link: "Tìm hiểu thêm",
  },

  projectsHome: {
    kicker: "Dự án nổi bật",
    title: "Dự án",
    subtitle:
      "Một vài sản phẩm tôi đã làm — tập trung vào clean UI, logic rõ ràng và dễ mở rộng.",
    viewAll: "Xem tất cả",
    moreInfo: "Chi tiết",
  },

  projectsData: {
    emr: {
      title: "EMR / HIS — Nền tảng Hồ sơ bệnh án điện tử",
      shortHome:
        "Nền tảng hồ sơ bệnh án điện tử với Angular + ASP.NET Web API, chuẩn HL7 FHIR R4 và ký số HSM.",
      shortPage:
        "Nền tảng EMR/HIS cấp bệnh viện (Angular + ASP.NET / C#) theo chuẩn Bộ Y tế & BHXH, tích hợp HL7 FHIR R4.",
      intro:
        "Nền tảng Hồ sơ bệnh án điện tử (EMR) và Hệ thống thông tin bệnh viện (HIS) phục vụ các cơ sở khám chữa bệnh tại Việt Nam — đã được triển khai thực tế tại các bệnh viện như Bệnh viện Nhân dân 115, Bệnh viện Nguyễn Tri Phương... Hệ thống số hóa biểu mẫu bệnh án cho hơn 25 chuyên khoa, chuẩn hóa dữ liệu theo Bộ Y tế (BYT) và Bảo hiểm xã hội (VSS), xuất dữ liệu theo chuẩn HL7 FHIR R4 và bảo mật trao đổi bằng ký số HSM. Đây là sản phẩm chính của tôi tại Linksoft Việt Nam.",
      work:
        "Tôi phát triển tính năng end-to-end. Ở frontend (Angular 13): xây dựng module biểu mẫu bệnh án, dashboard thống kê với Chart.js và bản đồ vùng Leaflet, trình xem PDF và luồng thông báo chuyển viện real-time qua SignalR, cùng JWT interceptor dùng header tokencode tùy biến. Ở backend (ASP.NET Web API 2 / C#): xây REST API trên tầng dữ liệu kép MongoDB + SQL Server / Oracle, chuyển đổi FHIR, kiểm tra biểu mẫu bằng reflection và sinh báo cáo Word/PDF lâm sàng — nền tảng web đóng vai trò trung tâm lưu trữ và báo cáo dữ liệu khám chữa bệnh cho Bộ Y tế (BYT) và Sở Y tế. Tôi cũng xây dựng ứng dụng desktop WPF (DevExpress) đi kèm, được đội ngũ tại các bệnh viện đối tác sử dụng trực tiếp cho cùng các nghiệp vụ lâm sàng.",
    },
    pharmacy: {
      title: "Hệ thống quản lý nhà thuốc",
      shortHome:
        "Monorepo Node.js + Next.js cho quản lý nhà thuốc, với API Express TypeScript và các app admin/customer.",
      shortPage:
        "Đồ án thực tập xây dựng dưới dạng monorepo Node.js + Next.js cho quản lý nhà thuốc, tách riêng trải nghiệm admin và khách hàng.",
      intro:
        "Nền tảng quản lý nhà thuốc full-stack được xây dựng trong kỳ thực tập. Hệ thống dùng REST API Express TypeScript cùng hai ứng dụng Next.js 16 / React cho luồng admin và khách hàng, bao gồm quản lý sản phẩm, tồn kho, đơn hàng, chấm công, tính lương và thanh toán online.",
      work:
        "Tôi tham gia thiết kế API backend, xác thực JWT theo vai trò, tích hợp SQL Server qua Prisma và stored procedures, xuất báo cáo Excel, upload ảnh, cùng xây dựng UI responsive cho cả trang quản trị và trang khách hàng.",
    },
  },

  aboutPage: {
    title: "Về tôi",
    introBefore: "Một",
    introRole: "Backend Developer",
    introAfter:
      " đầy động lực với nền tảng Java, C#, Node.js, đam mê xây dựng giải pháp phần mềm đáng tin cậy. Tôi mong muốn gia nhập đội ngũ collaborative để học hỏi công nghệ backend và DevOps nâng cao, đóng góp vào các dự án sáng tạo và sự thành công của công ty.",
    education: "Học vấn",
    skills: "Kỹ năng",
    experience: "Kinh nghiệm làm việc",
    school: "Trường Đại học Công Thương TP.HCM",
    schoolDate: "Tháng 9 2021 - Tháng 10 2025",
    major: "Chuyên ngành: Cử nhân Công nghệ Thông tin",
    skillBackend: "Backend",
    skillDatabase: "Cơ sở dữ liệu",
    skillFrontend: "Frontend",
    skillHealthcare: "Y tế / Liên thông",
    skillTools: "Công cụ & DevOps",
    skillSoft: "Kỹ năng mềm",
    levelExpert: "thành thạo",
    levelAdvanced: "khá",
    levelIntermediate: "trung cấp",
    linksoft: "Công ty CP Linksoft Việt Nam",
    linksoftDate: "Tháng 8 2025 - Hiện tại",
    linksoftRole: "Lập trình viên Fullstack",
    linksoftR1:
      "Xây dựng hệ thống EMR / thông tin bệnh viện (HIS) với Angular 13 ở frontend và ASP.NET Web API 2 (C#) ở backend, theo chuẩn Bộ Y tế (BYT) & Bảo hiểm xã hội (VSS).",
    linksoftR2:
      "Phát triển tính năng end-to-end: module biểu mẫu bệnh án, dashboard thống kê (Chart.js + bản đồ Leaflet), REST API và tầng dữ liệu kép MongoDB + SQL Server / Oracle.",
    linksoftR3:
      "Tích hợp trao đổi HL7 FHIR R4, thông báo chuyển viện real-time qua SignalR, xác thực JWT (header tokencode tùy biến) và sinh báo cáo Word/PDF lâm sàng.",
    linksoftR4:
      "Phối hợp phân tích yêu cầu, review code và triển khai; dùng công cụ AI (Claude, Copilot) để tăng tốc phát triển và gỡ lỗi.",
    cyberskill: "Công ty TNHH Giải pháp Phần mềm CyberSkill",
    cyberskillDate: "Tháng 8 2024 - Tháng 2 2025",
    cyberskillRole: "Thực tập sinh Backend",
    cyberskillR1: "Hỗ trợ phân tích yêu cầu nghiệp vụ cho các dự án được giao.",
    cyberskillR2: "Học và ứng dụng Node.js, Next.js trong các tác vụ phát triển backend.",
    cyberskillR3: "Đóng góp vào việc xây dựng và kiểm thử module bằng Next.js.",
    cyberskillR4:
      "Tham gia các buổi đào tạo về kỹ năng mềm và công nghệ mới.",
  },

  cvPage: {
    role: "Lập trình viên Backend / Fullstack",
    objective: "Mục tiêu",
    summaryTitle: "Mục tiêu",
    summary:
      "Lập trình viên fullstack với hơn 1 năm xây dựng hệ thống EMR / thông tin bệnh viện (HIS) thực tế tại Linksoft Việt Nam — Angular ở frontend và ASP.NET Web API (C#) ở backend, theo chuẩn Bộ Y tế (BYT) và Bảo hiểm xã hội (VSS). Thành thạo REST API, SQL Server / Oracle / MongoDB, liên thông HL7 FHIR và real-time SignalR; sử dụng công cụ AI hằng ngày để phát triển và gỡ lỗi nhanh hơn.",
    experience: "Kinh nghiệm làm việc",
    projects: "Dự án",
    education: "Học vấn",
    skills: "Kỹ năng",
    techLabel: "Công nghệ",
    websiteLabel: "Website",
    portfolioLabel: "Portfolio",
    photo: "Ảnh",
    emrDate: "2025 - Hiện tại",
    emrType: "Sản phẩm công ty — Linksoft Việt Nam",
    pharmacyDate: "2024",
    pharmacyType: "Đồ án thực tập — nhóm 3 người",
    print: "In / Lưu PDF",
    backToSite: "Portfolio",
  },

  projectsPage: {
    title: "Dự án của tôi",
    subtitle:
      "Một vài dự án tiêu biểu thể hiện kỹ năng và kinh nghiệm của tôi.",
    techLabel: "Công nghệ",
    moreInfo: "Chi tiết →",
  },

  projectDetail: {
    intro: "Giới thiệu dự án",
    work: "Vai trò của tôi",
    tech: "Công nghệ sử dụng",
    live: "Truy cập website",
    github: "Xem mã nguồn trên GitHub",
    demo: "Xem video demo",
    back: "Quay lại Dự án",
    notFound: "Không tìm thấy dự án",
  },

  contact: {
    badge: "Cùng xây dựng điều gì đó",
    title: "Liên hệ với tôi",
    subtitle:
      "Có câu hỏi, ý tưởng hay dự án? Gửi tin nhắn — tôi thường phản hồi trong 24 giờ.",
    detailsTitle: "Thông tin liên hệ",
    detailsSubtitle: "Cách liên hệ nhanh nhất.",
    formTitle: "Gửi tin nhắn",
    formSubtitle: "Tôi sẽ đọc từng tin nhắn.",
    labelSubject: "Tiêu đề",
    labelName: "Họ tên",
    labelEmail: "Địa chỉ email",
    labelMessage: "Lời nhắn",
    placeholderSubject: "Bạn muốn liên hệ về việc gì?",
    placeholderName: "Nhập họ tên của bạn",
    placeholderEmail: "Nhập email của bạn",
    placeholderMessage: "Viết lời nhắn của bạn...",
    hint: "Mẹo: chia sẻ bối cảnh + mục tiêu + deadline.",
    sendBtn: "Gửi tin nhắn",
    sending: "Đang gửi...",
    sent: "Đã gửi! Tôi sẽ phản hồi sớm nhất có thể.",
    error: "Có lỗi xảy ra. Vui lòng thử lại.",
    note:
      "Muốn trao đổi nhanh? Email là tốt nhất. Nếu bạn nói rõ timeline + ngân sách, tôi sẽ phản hồi nhanh hơn.",
    replies: "Thường phản hồi trong 24 giờ",
    infoEmail: "Email",
    infoPhone: "Điện thoại",
    infoLocation: "Vị trí",
    location: "TP. Hồ Chí Minh",
  },

  footer: {
    meetMe: "Theo dõi tôi tại",
    address: "Địa chỉ",
    contact: "Liên hệ",
    addressValue: "Quận 12, TP. Hồ Chí Minh",
  },

  hireMenu: {
    header: "Tôi có thể giúp gì?",
    formLink: "Hoặc dùng form liên hệ",
    options: {
      project: {
        title: "Dự án trọn gói",
        desc: "Xây dựng website hoặc web app",
      },
      feature: {
        title: "Thêm tính năng",
        desc: "Mở rộng dự án hiện có",
      },
      consult: {
        title: "Tư vấn nhanh",
        desc: "Review code hoặc tư vấn kỹ thuật",
      },
      collab: {
        title: "Hợp tác",
        desc: "Cùng xây dựng dự án",
      },
    },
    prefill: {
      projectSubject: "Thuê tôi — Dự án trọn gói",
      projectBody:
        "Chào Việt Anh, tôi muốn thuê bạn cho một dự án trọn gói.\n\n- Tôi cần: \n- Thời gian: \n- Ngân sách: \n",
      featureSubject: "Thuê tôi — Thêm tính năng",
      featureBody:
        "Chào Việt Anh, tôi có một dự án và cần thêm tính năng.\n\n- Dự án: \n- Tính năng: \n- Thời gian: \n",
      consultSubject: "Thuê tôi — Tư vấn",
      consultBody:
        "Chào Việt Anh, tôi muốn được bạn góp ý:\n\n- Chủ đề: \n- Bối cảnh: \n- Câu hỏi cụ thể: \n",
      collabSubject: "Thuê tôi — Hợp tác",
      collabBody:
        "Chào Việt Anh, hãy hợp tác cùng nhau. Ý tưởng:\n\n- Ý tưởng: \n- Tôi mang lại: \n- Tôi cần ở bạn: \n",
    },
  },

  langSwitch: {
    label: "Ngôn ngữ",
    en: "English",
    vi: "Tiếng Việt",
  },
};

const dictionaries = { en, vi };

export const resolve = (lang, path) => {
  const keys = path.split(".");
  let value = dictionaries[lang];
  for (const k of keys) {
    if (value == null) return path;
    value = value[k];
  }
  if (value == null && lang !== "en") return resolve("en", path);
  return value ?? path;
};

export default dictionaries;