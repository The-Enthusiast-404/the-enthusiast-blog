import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const filteredPosts = posts.filter(postFilter);
  const tags: string[] = filteredPosts
    .flatMap(post => post.data.tags)
    .map(tag => tag.toLowerCase());
  const uniqueTags = [...new Set(tags)];
  return uniqueTags;
};

export default getUniqueTags;
