import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData, PostData } from '../../lib/posts';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

// Cette fonction s'exécute CÔTÉ SERVEUR (au build)
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface BlogsProps {
  allPostsData: PostData[];
}

export default function Blogs({ allPostsData }: BlogsProps) {
  return (
    <>
      <Head>
        <title>Blog | Godwin Ayita</title>
        <meta name="description" content="Mes articles sur la tech, la data et le développement." />
      </Head>

      <div className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Blog & Réflexions</h1>
          <p className="text-white/50 text-lg">
            Je partage ici mes découvertes en Data Science, ML et développement Web.
          </p>
        </div>

        <div className="space-y-8">
          {allPostsData.length > 0 ? (
            allPostsData.map(({ id, date, title, description, tags }) => (
              <article 
                key={id} 
                className="group relative bg-neutral-800/20 border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-neutral-800/40 transition-all duration-300 hover:border-cyan-500/30"
              >
                {/* Header de l'article */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center text-sm text-cyan-400 font-mono">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={date}>{date}</time>
                  </div>
                  
                  {/* Tags */}
                  {tags && (
                    <div className="flex gap-2 flex-wrap">
                      {tags.map(tag => (
                        <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-white/70">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Titre et Contenu */}
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  <Link href={`/blogs/${id}`}>
                    <span className="absolute inset-0" />
                    {title}
                  </Link>
                </h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  {description}
                </p>

                <div className="flex items-center text-cyan-400 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Lire l'article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </article>
            ))
          ) : (
            <p className="text-center text-white/40">Aucun article pour le moment.</p>
          )}
        </div>
      </div>
    </>
  );
}