import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  const site = context.site || 'https://carrera-cinturon-verde-cordoba.vercel.app';

  return rss({
    title: 'Carrera Cinturón Verde de Córdoba',
    description: 'Noticias, guías y consejos sobre Trail Running y BTT en la Sierra de Córdoba.',
    site: site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}