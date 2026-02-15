import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// On définit le chemin du dossier "posts"
const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  tags: string[];
  contentHtml?: string;
}

export function getSortedPostsData(): PostData[] {
  // 1. Lire les noms de fichiers dans /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // 2. Enlever l'extension ".md" pour avoir l'ID
    const id = fileName.replace(/\.md$/, '');

    // 3. Lire le contenu du fichier
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 4. Utiliser gray-matter pour séparer les métadonnées du contenu
    const matterResult = matter(fileContents);

    // 5. Retourner les données typées
    return {
      id,
      ...(matterResult.data as { date: string; title: string; description: string; tags: string[]; image?: string }),
    };
  });

  // 6. Trier les articles par date (du plus récent au plus vieux)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }

  });
}

// 1. Récupérer tous les IDs pour les chemins dynamiques
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// 2. Récupérer les données complètes d'un article (avec HTML)
export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parsing des métadonnées
  const matterResult = matter(fileContents);

  // Conversion du Markdown en HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; description: string; tags: string[]; image?: string }),
  };
}