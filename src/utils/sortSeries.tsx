import type { CollectionEntry } from "astro:content";

interface SeriesPost {
  frontmatter: {
    title: string;
    series?: {
      name: string;
      order: number;
    };
  };
  slug: string;
}

export function sortSeriesPosts(posts: SeriesPost[]) {
  return posts.sort((a, b) => {
    if (a.frontmatter.series && b.frontmatter.series) {
      return a.frontmatter.series.order - b.frontmatter.series.order;
    }
    return 0;
  });
}
