import { Skill, Project, Achievement, TimelineItem, LearningItem } from '../types';

export const personalInfo = {
  name: 'Kishan R',
  location: 'Malappuram, Kerala, India',
  education: 'B.Tech in Computer Science & Engineering',
  institution: 'School of Engineering, CUSAT (Cochin University of Science and Technology)',
  currentSemester: 'Semester 3',
  roles: [
    'Computer Science Engineering Student',
    'Aspiring Full-Stack Developer',
    'UI/UX Enthusiast',
  ],
  bio: `I'm passionate about building intuitive digital experiences, learning modern technologies, and creating software that solves real-world problems. I enjoy exploring full-stack development, UI/UX design, and continuously improving my technical skills through projects and hackathons.`,
  aboutDetails: [
    "Computer Science Engineering student at School of Engineering, CUSAT (Semester 3).",
    "Fascinated by building scalable, performant software with modern web stacks.",
    "Driven by solving real-world challenges through technology and UI/UX design.",
    "Active participant in hackathons and open-source software initiatives.",
    "Always eager to learn emerging frameworks, system design patterns, and engineering workflows."
  ],
  email: 'thisiskishanr@gmail.com',
  github: 'https://github.com/thisiskishanr-cloud',
  linkedin: 'https://www.linkedin.com/in/kishan-r-/',
  careerGoal: `I aspire to become a skilled Full-Stack Software Developer capable of building scalable, user-friendly applications while continuously learning emerging technologies and contributing to impactful software projects.`
};

export const skillsData: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Languages', level: 90, iconName: 'FileCode2', description: 'Scripting, API integration, Pyrogram & automation' },
  { name: 'C', category: 'Languages', level: 85, iconName: 'Cpu', description: 'Core procedural concepts & memory management' },
  { name: 'C++', category: 'Languages', level: 80, iconName: 'Code', description: 'Object-oriented programming & data structures' },
  { name: 'JavaScript', category: 'Languages', level: 88, iconName: 'Braces', description: 'Modern ES6+, DOM manipulation & async programming' },
  { name: 'HTML5', category: 'Languages', level: 95, iconName: 'Layout', description: 'Semantic structuring & web accessibility standards' },
  { name: 'CSS3', category: 'Languages', level: 92, iconName: 'Palette', description: 'Flexbox, CSS Grid, animations & responsive styling' },
  { name: 'SQL', category: 'Languages', level: 82, iconName: 'Database', description: 'Relational data modeling, queries & database design' },

  // Databases
  { name: 'MySQL', category: 'Databases', level: 85, iconName: 'Database', description: 'Relational database management system' },
  { name: 'MongoDB', category: 'Databases', level: 78, iconName: 'Server', description: 'NoSQL document-oriented database storage' },

  // Frameworks & Libraries
  { name: 'TensorFlow', category: 'Frameworks', level: 82, iconName: 'Brain', description: 'Deep learning frameworks, CNN architectures & medical image classification' },
  { name: 'Flask', category: 'Frameworks', level: 84, iconName: 'Flame', description: 'Lightweight Python web framework for microservices' },
  { name: 'Streamlit', category: 'Frameworks', level: 88, iconName: 'BarChart2', description: 'Python dashboarding & quick web application prototyping' },
  { name: 'React', category: 'Frameworks', level: 75, iconName: 'Atom', description: 'Component-based UI development & state management (Learning)' },

  // Tools
  { name: 'Gradio', category: 'Tools', level: 85, iconName: 'Layout', description: 'Interactive web UIs & rapid prototyping for AI/ML models' },
  { name: 'Git', category: 'Tools', level: 88, iconName: 'GitBranch', description: 'Version control, branching & commit workflows' },
  { name: 'GitHub', category: 'Tools', level: 90, iconName: 'Github', description: 'Repository hosting, collaboration & open-source projects' },
  { name: 'VS Code', category: 'Tools', level: 95, iconName: 'Terminal', description: 'Primary IDE with custom snippets & extension workflows' },
  { name: 'Figma', category: 'Tools', level: 85, iconName: 'Figma', description: 'Wireframing, interactive prototyping & UI component systems' },
  { name: 'Canva', category: 'Tools', level: 90, iconName: 'Image', description: 'Visual asset design & presentation graphics' },

  // Areas of Interest
  { name: 'Artificial Intelligence & ML', category: 'Interests', level: 88, iconName: 'Sparkles', description: 'Deep learning, Convolutional Neural Networks & computer vision' },
  { name: 'Full-Stack Development', category: 'Interests', level: 90, iconName: 'Layers', description: 'End-to-end web system development' },
  { name: 'Web Development', category: 'Interests', level: 95, iconName: 'Globe', description: 'Crafting responsive, fast digital web experiences' },
  { name: 'UI/UX Design', category: 'Interests', level: 92, iconName: 'LayoutGrid', description: 'User-centered design principles & sleek visual systems' },
  { name: 'REST APIs', category: 'Interests', level: 85, iconName: 'Zap', description: 'Building & consuming RESTful web services' },
  { name: 'Automation', category: 'Interests', level: 88, iconName: 'Bot', description: 'Scripting repetitive workflows & bot creation' },
  { name: 'Cloud Deployment', category: 'Interests', level: 78, iconName: 'Cloud', description: 'Hosting web services & containerized app deployments' },
  { name: 'Open Source', category: 'Interests', level: 85, iconName: 'HeartHandshake', description: 'Collaborating & contributing to community codebases' },
];

export const projectsData: Project[] = [
  {
    id: 'project-4',
    title: 'AI-Powered Medical Image Classifier',
    subtitle: 'Deep Learning & Computer Vision System',
    description: 'An end-to-end Deep Learning model built with TensorFlow & Convolutional Neural Networks (CNNs) to assist in detecting Pneumonia from chest X-ray images with real-time confidence scores.',
    features: [
      'CNN deep learning architecture trained for chest X-ray disease classification',
      'Instant diagnostic prediction (Pneumonia Detected / Normal) with confidence scores',
      'Interactive Gradio web interface for drag-and-drop X-ray upload & visualization',
      'REST API endpoint integration for medical diagnostic pipeline automation'
    ],
    tech: ['Python', 'TensorFlow', 'CNNs', 'Gradio', 'OpenCV', 'Deep Learning'],
    badge: 'AI / Deep Learning',
    demoType: 'ai',
    githubUrl: 'https://github.com/thisiskishanr/ai-medical-image-classifier'
  },
  {
    id: 'project-1',
    title: 'Developer Tips Widget',
    subtitle: 'Nothing Phone Ecosystem Widget',
    description: 'A widget built for the Nothing Phone ecosystem that delivers programming tips in a clean and lightweight interface.',
    features: [
      'JSON-driven content engine for instant tip rendering',
      'Easy content updates without full widget re-compilation',
      'Lightweight architecture optimized for battery & RAM efficiency',
      'Developer-focused minimalist interface matching Nothing OS aesthetic'
    ],
    tech: ['JavaScript', 'JSON', 'Nothing Widget Platform', 'CSS'],
    badge: 'Mobile Ecosystem Widget',
    demoType: 'widget',
    githubUrl: 'https://github.com/thisiskishanr/developer-tips-widget'
  },
  {
    id: 'project-2',
    title: 'Spotify Song Information Bot',
    subtitle: 'Automated Music Assistant',
    description: 'A Python application that integrates with Spotify APIs to fetch song information and automate music-related tasks.',
    features: [
      'Spotify Web API integration for real-time track metadata',
      'Song metadata retrieval including audio features & artist info',
      'Automated Telegram/Pyrogram bot workflows',
      'Cloud deployment ready with lightweight Docker/Python runtime'
    ],
    tech: ['Python', 'Pyrogram', 'Spotify API', 'Requests'],
    badge: 'Python API Bot',
    demoType: 'spotify',
    githubUrl: 'https://github.com/thisiskishanr/spotify-info-bot'
  },
  {
    id: 'project-3',
    title: 'Web Development Practice Projects',
    subtitle: 'Modern Web Exploration Suite',
    description: 'A growing collection of responsive websites and web applications built while learning modern frontend and backend technologies.',
    features: [
      'Responsive multi-device website layouts with Tailwind',
      'REST API integrations with asynchronous state handling',
      'Flask microservices for backend logic and route handling',
      'Streamlit interactive data dashboards & UI playgrounds',
      'Interactive JavaScript components & stateful widgets'
    ],
    tech: ['React', 'Flask', 'Streamlit', 'JavaScript', 'HTML5', 'CSS3'],
    badge: 'Full-Stack Showcase',
    demoType: 'web',
    githubUrl: 'https://github.com/thisiskishanr/web-dev-practice'
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'repo-relay-2026',
    title: 'Repo Relay Hackathon',
    subtitle: 'Runner-Up Award 🥈',
    organizer: 'Google Developer Group On Campus (SOE CUSAT)',
    role: 'Core Developer & Team Member (Team Waguri Waguri)',
    year: '2026',
    highlights: [
      'Secured 🥈 Runner-Up (2nd Place) at the Repo Relay Hackathon presented by GDG SOE CUSAT at Vibhava Innovation Summit.',
      'Collaborated seamlessly in Team Waguri Waguri (Kishan R, Jibin James, Mohammed Umair, Dinlej O) during code relay sprints.',
      'Executed rapid code reviews, Git branch integrations, and feature development under strict time constraints.',
      'Recognized for clean repository organization, fast debugging, and solid modular code structure.'
    ],
    badge: 'GDG Hackathon 🥈'
  },
  {
    id: 'lumora-2026',
    title: 'Lumora 2026 UI/UX Hackathon',
    subtitle: 'Participant 🎯',
    organizer: 'Google Developer Group On Campus (MACE)',
    role: 'UI/UX Hackathon Participant',
    year: '2026',
    highlights: [
      'Participated in the competitive UI/UX Hackathon hosted by GDG On Campus (MACE).',
      'Led UI/UX design ideation, wireframing, and interactive prototype delivery under strict time constraints.',
      'Collaborated effectively within a multi-disciplinary team to deliver a user-focused interface.',
      'Focused on user journey mapping, design accessibility, visual hierarchy, and modern UI flows.'
    ],
    badge: 'GDG Hackathon'
  }
];

export const achievementData: Achievement = achievementsData[0];

export const educationData: TimelineItem[] = [
  {
    id: 'cusat-btech',
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'School of Engineering, CUSAT (Cochin University of Science and Technology)',
    period: '2024 - Present',
    status: 'Current Semester: Semester 3',
    description: 'Pursuing undergraduate degree in Computer Science Engineering, focusing on core programming, data structures, algorithms, and software engineering principles.',
    highlights: [
      'Active focus on C, C++, Python, Data Structures & Systems',
      'Runner-Up (2nd Place) at Repo Relay Hackathon (GDG SOE CUSAT)',
      'Building practical web apps, AI models, and open-source utility tools'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'sfs-public-school',
    title: 'Senior Secondary Education (Class XI - XII)',
    institution: 'SFS Public School, Ettumanoor',
    period: 'Up to Class 12',
    status: 'Completed',
    description: 'Completed higher secondary education with a strong foundation in Science, Mathematics, and Computer Science.',
    highlights: [
      'Focused on Mathematics, Physics, Chemistry, and Computer Science',
      'Developed early interest in software, logic building, and technology'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'jnv-malappuram',
    title: 'Secondary Education (Class VI - X)',
    institution: 'Jawahar Navodaya Vidyalaya (JNV), Malappuram',
    period: 'Up to Class 10',
    status: 'Completed',
    description: 'Completed secondary schooling at JNV Malappuram with excellent academic performance and holistic co-curricular development.',
    highlights: [
      'Strong academic foundation in Mathematics and General Sciences',
      'Active participation in school science exhibitions and house activities'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'mes-central-school',
    title: 'Primary Education (Class I - V)',
    institution: 'MES Central School, Valanchery',
    period: 'Up to Class 5',
    status: 'Completed',
    description: 'Primary schooling completed at MES Central School, Valanchery.',
    highlights: [
      'Early primary education and foundational learning'
    ],
    icon: 'GraduationCap'
  }
];

export const currentlyLearningData: LearningItem[] = [
  {
    id: 'learn-0',
    topic: 'Deep Learning & Computer Vision',
    category: 'Artificial Intelligence',
    progress: 80,
    description: 'CNN architectures, TensorFlow, image feature extraction & diagnostic computer vision models',
    icon: 'Brain'
  },
  {
    id: 'learn-1',
    topic: 'Data Structures & Algorithms',
    category: 'Computer Science Core',
    progress: 75,
    description: 'Arrays, Linked Lists, Trees, Graphs, Sorting Algorithms & Time Complexity optimization in C++',
    icon: 'Binary'
  },
  {
    id: 'learn-2',
    topic: 'Advanced C++',
    category: 'System Programming',
    progress: 70,
    description: 'Pointers, memory management, STL containers, OOP paradigms and competitive programming',
    icon: 'Code2'
  },
  {
    id: 'learn-3',
    topic: 'React',
    category: 'Frontend Engineering',
    progress: 70,
    description: 'Component architecture, Hooks, custom state managers, Framer Motion and Tailwind CSS integration',
    icon: 'Atom'
  },
  {
    id: 'learn-4',
    topic: 'Backend Development',
    category: 'Server & API Design',
    progress: 65,
    description: 'RESTful API architecture, Node.js/Express basics, authentication mechanisms and Flask APIs',
    icon: 'Server'
  },
  {
    id: 'learn-5',
    topic: 'System Design Fundamentals',
    category: 'Architecture',
    progress: 60,
    description: 'Client-server paradigms, caching, database indexing, API rate limiting and scalability concepts',
    icon: 'Network'
  },
  {
    id: 'learn-6',
    topic: 'Git Workflows',
    category: 'DevOps & Tooling',
    progress: 85,
    description: 'Branch management strategies, merge conflict resolution, rebase operations, and GitHub Actions basics',
    icon: 'GitPullRequest'
  },
  {
    id: 'learn-7',
    topic: 'Modern Full-Stack Development',
    category: 'Web Ecosystem',
    progress: 68,
    description: 'Connecting frontend React interfaces with backend endpoints, database persistence, and cloud hosting',
    icon: 'Layers'
  }
];
