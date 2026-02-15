import { 
  Cpu, Database, CloudCog, Code, Globe, 
  Music, Laptop, BookOpen, Clapperboard, Users, 
  Brain, LucideIcon, Palette, Terminal, BarChart3,
  FileCode2, Server, Bot, Workflow, Layers, Zap, Smartphone
} from 'lucide-react';

// --- DEFINITION DES TYPES ---

// ... autres interfaces
export interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
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
    icon: Brain, // Icône "Cerveau" pour l'IA
    title: 'Data Science & AI',
    // On regroupe ici tout ce qui touche à la donnée et l'intelligence
    content: 'ML Engineer, Data Scientist, Data Analyst, Consultant BI & Prompt Engineer. Je transforme la donnée brute en modèles prédictifs et décisions stratégiques.',
    progress: 90,
  },
  {
    icon: Terminal, // Icône "Terminal" pour le Dev pur
    title: 'Software Engineering',
    // Le socle technique robuste
    content: 'Software Engineer Full Stack. Conception d\'architectures logicielles scalables, du Backend robuste aux applications Web & Mobile performantes.',
    progress: 80,
  },
  {
    icon: Palette, // Icône "Palette" pour le Design
    title: 'Digital Design',
    // La touche créative
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
    icon: Smartphone, // <-- NOUVEAU BLOC
    title: 'Flutter / Dart', 
    progress: 75 // Ajuste ce score selon ton niveau réel
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
    icon: Clapperboard, // <-- Utilise la nouvelle icône ici
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
// ... tout en bas après softSkillsData

export const projectsData: Project[] = [
  {
    name: 'Draavis',
    description: 'Plateforme SaaS de gestion logistique développée en Next.js et Node.js.',
    image: '/assets/draavis.png', // Assure-toi d'avoir une image ou mets une placeholder
    link: 'https://draavis.com',
  },
  {
    name: 'Portfolio V1',
    description: 'Mon premier site personnel réalisé avec HTML/CSS et JS vanilla.',
    image: '/assets/portfolio.png',
    link: 'https://github.com/tonprofil/portfolio-v1',
  },
  // Tu pourras ajouter tes autres projets ici
];