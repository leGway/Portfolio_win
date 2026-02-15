import { 
  Cpu, Database, CloudCog, Code, Globe, 
  Music, Laptop, BookOpen, Clapperboard, Users, 
  Brain, LucideIcon, Palette, Terminal, BarChart3,
  FileCode2, Server, Bot, Workflow, Layers, Zap, Smartphone
} from 'lucide-react';

// --- DEFINITION DES TYPES ---

export interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  // 👇 C'est ici qu'on définit les catégories autorisées
  category: 'github' | 'powerbi' | 'design';
}

export interface Expertise {
  icon: LucideIcon;
  title: string;
  content: string;
  progress: number;
}

export interface TechSkill {
  icon: LucideIcon;
  title: string;
  progress: number;
}

export interface Language {
  icon: LucideIcon;
  name: string;
  level: string;
}

export interface Formation {
  period: string;
  degree: string;
  institution: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface Certification {
  icon: LucideIcon;
  title: string;
  issuer: string;
  year: string;
}

export interface Hobby {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export interface SoftSkill {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

// --- LES DONNÉES ---

export const words: string[] = [
  'ML Engineer',
  'Data Analyst',
  'Data Scientist',
  'AI Enthusiast',
  'Graphics Designer',
  'Consultant BI',
  'Motion Designer',
  'Mobile App Designer',
  'Web Designer',
  'Software Enginner',
  'Prompt Enginner'
];

export const expertiseData: Expertise[] = [
  {
    icon: Brain,
    title: 'Data Science & AI',
    content: 'ML Engineer, Data Scientist, Data Analyst, Consultant BI & Prompt Engineer. Je transforme la donnée brute en modèles prédictifs et décisions stratégiques.',
    progress: 90,
  },
  {
    icon: Terminal,
    title: 'Software Engineering',
    content: 'Software Engineer Full Stack. Conception d\'architectures logicielles scalables, du Backend robuste aux applications Web & Mobile performantes.',
    progress: 80,
  },
  {
    icon: Palette,
    title: 'Digital Design',
    content: 'Graphics, Motion, Web & Mobile App Designer. Création d\'interfaces centrées utilisateur (UI/UX) et d\'identités visuelles percutantes.',
    progress: 75,
  },
];

export const techData: TechSkill[] = [
  // --- DATA CORE & CLOUD ---
  { 
    icon: FileCode2, 
    title: 'Python', 
    progress: 90 
  },
  { 
    icon: Database, 
    title: 'SQL', 
    progress: 85 
  },
  { 
    icon: Server, 
    title: 'AWS / Snowflake', 
    progress: 75 
  },
  { 
    icon: Layers, 
    title: 'Alteryx', 
    progress: 80 
  },

  // --- AUTOMATION & RPA ---
  { 
    icon: Zap, 
    title: 'Power Automate', 
    progress: 85 
  },
  { 
    icon: Workflow, 
    title: 'n8n', 
    progress: 80 
  },
  { 
    icon: Bot, 
    title: 'UiPath', 
    progress: 70 
  },

  // --- VIZ, WEB & MOBILE ---
  { 
    icon: BarChart3, 
    title: 'Power BI', 
    progress: 85 
  },
  { 
    icon: Code, 
    title: 'JavaScript', 
    progress: 90 
  },
  { 
    icon: Globe, 
    title: 'React / Next.js / Node', 
    progress: 80 
  },
  { 
    icon: Smartphone,
    title: 'Flutter / Dart', 
    progress: 75 
  },
];

export const languagesData: Language[] = [
  { icon: Globe, name: 'Français', level: 'Natif' },
  { icon: Globe, name: 'Anglais', level: 'Courant' },
  { icon: Globe, name: 'Espagnol', level: 'Intermédiaire' },
];

export const formationData: Formation[] = [
  {
    period: '2020 – 2022',
    degree: 'Master Informatique',
    institution: 'Université de Lomé',
  },
  {
    period: '2017 – 2020',
    degree: 'Licence Sciences Informatiques',
    institution: 'Université de Lomé',
  },
  {
    period: '2015 – 2017',
    degree: 'Baccalauréat Scientifique',
    institution: 'Lycée de Lomé',
  },
];

export const experienceData: Experience[] = [
  {
    period: 'July 2023 – April 2024',
    role: 'FullStack Software Engineer',
    company: 'Bidiffy (BIDIF SARL)',
    description: 'Lead backend dev & frontend dev sur draavis.com, plateforme SaaS JS/TS.',
  },
  {
    period: 'May 2023 – January 2024',
    role: 'Private Computer Tutor',
    company: 'Voscours.fr',
    description: 'Assistance informatique pour élèves de lycée et collège.',
  },
  {
    period: 'Nov 2021 – June 2023',
    role: 'Software Engineer Consultant',
    company: 'Embassy of Angola in Togo',
    description: 'Solutions sur-mesure & amélioration des processus organisationnels.',
  },
  {
    period: 'Nov 2022 – Feb 2023',
    role: 'IT Developer Intern',
    company: 'Autonomous Port of Lomé',
    description: 'Système de gestion d’entrée/sortie véhicules au port.',
  },
  {
    period: 'Aug 2022 – Dec 2022',
    role: 'Software Engineering Intern',
    company: 'BERIIA',
    description: "Plateforme de kitty et tontine en ligne (projet de fin d'études).",
  },
];

export const certificationsData: Certification[] = [
  {
    icon: Code,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon',
    year: '2023',
  },
  {
    icon: Code,
    title: 'Certified Data Scientist',
    issuer: 'DataCamp',
    year: '2022',
  },
  {
    icon: Code,
    title: 'TensorFlow Developer',
    issuer: 'DeepLearning.AI',
    year: '2021',
  },
];

export const hobbiesData: Hobby[] = [
  {
    icon: Music,
    title: 'Music',
    items: ['Classical', 'French Rap', 'Afrobeat', 'Pop', 'Jazz', 'Rock'],
  },
  {
    icon: Laptop,
    title: 'Technology',
    items: ['Tech monitoring', 'Open Source'],
  },
  {
    icon: Clapperboard,
    title: 'Manga / Anime',
    items: ['Shonen', 'Seinen', 'Isekai', 'Slice of Life', 'Action'],
  },
  {
    icon: BookOpen,
    title: 'Reading',
    items: ['Scientific', 'Sci-fi', 'Tech', 'Personal Development'],
  },
];

export const softSkillsData: SoftSkill[] = [
  {
    icon: Users,
    title: 'Interpersonal Skills',
    skills: [
      'Effective communication',
      'Teamwork',
      'Collaborative leadership',
      'Empathy & active listening',
    ],
  },
  {
    icon: Brain,
    title: 'Professional Skills',
    skills: [
      'Problem solving',
      'Analytical thinking',
      'Adaptability',
      'Time management',
    ],
  },
];

// --- PROJETS CLASSÉS PAR CATÉGORIE ---

export const projectsData: Project[] = [
  // 1. SECTION GITHUB / DEV
  {
    name: 'Draavis SaaS',
    description: 'Plateforme logistique Full Stack Next.js et Node.js.',
    image: '/assets/draavis.png',
    link: 'https://draavis.com',
    category: 'github',
  },
  {
    name: 'Portfolio V2',
    description: 'Portfolio moderne en Next.js, Tailwind et TypeScript.',
    image: '/assets/portfolio.png',
    link: 'https://github.com/leGway',
    category: 'github',
  },

  // 2. SECTION POWER BI / DATA
  {
    name: 'Retail Analytics',
    description: 'Dashboard interactif des ventes et prévisions (DAX).',
    image: '', // Laisse vide ou mets un chemin valide
    link: 'https://powerbi.microsoft.com', // Remplace par ton lien
    category: 'powerbi',
  },
  {
    name: 'HR Dashboard',
    description: 'Analyse du turnover et performance employés.',
    image: '',
    link: '#',
    category: 'powerbi',
  },

  // 3. SECTION DESIGN / GRAPHICS
  {
    name: 'Mobile App UI',
    description: 'Maquette Figma pour une application de livraison.',
    image: '',
    link: 'https://dribbble.com', // Remplace par ton lien Dribbble/Behance
    category: 'design',
  },
  {
    name: 'Brand Identity',
    description: 'Création de logo et charte graphique Tech.',
    image: '',
    link: '#',
    category: 'design',
  },
  // --- SECTION GITHUB ---
{
    name: 'Streamlit-DuckDB',
    description: 'Application web interactive Full Stack Data développée avec Streamlit et DuckDB.',
    image: '/assets/techs/project1.png', // <-- J'ai retiré "public" ici
    link: 'https://github.com/leGway/Streamlit-DuckDB',
    category: 'github',
  },
  {
    name: 'SnowChat AI',
    description: 'Une application de type Chatbot entièrement hébergée sur Snowflake, développée avec Streamlit et propulsée par le moteur Snowflake Cortex.',
    image: '/assets/techs/project2.png',
    link: 'https://github.com/leGway/ChatBootPerso',
    category: 'github',
  },
  
  // ... tes autres projets PowerBI ou Design suivront ici ...
];
