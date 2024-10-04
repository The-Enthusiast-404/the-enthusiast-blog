import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const tags = posts.flatMap(post => post.data.tags);
  const uniqueTags = [...new Set(tags.map(tag => tag.toLowerCase()))].map(
    tag => ({
      tag: slugifyStr(tag),
      tagName: tag,
    })
  );
  return uniqueTags;
};

export default getUniqueTags;
