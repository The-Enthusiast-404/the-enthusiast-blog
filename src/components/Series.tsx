import React from "react";
import type { CollectionEntry } from "astro:content";

interface SeriesProps {
  series:
    | {
        name: string;
        order: number;
      }
    | undefined;
  currentSlug: string;
  posts: CollectionEntry<"blog">[];
}

const Series: React.FC<SeriesProps> = ({ series, currentSlug, posts }) => {
  console.log(
    "Series component received posts:",
    posts.map(p => ({
      title: p.data?.title || p.frontmatter?.title || "Untitled",
      series: p.data?.series || p.frontmatter?.series,
      slug: p.data?.slug || p.frontmatter?.slug || p.slug,
    }))
  );
  console.log("Current series:", series);

  if (!series || !series.name) {
    console.log("Series is undefined or missing name");
    return null;
  }

  const seriesPosts = posts.filter(post => {
    const postSeries = post.data?.series || post.frontmatter?.series;
    const isInSeries = postSeries?.name === series.name;
    const postTitle = post.data?.title || post.frontmatter?.title || "Untitled";
    console.log(`Post "${postTitle}" in series: ${isInSeries}`);
    return isInSeries;
  });

  console.log(
    "Filtered series posts:",
    seriesPosts.map(p => ({
      title: p.data?.title || p.frontmatter?.title || "Untitled",
      slug: p.data?.slug || p.frontmatter?.slug || p.slug,
    }))
  );
  console.log("Number of posts in series:", seriesPosts.length);

  if (seriesPosts.length <= 1) {
    console.log("Not enough posts in series");
    return null;
  }

  return (
    <div className="mb-4 mt-8 rounded-lg border border-skin-line p-4">
      <h2 className="mb-2 text-xl font-semibold">Series: {series.name}</h2>
      <ul className="list-inside list-decimal">
        {seriesPosts.map(post => {
          const postTitle =
            post.data?.title || post.frontmatter?.title || "Untitled";
          const postSlug =
            post.data?.slug || post.frontmatter?.slug || post.slug;
          if (!postSlug) {
            console.error("Post slug is undefined:", post);
            return null;
          }
          return (
            <li key={postSlug} className="my-1">
              {postSlug === currentSlug ? (
                <span className="font-bold">{postTitle}</span>
              ) : (
                <a
                  href={`/posts/${postSlug}/`}
                  className="text-skin-accent hover:underline"
                >
                  {postTitle}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Series;
