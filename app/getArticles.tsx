import fs from "fs";
import path from "path";
import matter from "gray-matter";

const EXCLUDED_FILES = ['88.md', '100.md'];

interface Article {
  slug: string;
  title: string;
  code: string;
  semester: string;
  perex: string;
  credits: number;
  content: string;
}

export function getArticles(): Article[] {
  const dir = path.join(process.cwd(), "app/reflexie/content");
  const files = fs.readdirSync(dir);

  return files
  .filter(filename => !EXCLUDED_FILES.includes(filename))
  .map(filename => {
    const file = fs.readFileSync(path.join(dir, filename), "utf-8");
    const { data, content } = matter(file);

    return {
      slug: filename.replace(".md", ""),
      title: data.title as string,
      code: data.code as string,
      semester: data.semester as string,
      perex: data.perex as string,
      credits: data.credits as number,
      content: data.content as string,
    };
  });
}