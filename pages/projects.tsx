import Head from 'next/head';
import Image from 'next/image';
import { projectsData } from '../lib/data'; // On importe directement les données

export default function Projects() {
  const hasProjects = projectsData && projectsData.length > 0;

  return (
    <>
      <Head>
        <title>Projects | Godwin Ayita</title>
      </Head>

      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl text-white font-semibold text-center">My Projects</h1>
        <p className="text-xl text-white/50 font-normal text-center mb-10 mt-2">
          Some of my projects.
        </p>

        {!hasProjects ? (
          // État vide (Empty State)
          <div className="text-center text-white/40 py-20">
            <p>No projects found yet.</p>
          </div>
        ) : (
          // Grille de projets
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <a
                key={index} // Idéalement utilise project.name comme clé s'il est unique
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group bg-neutral-800/20 p-4 rounded-xl border border-white/5 hover:bg-neutral-800/40 hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
              >
                {/* Image Container avec aspect ratio */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-neutral-900">
                  {/* Note: Pour éviter les erreurs si l'image n'existe pas, on peut utiliser un placeholder visuel */}
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
                   <span className="text-xs text-cyan-400 font-medium">View Project &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}