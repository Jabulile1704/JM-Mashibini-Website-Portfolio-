// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// the site without touching any component code.
// The transit map geometry lives in components/TransitMap.jsx.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Jabulile Mashibini',
  role: 'Junior Full Stack Developer',
  email: 'jabu.mashibs@gmail.com',
  phone: '060 613 1823',
  github: 'https://github.com/Jabulile1704',
  githubLabel: 'github.com/Jabulile1704',
  linkedin: 'https://linkedin.com/in/jabulile-mashibini',
  linkedinLabel: 'linkedin.com/in/jabulile-mashibini',
  cvFile: 'Jabulile_Mashibini_CV_Junior_Full_Stack_Developer.pdf',
  photo: `${import.meta.env.BASE_URL}jabulile.jpg`,
}

export const heroIntro =
  'I build full-stack apps, mostly Flutter on the front with Firebase, ASP.NET Core or Azure behind it, and I teach software engineering at CTU Training Solutions. This site is laid out like a train map: one line for the things I have built, one for work, one for certifications.'

export const about = [
  'I’m a software engineer and facilitator based in South Africa. During the day I teach C#, Java and full-stack development at CTU Training Solutions. The rest of the time I build complete applications, from requirements and ERDs through to CI/CD and a working release.',
  'The project I’m proudest of is MoTiroong, a staff attendance platform for the Mangaung Metro Municipality where a clock-in only counts if your location and your fingerprint agree. Before that I built TiroMoMangaung, a job board for my area, and along the way a fully tested payroll system, a desktop remote for an Arduino and a salon booking app.',
  'I’m looking for a junior full-stack role where I can ship reliable, well-tested software with a team.',
]

// Build line, listed newest first. `id` matches the station on the map.
export const builds = [
  {
    id: 'motiroong',
    name: 'MoTiroong',
    tagline: 'Geo-verified staff attendance for Mangaung Metro Municipality',
    status: 'In build · government client',
    flagship: true,
    description:
      'Staff clock in and out with on-device biometric verification and GPS geofencing, so HR gets tamper-resistant, auditable records without raw biometric data ever leaving the phone. POPIA-conscious by design, with data hosted in africa-south1.',
    bullets: [
      'Server-authoritative: clients never write directly, Cloud Functions set timestamps and geofence verdicts',
      'Passkey-style biometric sign-in with a Keychain/Keystore device secret, hash verification and device binding',
      'Flag, don’t refuse: off-site clock-ins are recorded and flagged for a supervisor, with a full audit trail',
      'Next.js admin console for sites, employee approvals, exception reviews, CSV export and an audit log',
    ],
    tech: ['Flutter', 'Firebase', 'Cloud Functions', 'TypeScript', 'Firestore', 'Next.js'],
    links: [
      { label: 'mobile', href: 'https://github.com/Jabulile1704/motiroong-mobile' },
      { label: 'backend', href: 'https://github.com/Jabulile1704/motiroong-backend' },
      { label: 'admin', href: 'https://github.com/Jabulile1704/admin-motiroong' },
    ],
  },
  {
    id: 'prayer',
    name: 'Mashibini Prayer',
    tagline: 'A daily prayer app',
    status: 'Under construction',
    upcoming: true,
    description: 'Early days, still being built.',
    tech: ['Flutter', 'Firebase'],
    links: [{ label: 'repo', href: 'https://github.com/Jabulile1704/Mashibini-Prayer' }],
  },
  {
    id: 'robotoremote',
    name: 'RobotoRemote',
    tagline: 'A desktop remote for an Arduino Uno',
    description:
      'Windows Forms app that talks to an Arduino over USB serial. Each button sends a command string over the COM port and the sketch switches one of four LEDs on a breadboard.',
    bullets: [
      'COM port picker, live connection status and a clean port release on close',
      'Individual and all-on/all-off LED control over a 9600-baud serial protocol',
      'Arduino C++ sketch that parses newline-terminated commands into pin writes',
    ],
    tech: ['C#', 'Windows Forms', 'Arduino', 'C++', 'Serial / USB'],
    links: [{ label: 'repo', href: 'https://github.com/Jabulile1704/RobotoRemote' }],
  },
  {
    id: 'robotics',
    name: 'Robotics Intro',
    tagline: 'A non-blocking Arduino state machine',
    description:
      'One button does three jobs: tap to start, double-tap to stop, hold for two seconds to reset. Meanwhile a servo sweeps, an ultrasonic sensor tracks distance live and an LCD runs a startup countdown.',
    tech: ['C++', 'Arduino', 'Servo', 'Ultrasonic sensor', 'LCD'],
    links: [{ label: 'repo', href: 'https://github.com/Jabulile1704/Robotics_Intro' }],
  },
  {
    id: 'mzansi',
    name: 'MzansiPayrollSystem',
    tagline: 'A payroll system built to be provably correct',
    description:
      'C# Windows Forms payroll for contractors using South African rules: gross pay, UIF, PAYE with a dependant rebate, and a membership fee. The business logic is kept apart from the UI and tested at every level.',
    bullets: [
      'PayrollCalculator class separated from the WinForms UI so it can be tested on its own',
      'MSTest suite covering unit, integration and full system workflows, all passing',
      'Input validation with clear error messages and test logging through TestContext',
    ],
    tech: ['C#', '.NET Framework', 'Windows Forms', 'MSTest'],
    links: [{ label: 'repo', href: 'https://github.com/Jabulile1704/MzansiPayrollSystem' }],
  },
  {
    id: 'unittesting',
    name: 'UnitTesting',
    tagline: 'Unit testing exercises in C#',
    description: 'Automated tests, assertions and checking that the code does what it claims to.',
    tech: ['C#', '.NET'],
    links: [{ label: 'repo', href: 'https://github.com/Jabulile1704/UnitTesting-Exercise' }],
  },
  {
    id: 'freshfadez',
    name: 'FreshFadez',
    tagline: 'Salon appointment booking app',
    description:
      'Flutter front end for a hair salon. Clients sign in, browse services and the stylist team, and manage their appointments from an animated mobile UI. The booking backend is next.',
    bullets: [
      'Login, home, services, “Our Team”, appointments and profile screens',
      'Appointment list with status, pricing in Rand, and edit or cancel actions',
      'Typed models for salons, services, stylists and appointments, plus custom animated widgets',
    ],
    tech: ['Flutter', 'Dart', 'Material Design'],
    links: [{ label: 'repo', href: 'https://github.com/Jabulile1704/fresh_fadez' }],
  },
  {
    id: 'tiro',
    name: 'TiroMoMangaung',
    tagline: 'A local job board that knows how far away each job is',
    description:
      'Flutter and Firebase marketplace connecting job seekers with employers around Mangaung. Listings update in real time and show the distance to each job.',
    bullets: [
      'Job seekers: profiles, filtered search, saved jobs, CV uploads and application tracking',
      'Employers: company verification, job posting, candidate review and interview scheduling',
      'Real-time Firestore, push notifications, offline support and role-based security rules',
    ],
    tech: ['Flutter', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'Push notifications'],
    links: [{ label: 'repo', href: 'https://github.com/Jabulile1704/TiroMoMangaung' }],
  },
  {
    id: 'az104',
    name: 'AZ-104 Labs',
    tagline: 'Azure administration, done by hand',
    description:
      'Labs covering identity, governance, compute, storage and virtual networking, written up so someone else can follow them.',
    tech: ['Azure', 'Entra ID', 'Virtual networking'],
    links: [{ label: 'repo', href: 'https://github.com/Jabulile1704/azure-virtual-networking' }],
  },
]

// Career line, newest first
export const career = [
  {
    id: 'ctu',
    period: '2026 – now',
    role: 'Software Engineering Facilitator',
    place: 'CTU Training Solutions',
    current: true,
    bullets: [
      'Deliver NQF Level 6 modules in software design and testing with C# and Java',
      'Teach ASP.NET/.NET development, Git and GitHub workflow, and code review',
      'Built the AZ-204 bootcamp labs in C# and ASP.NET Core',
      'Facilitate SDLC, Agile, and software testing and QA',
    ],
  },
  {
    id: 'wwise',
    period: '2025 – 2026',
    role: 'Software Development Facilitator',
    place: 'WWISE',
    bullets: [
      'Taught Python, JavaScript, HTML/CSS and SQL',
      'Covered designing and consuming web APIs',
      'Facilitated Power BI and PowerApps for data and low-code work',
    ],
  },
  {
    id: 'cut-adv',
    period: '2024 – 2025',
    role: 'Advanced Diploma in Information Technology',
    place: 'Central University of Technology',
  },
  {
    id: 'cut',
    period: '2020 – 2023',
    role: 'Diploma in Information Technology',
    place: 'Central University of Technology',
  },
]

export const careerExtras = ['Microsoft Certified Trainer', 'Registered ETDP SETA Assessor']

// Cert line, grouped the same way as the stops on the map
export const certGroups = [
  {
    stop: 'Fundamentals',
    certs: [
      ['AZ-900', 'Azure Fundamentals'],
      ['SC-900', 'Security, Compliance & Identity Fundamentals'],
      ['DP-900', 'Azure Data Fundamentals'],
      ['Cisco', 'Python Essentials 1 & 2'],
    ],
  },
  {
    stop: 'Other clouds',
    certs: [
      ['AWS', 'Certified Cloud Practitioner'],
      ['OCI', 'Oracle Cloud Infrastructure Foundations'],
    ],
  },
  {
    stop: 'Associate',
    certs: [
      ['AZ-104', 'Azure Administrator'],
      ['AZ-204', 'Azure Developer'],
      ['AI-200', 'Azure AI Cloud Developer'],
      ['DP-700', 'Fabric Data Engineer'],
      ['PL-300', 'Power BI Data Analyst'],
    ],
  },
  {
    stop: 'Specialty',
    certs: [['AZ-140', 'Azure Virtual Desktop']],
  },
  {
    stop: 'Security',
    certs: [
      ['SC-200', 'Security Operations Analyst'],
      ['SC-300', 'Identity & Access Administrator'],
      ['ISO', 'ISO/IEC 27001:2022 Implementation'],
    ],
  },
  {
    stop: 'Interchange',
    certs: [['MCT', 'Microsoft Certified Trainer']],
  },
]

export const certCount = certGroups.reduce((n, g) => n + g.certs.length, 0)

export const toolbox = [
  'C#', 'ASP.NET Core', 'Java', 'Dart', 'Flutter', 'Python', 'JavaScript', 'TypeScript', 'SQL',
  'PostgreSQL', 'Firebase', 'Next.js', 'Azure', 'AWS', 'GitHub Actions', 'Arduino', 'Linux',
]

export const nowBoarding = [
  'CI/CD with GitHub Actions and Azure DevOps',
  'Clean architecture in Flutter',
  'Cloud security',
]
