import Head from 'next/head';
import Image from 'next/image';
import { projectsData } from '../lib/data';
import { Github, BarChart3, Palette } from 'lucide-react'; // On ajoute des icônes pour les titres

export default function Projects() {
  // Définition des sections que tu veux afficher
  const sections = [
    {
      id: 'github',
      title: '💻 Development & GitHub',
      description: 'Mes projets de code, applications web et scripts Python.',
      icon: Github,
    },
    {
      id: 'powerbi',
      title: '📊 Data Visualization (Power BI)',
      description: 'Dashboards interactifs et storytelling de données.',
      icon: BarChart3,
    },
    {
      id: 'design',
      title: '🎨 Graphics & UI Design',
      description: 'Maquettes, prototypes et créations graphiques.',
      icon: Palette,
    },
  ];

  return (
    <>
      <Head>
        <title>Projects | Godwin Ayita</title>
      </Head>

      <div className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl text-white font-bold mb-4">My Portfolio</h1>
          <p className="text-xl text-white/50">
            Une sélection de mes travaux par catégorie.
          </p>
        </div>

        <div className="space-y-20">
          {sections.map((section) => {
            // On filtre les projets pour la section actuelle
            const categoryProjects = projectsData.filter((p) => p.category === section.id);

            // Si aucun projet dans cette catégorie, on ne l'affiche pas (ou on peut afficher un message)
            if (categoryProjects.length === 0) return null;

            return (
              <section key={section.id}>
                {/* En-tête de la section */}
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <section.icon className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>

                {/* Grille des projets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProjects.map((project, index) => (
                    <a
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group bg-neutral-800/20 p-4 rounded-xl border border-white/5 hover:bg-neutral-800/40 hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
                    >
                      {/* Image Container */}
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-neutral-900 border border-white/5">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white/20">
                            No Image
                          </div>
                        )}
                        
                        {/* Petit badge par-dessus l'image */}
                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-white font-mono border border-white/10">
                          {section.id.toUpperCase()}
                        </div>
                      </div>

                      <div className="mt-5 flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-white/50 mt-2 line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/5 flex justify-end">
                        <span className="text-xs text-cyan-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                          View Project &rarr;
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        
        {/* Message si vraiment TOUT est vide */}
        {projectsData.length === 0 && (
           <div className="text-center text-white/40 py-20">
             <p>No projects found yet.</p>
           </div>
        )}
      </div>
    </>
  );
}