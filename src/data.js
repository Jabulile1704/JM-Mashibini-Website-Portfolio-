// ─────────────────────────────────────────────────────────────
// All portfolio content lives here — edit this file to update
// the site without touching any component code.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Jabulile Mashibini',
  headline: 'Software Engineering Facilitator · Cloud & DevOps Engineer',
  tagline:
    '12× cloud certified across Azure, AWS and OCI. I build production-grade software, automate its delivery, and teach the next generation of engineers to do the same.',
  targetRoles: [
    'Junior DevOps Engineer',
    'Junior Cloud Engineer',
    'Junior Software Engineer',
    'Junior Full Stack Developer',
  ],
  location: 'Johannesburg / Cape Town, South Africa',
  email: 'jabu.mashibs@gmail.com',
  phone: '060 613 1823',
  linkedin: 'https://www.linkedin.com/in/jabulile-mashibini',
  github: 'https://github.com/Jabulile1704',
}

export const about = {
  paragraphs: [
    'I am an Azure-certified software engineering professional and technical facilitator with 14 industry certifications spanning cloud administration, development, security, and data — including AZ-104 Azure Administrator, AZ-204 Azure Developer, AWS Cloud Practitioner, and Oracle Cloud Infrastructure Foundations.',
    'By day I deliver NQF Level 6 software engineering modules (C#, Java, ASP.NET Core, software design and testing) at CTU Training Solutions. Alongside that, I ship real products: MoTirong, a geo-verified biometric attendance platform built for a government client, runs on an ASP.NET Core + PostgreSQL backend I deploy to Azure with GitHub Actions CI/CD.',
    'That combination is my edge — I don\'t just write code, I explain it, document it, and level up teams with it. I am now channelling that experience into a dedicated junior role in DevOps, cloud, or software engineering.',
  ],
  stats: [
    { value: '14', label: 'Industry certifications' },
    { value: '3', label: 'Cloud platforms (Azure · AWS · OCI)' },
    { value: '150+', label: 'Learners trained & mentored' },
    { value: '2', label: 'Flagship products shipped' },
  ],
  education: [
    {
      qualification: 'Advanced Diploma in Information Technology',
      institution: 'Central University of Technology, Free State',
      period: '2024 – 2025',
    },
    {
      qualification: 'Diploma in Information Technology',
      institution: 'Central University of Technology, Free State',
      period: '2020 – 2023',
    },
  ],
}

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'code',
    skills: ['C#', 'Java', 'Python', 'JavaScript', 'Dart', 'SQL', 'C++ (Arduino)'],
  },
  {
    title: 'Web & Mobile Development',
    icon: 'web',
    skills: [
      'ASP.NET Core Web API',
      'React',
      'Flutter',
      'REST APIs',
      'Swagger / OpenAPI',
      'HTML5',
      'CSS3',
      'JWT Authentication',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    skills: [
      'Microsoft Azure (VMs, Storage, App Services, VNets, Entra ID, AVD, Monitor)',
      'AWS (Cloud Practitioner)',
      'Oracle Cloud Infrastructure',
      'GitHub Actions CI/CD',
      'Firebase (Auth, Firestore)',
      'Linux (Ubuntu)',
      'Windows Server & Active Directory',
      'Hyper-V Virtualisation',
    ],
  },
  {
    title: 'Databases',
    icon: 'db',
    skills: ['PostgreSQL', 'SQL / T-SQL', 'Cloud Firestore', 'Database design & ERDs'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'tools',
    skills: [
      'Visual Studio / VS Code',
      'Power BI (PL-300)',
      'PowerApps',
      'Microsoft Fabric (DP-700)',
      'Azure DevOps (learning)',
      'Arduino',
    ],
  },
  {
    title: 'Version Control & CI/CD',
    icon: 'git',
    skills: [
      'Git & GitHub',
      'Branching workflows & branch protection',
      'GitHub Projects (sprint boards)',
      'Code review practices',
      'GitHub Actions build pipelines',
      'Monorepo repository structure',
    ],
  },
  {
    title: 'Testing & Software Engineering',
    icon: 'test',
    skills: [
      'MSTest (unit, integration & system testing)',
      'Object-oriented design',
      'SDLC & Agile / Scrum',
      'Technical documentation',
      'ISO/IEC 27001 & POPIA-aware design',
      'Identity & access management (Entra ID)',
    ],
  },
]

// Ordered by relevance to Cloud, DevOps & Software Engineering careers
export const certificationGroups = [
  {
    provider: 'Cloud Engineering & Administration',
    certs: [
      { name: 'Microsoft Certified: Azure Administrator Associate', code: 'AZ-104' },
      { name: 'Microsoft Certified: Azure Developer Associate', code: 'AZ-204' },
      { name: 'AWS Certified Cloud Practitioner', code: 'AWS CCP' },
      { name: 'Oracle Cloud Infrastructure Foundations Associate', code: 'OCI' },
      { name: 'Microsoft Certified: Azure Virtual Desktop Specialty', code: 'AZ-140' },
      { name: 'Microsoft Certified: Azure Fundamentals', code: 'AZ-900' },
    ],
  },
  {
    provider: 'Security & Identity',
    certs: [
      { name: 'Microsoft Certified: Identity and Access Administrator Associate', code: 'SC-300' },
      { name: 'Microsoft Certified: Security Operations Analyst Associate', code: 'SC-200' },
      { name: 'Microsoft Certified: Security, Compliance & Identity Fundamentals', code: 'SC-900' },
      { name: 'ISO/IEC 27001:2022 Information Security Implementation (training)', code: 'ISO 27001' },
    ],
  },
  {
    provider: 'Data & Analytics',
    certs: [
      { name: 'Microsoft Certified: Fabric Data Engineer Associate', code: 'DP-700' },
      { name: 'Microsoft Certified: Power BI Data Analyst Associate', code: 'PL-300' },
      { name: 'Microsoft Certified: Azure Data Fundamentals', code: 'DP-900' },
    ],
  },
  {
    provider: 'Programming & Instruction',
    certs: [
      { name: 'Cisco Python Essentials 1 & 2', code: 'Cisco' },
      { name: 'Registered ETDP SETA Assessor', code: 'SETA' },
      { name: 'Microsoft Certified Trainer', code: 'MCT', status: 'in progress' },
    ],
  },
]

export const experience = [
  {
    role: 'Software Engineering Facilitator',
    company: 'CTU Training Solutions',
    period: '2026 – Present',
    bullets: [
      'Deliver NQF Level 6 software engineering modules — C#, Java, ASP.NET/.NET, software design, and testing — taking cohorts from fundamentals to working, tested applications.',
      'Authored the Git and GitHub version-control workflow documentation and training now adopted across learner teams, covering branching strategies, pull requests, and code review.',
      'Built hands-on AZ-204 bootcamp lab environments in C# and ASP.NET Core, giving learners practical Azure development experience against real cloud resources.',
      'Facilitate SDLC and Agile delivery on learner projects — sprint planning, iterative delivery, code quality gates, and documentation standards.',
      'Mentor learners through environment, tooling, and deployment troubleshooting on practical projects, from broken builds to failed deployments.',
    ],
  },
  {
    role: 'Software Development Facilitator',
    company: 'WWISE',
    period: '2025 – 2026',
    bullets: [
      'Trained 150+ learners in Python, JavaScript, HTML/CSS, and SQL, guiding practical software projects from requirements through delivery.',
      'Taught Web API design and consumption alongside web development fundamentals.',
      'Conducted assessments, moderation, and learner evaluations as a registered ETDP SETA Assessor.',
      'Facilitated Power BI and PowerApps training for data analysis and low-code application development.',
      'Integrated cloud security and secure coding principles into curriculum delivery.',
      'Designed and authored an 8-week cloud computing curriculum covering Azure and OCI compute, storage, networking, and identity.',
    ],
  },
  {
    role: 'Software Developer (Work-Integrated Learning)',
    company: 'Central University of Technology',
    period: '2023',
    bullets: [
      'Developed backend logic and assisted with frontend feature implementation on university software projects.',
      'Worked with SQL databases and RESTful services; debugged and resolved application-level issues.',
    ],
  },
]

export const projects = [
  {
    name: 'MoTirong — Geo-Verified Staff Attendance Platform',
    type: 'Flagship · Government Client',
    icon: '🕐',
    description:
      'Cross-platform clock-in/clock-out system for the Mangaung Metro Municipality with mandatory geo-tagging and biometric fingerprint verification, including fallback strategies for workers with worn fingerprints. Delivered with sprint-based GitHub Projects boards, a protected monorepo, and GitHub Actions CI/CD; POPIA compliance is baked into the design.',
    tech: ['Flutter', 'ASP.NET Core', 'PostgreSQL', 'Azure', 'JWT + Refresh', 'GitHub Actions', 'Swagger/OpenAPI'],
    repo: 'https://github.com/Jabulile1704/motiroong-mobile',
  },
  {
    name: 'TiroMoMangaung — Local Job-Matching Platform',
    type: 'Flagship · Community Impact',
    icon: '💼',
    description:
      'Flutter app connecting job seekers and employers across the Mangaung Metropolitan Municipality — a localised platform in the spirit of LinkedIn and Indeed. CV uploads, location-aware listings showing distance to each job, push notifications, application status tracking, and an admin dashboard.',
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore'],
    repo: 'https://github.com/Jabulile1704',
  },
  {
    name: 'MzansiPayrollSystem',
    type: 'Desktop · Test Engineering',
    icon: '🧾',
    description:
      'C# Windows Forms payroll system with a full MSTest suite — unit, integration, and system tests — demonstrating automated testing, assertions, and software validation on .NET.',
    tech: ['C#', '.NET', 'Windows Forms', 'MSTest'],
    repo: 'https://github.com/Jabulile1704/MzansiPayrollSystem',
  },
  {
    name: 'Azure Administration Labs',
    type: 'Cloud · Hands-On',
    icon: '☁️',
    description:
      'Practical AZ-104 Azure administration labs covering identity, governance, compute, storage, and virtual networking — documented publicly on GitHub as reproducible walkthroughs.',
    tech: ['Azure', 'Entra ID', 'Virtual Networking', 'Governance'],
    repo: 'https://github.com/Jabulile1704/azure-virtual-networking',
  },
  {
    name: 'RobotoRemote',
    type: 'Desktop · Embedded',
    icon: '🤖',
    description:
      'Windows Forms desktop application that connects to an Arduino Uno over USB serial, providing a real-time remote-control interface for individual hardware components.',
    tech: ['C#', 'Windows Forms', 'Arduino', 'Serial I/O'],
    repo: 'https://github.com/Jabulile1704/RobotoRemote',
  },
  {
    name: 'Robotics Intro — Non-Blocking Arduino System',
    type: 'Embedded · C++',
    icon: '⚡',
    description:
      'Ultra-responsive, non-blocking Arduino system built in C++ featuring an interactive state machine that handles multi-function button inputs without ever blocking the main loop.',
    tech: ['C++', 'Arduino', 'State Machines'],
    repo: 'https://github.com/Jabulile1704/Robotics_Intro',
  },
]
