import { getArticles } from "../../getArticles";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import BackIcon from "@/public/icons/back.svg";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SubjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const articles = getArticles();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="overflow-hidden bg-background">
      <main className="flex justify-center">
        <div className="container mx-auto flex flex-col items-start gap-16 px-16 pt-16 pb-16 max-w-4xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap">
              <span className="bg-highlight text-primary px-3 py-1 body-regular">
                kód predmetu <span className="body-bold">{article.code}</span>
              </span>
              <span className="bg-highlight text-primary py-1 body-regular">
                |
              </span>
              <span className="bg-highlight text-primary px-3 py-1 body-regular">
                semester <span className="body-bold">{article.semester}</span>
              </span>
              <span className="bg-highlight text-primary py-1 body-regular">
                |
              </span>
              <span className="bg-highlight text-primary px-3 py-1 body-regular">
                kredity <span className="body-bold">{article.credits}</span>
              </span>
            </div>

            <div className="flex items-start gap-4">
              <a href="/reflexie" className="transition-opacity flex-shrink-0">
                <Image
                  src={BackIcon}
                  alt="Back to reflexie"
                  width={50}
                  height={50}
                />
              </a>
              <h1 className="header-1-medium text-primary">{article.title}</h1>
            </div>
          </div>

          <div className="text-primary body-regular space-y-6 prose prose-invert prose-p:mb-8">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const articles = getArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}
