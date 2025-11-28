import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getArticles() {
  const dir = path.join(process.cwd(), "app/reflexie/content");
  const files = fs.readdirSync(dir);

  return files.map(filename => {
    const file = fs.readFileSync(path.join(dir, filename), "utf-8");
    const { data, content } = matter(file);

    return {
      slug: filename.replace(".md", ""),
      ...data,
      content
    };
  });
}
