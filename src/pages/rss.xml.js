import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'daxog’s personal website',
    description: 'sharing my thoughts and projects',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./writings/*.{md,mdx}'),
    ),
  });
}