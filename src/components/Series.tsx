import React from "react";

interface SeriesProps {
  series:
    | {
        name: string;
        order: number;
      }
    | undefined;
  currentSlug: string;
  posts: {
    frontmatter: {
      title: string;
      series?: {
        name: string;
        order: number;
      };
    };
    slug: string;
  }[];
}

const Series: React.FC<SeriesProps> = ({ series, currentSlug, posts }) => {
  if (!series || !series.name) {
    return null;
  }

  const seriesPosts = posts.filter(
    post => post.frontmatter.series?.name === series.name
  );

  if (seriesPosts.length <= 1) {
    return null;
  }

  return (
    <div className="mb-4 mt-8 rounded-lg border border-skin-line p-4">
      <h2 className="mb-2 text-xl font-semibold">Series: {series.name}</h2>
      <ul className="list-inside list-decimal">
        {seriesPosts.map(post => (
          <li key={post.slug} className="my-1">
            {post.slug === currentSlug ? (
              <span className="font-bold">{post.frontmatter.title}</span>
            ) : (
              <a
                href={`/posts/${post.slug}/`}
                className="text-skin-accent hover:underline"
              >
                {post.frontmatter.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Series;
