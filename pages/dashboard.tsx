import Head from 'next/head';
import useSWR from 'swr';
import { 
  Github, MapPin, Wind, CloudRain, Navigation, 
  Users, Book, GitFork, ExternalLink 
} from 'lucide-react';

// --- 1. CONFIGURATION ---
const GITHUB_USERNAME = 'leGway';
const LAT = 48.8566; // Latitude (Paris)
const LON = 2.3522;  // Longitude (Paris)

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Dashboard() {
  // --- 2. DATA FETCHING ---
  const { data: githubData, error: githubError } = useSWR(
    `https://api.github.com/users/${GITHUB_USERNAME}`,
    fetcher
  );

  const { data: weatherData, error: weatherError } = useSWR(
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&timezone=auto`,
    fetcher
  );

  // --- 3. LOADING & ERROR STATES ---
  if (githubError || weatherError) {
    return <div className="text-white text-center py-20">Erreur lors du chargement des données API.</div>;
  }

  if (!githubData || !weatherData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/50">
        <div className="flex flex-col items-center animate-pulse">
          <div className="h-10 w-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p>Connexion aux satellites...</p>
        </div>
      </div>
    );
  }

  // Raccourcis pour la météo
  const current = weatherData.current;
  const units = weatherData.current_units;

  // Configuration des cartes de stats GitHub
  const stats = [
    {
      title: 'Followers',
      value: githubData.followers,
      icon: Users,
      color: 'text-purple-400',
      bg: 'bg-purple-400/10'
    },
    {
      title: 'Public Repos',
      value: githubData.public_repos,
      icon: Book,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      title: 'Following',
      value: githubData.following,
      icon: GitFork,
      color: 'text-green-400',
      bg: 'bg-green-400/10'
    }
  ];

  return (
    <>
      <Head>
        <title>Dashboard | Godwin Ayita</title>
      </Head>

      <div className="py-20 px-4 max-w-6xl mx-auto">
        {/* En-tête de page */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-white/50">
            Vue d'ensemble en temps réel via GitHub API & Open-Meteo.
          </p>
        </div>

        {/* --- GRILLE PRINCIPALE (Top Section) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* 1. WIDGET MÉTÉO (Prend 2 colonnes sur grand écran) */}
          <div className="lg:col-span-2 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden group shadow-lg">
             <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-400/30 transition duration-1000"></div>
             
             <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center h-full">
                <div>
                  <div className="flex items-center text-cyan-400 mb-2 font-medium">
                    <MapPin className="w-4 h-4 mr-2" />
                    Paris, France
                  </div>
                  <div className="text-6xl font-bold text-white tracking-tighter">
                    {current.temperature_2m}{units.temperature_2m}
                  </div>
                  <p className="text-white/60 mt-1">Ressenti {current.apparent_temperature}°</p>
                </div>

                <div className="mt-6 sm:mt-0 flex gap-6 bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                  <div>
                    <div className="flex items-center text-white/50 text-xs uppercase mb-1">
                      <Wind className="w-3 h-3 mr-1" /> Vent
                    </div>
                    <p className="font-semibold text-white">{current.wind_speed_10m} {units.wind_speed_10m}</p>
                  </div>
                  <div className="w-px bg-white/10"></div>
                  <div>
                    <div className="flex items-center text-white/50 text-xs uppercase mb-1">
                      <CloudRain className="w-3 h-3 mr-1" /> Pluie
                    </div>
                    <p className="font-semibold text-white">{current.precipitation} {units.precipitation}</p>
                  </div>
                </div>
             </div>
             
             <div className="absolute bottom-4 right-6 text-xs text-white/20 flex items-center">
                <Navigation className="w-3 h-3 mr-1" /> Live Data
             </div>
          </div>

          {/* 2. CARTE IDENTITÉ GITHUB (Prend 1 colonne) */}
          <div className="bg-neutral-800/20 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-neutral-800/30 transition">
            <img 
              src={githubData.avatar_url} 
              alt={githubData.name} 
              className="w-24 h-24 rounded-full border-4 border-neutral-800 shadow-xl mb-4"
            />
            <h2 className="text-xl font-bold text-white">{githubData.name}</h2>
            <a href={githubData.html_url} target="_blank" rel="noreferrer" className="text-cyan-400 text-sm hover:underline mb-4 block">
              @{githubData.login}
            </a>
            <p className="text-white/60 text-sm line-clamp-2 mb-6">
              {githubData.bio || "Développeur Full Stack & Data Enthusiast."}
            </p>
            <a 
              href={githubData.html_url}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg text-sm font-medium transition flex items-center justify-center"
            >
              <Github className="w-4 h-4 mr-2" /> Voir Profil
            </a>
          </div>
        </div>

        {/* --- STATS GRID (Bottom Section) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.title} 
              className="bg-neutral-800/20 border border-white/5 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bg} group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                {/* Petite flèche décorative */}
                <ExternalLink className="w-4 h-4 text-white/10 group-hover:text-white/30 transition" />
              </div>
              
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-white/50">{stat.title}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}