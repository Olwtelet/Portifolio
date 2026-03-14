export const RESUME_DATA = {
  name: 'Isaac Rodrigues',
  initials: 'IR',
  location: 'Brasília, Brazil',
  locationLink: 'https://maps.app.goo.gl/2DnfmkhU6DdPu3VF8',
  about:
    'Full-Stack Developer | Building Intelligent Automation and Data-Driven Web Applications',
  summary:
    'Dedicated Computer Science student specializing in Artificial Intelligence, Machine Learning, and Full-Stack Development. Strong academic focus on software architecture, intelligent automation, and scalable web systems through continuous study and hands-on technical projects. Experienced in developing responsive front-end interfaces and efficient back-end services while applying AI and machine learning concepts to real-world challenges. A fast learner with a strong analytical mindset, I actively explore complex topics ranging from distributed systems to modern AI frameworks. Committed to continuous learning and technical growth, with the goal of becoming a highly skilled AI engineer capable of building impactful and scalable solutions.',
  personalWebsiteUrl: 'https://olwtelet.vercel.app/',
  education: [
    {
      school: 'MIT OpenCourseWare – 6.0001 / 6.006 / 6.033 / 6.036 / 6.867',
      degree: "Micro-Credential Scholar: Computer Science & Engineering",
      start: '2024',
      end: '2026'
    }
  ],
  work: [
    {
      company: 'Freelance Software Engineering',
      link: 'https://poliana.onrender.com/',
      badges: ['Contract'],
      title: 'Full-Stack Systems Architect',
      start: 'March 2026',
      end: 'March 2026',
      description:
        'Architected a bespoke clinical platform focused on MVC-based system orchestration, secure data management, and cloud-native deployment for scalable professional applications.'
    }
    
  ],
skills: [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Bun.js',
    'React',
    'Next.js',
    'Vue.js',
    'Express.js',
    'Pug',
    'Python',
    'SQL',
    'HTML',
    'CSS3',
    'Git',
    'GitHub Actions',
    'Docker',
    'Docker Compose',
    'Cloud Computing',
    'Google Cloud Platform',
    'Google App Engine',
    'Vercel',
    'Web Development',
    'Version Control',
    'Database Design',
    'Artificial Intelligence',
    'Machine Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Automation & Scripting',
    'Web Scraping',
    'Video & Audio Automation',
    'Social Media APIs',
    'Software Development',
    'MVC Architecture',
    'Modular System Design',
    'Test-Driven Development',
    'Unit & Integration Testing',
    'Vite',
    'Mongoose',
    'TailwindCSS',
    'REST APIs',
    'Express',
    'MongoDB',
    'Visual Studio',
    '.NET Framework',
    'Windows Presentation Foundation',
    'Computer Networking',
    'SEO Optimization',
    'Responsive Web Design'
  ],
  projects: [
    {
      title: 'EnPassantio',
      techStack: ['TypeScript', 'Bun.js', 'Vitest', 'Docker'],
      description:
        'Architected a modular chess platform featuring rule-based engine orchestration, real-time multiplayer synchronization, and integration with the Stockfish AI engine.',
      link: {
        label: 'EnPassantio',
        href: 'https://enpassantio.vercel.app/'
      }
    },
    {
      title: 'Resumex',
      techStack: ['Python', 'Selenium', 'MoviePy', 'Cloud-Native'],
      description: 'Designed an intelligent content pipeline for automated Reddit scraping, viral scoring analysis, and AI-driven video generation with cloud-native deployment.',
      link: {
       label: 'Resumex',
       href: 'https://github.com/Olwtelet/Resumex'
      }
    },
    {
      title: 'Obsidian Second Brain',
      techStack: ['CodeConcepts', 'CS Fundamentals & Data Structures'],
      description: 'Personal vault of programming insights, cheatsheets, and daily study logs.',
      link: {
       label: 'Obsidian Second Brain',
       href: 'https://github.com/Olwtelet/Obsidian-Second-Brain'
      }
    },
    {
      title: 'Acedit',
      techStack: ['Next.js', 'React', 'Node.js', 'MongoDB'],
      description: 'Developed a scalable full-stack content platform for managing, editing, and organizing digital projects with collaborative workflows and high-performance architecture.',
      link: {
       label: 'Acedit',
       href: 'https://acedit.onrender.com'
      }
    }
  ]
} as const
