import matter from "gray-matter";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content");

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(fileIdentifier) {
  const postSlug = fileIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content,
  };
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  return postFiles
    .map((postFile) => getPostData(postFile))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}
