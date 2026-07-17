// ─────────────────────────────────────────────────────────────
// All portfolio content lives here — edit this file to update
// the site without touching any component code.
// Copy and structure follow design_handoff_portfolio/README.md.
// ─────────────────────────────────────────────────────────────

const dev = (n) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${n}.svg`
const si = (n, c = '3fe07f') => `https://cdn.simpleicons.org/${n}/${c}`

export const profile = {
  name: 'Jabulile Mashibini',
  tab: 'jabulile_mashibini.dev',
  email: 'jabu.mashibs@gmail.com',
  phone: '060 613 1823',
  github: 'https://github.com/Jabulile1704',
  githubLabel: 'github.com/Jabulile1704',
  linkedin: 'https://linkedin.com/in/jabulile-mashibini',
  linkedinLabel: 'linkedin.com/in/jabulile-mashibini',
  cvFile: 'Jabulile_Mashibini_CV_Junior_Full_Stack_Developer.pdf',
  photo: `${import.meta.env.BASE_URL}jabulile.jpg`,
}

export const roles = [
  'Junior Full Stack Developer',
  'Flutter + ASP.NET Core Builder',
  'Azure Certified (AZ-204)',
  'Software Engineering Facilitator',
]

export const heroIntro =
  'I build applications across the full stack — Flutter and web front ends, C#/ASP.NET Core and Python back ends, deployed on Azure. From a geo-verified attendance platform for government to a location-aware job-matching app, I ship real products end to end.'

export const sectionIds = [
  'sec-home',
  'sec-about',
  'sec-skills',
  'sec-projects',
  'sec-experience',
  'sec-certs',
  'sec-education',
  'sec-contact',
]

export const tree = [
  { name: 'hello_world.tsx', icon: '⟨⟩', color: '#62d9d0', id: 'sec-home' },
  { name: 'about.md', icon: '↓', color: '#e3b45c', id: 'sec-about' },
  { name: 'skills.json', icon: '{}', color: '#e3b45c', id: 'sec-skills' },
  { name: 'projects/', icon: '▸', color: '#3fe07f', id: 'sec-projects' },
  { name: 'experience.log', icon: '≡', color: '#8fa896', id: 'sec-experience' },
  { name: 'certifications.yml', icon: '✓', color: '#3fe07f', id: 'sec-certs' },
  { name: 'education.cs', icon: '#', color: '#62d9d0', id: 'sec-education' },
  { name: 'contact.sh', icon: '$', color: '#3fe07f', id: 'sec-contact' },
]

export const skills = [
  {
    key: 'front_end',
    items: [
      { label: 'Flutter (Dart)', icon: dev('flutter/flutter-original') },
      { label: 'JavaScript', icon: dev('javascript/javascript-original') },
      { label: 'HTML5', icon: dev('html5/html5-original') },
      { label: 'CSS3', icon: dev('css3/css3-original') },
      { label: 'Responsive design' },
    ],
  },
  {
    key: 'back_end',
    items: [
      { label: 'C#', icon: dev('csharp/csharp-original') },
      { label: 'ASP.NET Core Web API', icon: dev('dotnetcore/dotnetcore-original') },
      { label: 'Python', icon: dev('python/python-original') },
      { label: 'REST APIs' },
      { label: 'Swagger/OpenAPI', icon: dev('swagger/swagger-original') },
      { label: 'Java', icon: dev('java/java-original') },
    ],
  },
  {
    key: 'databases',
    items: [
      { label: 'PostgreSQL', icon: dev('postgresql/postgresql-original') },
      { label: 'SQL', icon: dev('azuresqldatabase/azuresqldatabase-original') },
      { label: 'Firestore', icon: dev('firebase/firebase-plain') },
      { label: 'Power BI' },
    ],
  },
  {
    key: 'auth_security',
    items: [
      { label: 'JWT + refresh tokens', icon: si('jsonwebtokens', 'a8e6bf') },
      { label: 'Firebase Auth', icon: dev('firebase/firebase-plain') },
      { label: 'Identity & access mgmt' },
    ],
  },
  {
    key: 'cloud',
    items: [
      { label: 'Azure App Services', icon: dev('azure/azure-original') },
      { label: 'Azure Storage', icon: dev('azure/azure-original') },
      { label: 'Entra ID', icon: dev('azure/azure-original') },
      { label: 'Firebase', icon: dev('firebase/firebase-plain') },
      { label: 'AWS fundamentals', icon: dev('amazonwebservices/amazonwebservices-plain-wordmark') },
    ],
  },
  {
    key: 'tools',
    items: [
      { label: 'Git', icon: dev('git/git-original') },
      { label: 'GitHub Actions CI/CD', icon: si('githubactions', '62d9d0') },
      { label: 'GitHub Projects', icon: si('github', 'a8e6bf') },
      { label: 'Agile' },
      { label: 'SDLC' },
      { label: 'Testing' },
    ],
  },
]

export const projects = [
  {
    folder: 'MoTirong/',
    title: 'Geo-Verified Staff Attendance Platform',
    description:
      'Cross-platform clock-in/clock-out app for the Mangaung Metro Municipality with mandatory geo-tagging and biometric fingerprint verification — including fallback strategies for worn fingerprints. Full engineering docs (ERD, use cases, API reference, backlog) and POPIA-compliant by design.',
    bullets: [
      'JWT auth with refresh tokens; Swagger/OpenAPI docs',
      'GitHub Projects sprints + GitHub Actions CI/CD',
      'Tested on physical Android devices via USB/ADB',
    ],
    tech: ['Flutter', 'ASP.NET Core', 'PostgreSQL', 'Azure', 'JWT'],
  },
  {
    folder: 'TiroMoMangaung/',
    title: 'Local Job-Matching Platform',
    description:
      'Cross-platform Flutter app connecting job seekers with employers in the Mangaung region — a localised job-matching platform in the spirit of LinkedIn and Indeed, with location-aware listings showing distance to each job.',
    bullets: [
      'CV uploads, push notifications, in-app profile management',
      'Admin dashboard for listings & applicants',
      'Application status tracking: accepted / pending / declined',
    ],
    tech: ['Flutter', 'Firebase Auth', 'Firestore', 'Push Notifications'],
  },
]

export const experience = [
  {
    hash: 'a7f3e2d',
    period: '2026 – Present',
    role: 'Software Engineering Facilitator',
    company: 'CTU Training Solutions',
    current: true,
    bullets: [
      'Deliver NQF Level 6 modules in software design & testing with C# and Java',
      'Teach ASP.NET/.NET development, Git/GitHub, and code review practices',
      'Built AZ-204 bootcamp labs with C# and ASP.NET Core',
      'Facilitate SDLC, Agile, and software testing & QA training',
    ],
  },
  {
    hash: '3c91b04',
    period: '2025 – 2026',
    role: 'Software Development Facilitator',
    company: 'WWISE',
    current: false,
    bullets: [
      'Delivered training in Python, JavaScript, HTML/CSS, and SQL',
      'Taught Web API design & consumption and modern web fundamentals',
      'Facilitated Power BI and PowerApps for data-driven & low-code solutions',
    ],
  },
]

export const globeCodes = [
  'AZ-204', 'AZ-104', 'AZ-140', 'AZ-900', 'SC-300', 'SC-200', 'SC-900',
  'DP-700', 'DP-900', 'PL-300', 'AWS', 'OCI', 'CISCO', 'ISO', 'MCT',
]

export const certSummary = [
  { count: '10×', label: 'Microsoft Certified' },
  { count: '1×', label: 'AWS Cloud Practitioner' },
  { count: '1×', label: 'Oracle Cloud Foundations' },
  { count: '1×', label: 'Cisco Python Essentials' },
  { count: '1×', label: 'ISO/IEC 27001:2022' },
]

const azIcon = dev('azure/azure-original')
const isoIcon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='none' stroke='%233fe07f' stroke-width='2'/%3E%3Cpath d='M7.5 12.5l3 3 6-6.5' fill='none' stroke='%233fe07f' stroke-width='2'/%3E%3C/svg%3E"

export const certs = [
  { code: 'AZ-204', name: 'Azure Developer Associate', icon: azIcon },
  { code: 'AZ-104', name: 'Azure Administrator Associate', icon: azIcon },
  { code: 'AZ-140', name: 'Azure Virtual Desktop Specialty', icon: azIcon },
  { code: 'AZ-900', name: 'Azure Fundamentals', icon: azIcon },
  { code: 'SC-300', name: 'Identity & Access Administrator Associate', icon: azIcon },
  { code: 'SC-200', name: 'Security Operations Analyst Associate', icon: azIcon },
  { code: 'SC-900', name: 'Security, Compliance & Identity Fundamentals', icon: azIcon },
  { code: 'DP-700', name: 'Fabric Data Engineer Associate', icon: azIcon },
  { code: 'DP-900', name: 'Azure Data Fundamentals', icon: azIcon },
  { code: 'PL-300', name: 'Power BI Data Analyst Associate', icon: azIcon },
  { code: 'AWS', name: 'Certified Cloud Practitioner', icon: dev('amazonwebservices/amazonwebservices-plain-wordmark') },
  { code: 'OCI', name: 'Oracle Cloud Infrastructure Foundations', icon: dev('oracle/oracle-original') },
  { code: 'CISCO', name: 'Python Essentials 1 & 2', icon: si('cisco', '62d9d0') },
  { code: 'ISO', name: '27001:2022 InfoSec Implementation', icon: isoIcon },
  { code: 'MCT', name: 'Microsoft Certified Trainer — in progress', icon: azIcon },
]

export const education = [
  {
    period: '2024 – 2025',
    title: 'Advanced Diploma in Information Technology',
    institution: 'Central University of Technology',
  },
  {
    period: '2020 – 2023',
    title: 'Diploma in Information Technology',
    institution: 'Central University of Technology',
  },
]

export const contactIcons = {
  github: si('github', '6dff9e'),
  linkedin: dev('linkedin/linkedin-original'),
}
