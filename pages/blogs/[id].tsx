// pages/blogs/[id].tsx
import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts'; // Attention aux ".." car on est descendu d'un niveau
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: { postData: PostData }) {
  return (
    <>
      <Head>
        <title>{postData.title} | Blog</title>
        <meta name="description" content={postData.description} />
      </Head>

      <article className="py-20 px-4 max-w-3xl mx-auto">
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-white/50 hover:text-cyan-400 transition mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour aux articles
        </Link>

        <header className="mb-10 border-b border-white/10 pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            {postData.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-mono">
            <div className="flex items-center text-cyan-400">
              <Calendar className="w-4 h-4 mr-2" />
              {postData.date}
            </div>
            
            {postData.tags && (
              <div className="flex gap-2">
                {postData.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded bg-white/10 text-white/80 text-xs flex items-center">
                    <Tag className="w-3 h-3 mr-1" /> {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div 
          className="prose prose-invert prose-lg max-w-none text-white/80"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
        />
      </article>
    </>
  );
}