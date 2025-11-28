import StarIcon from '../../components/StarIcon'
import Card from '@/components/Card';
import { getArticles } from '../getArticles';

export default function Reflexie() {
  const articles = getArticles();

  return (
    <div className="min-h-screen bg-background">
      
      <main className="flex justify-center">
        <div className="container mx-auto flex flex-col items-start gap-16 px-16 pt-16 pb-16">
          
          <div className="flex items-center gap-4">
              <StarIcon size={50}/>
              <h1 className="header-1-medium text-primary">
                reflexie
              </h1>
          </div>

          <div className="flex items-center gap-4">
                <a 
                  href="/reflexie"
                  className="body-bold text-primary border-1 border-primary px-6 py-2 rounded-3xl 
                  hover:bg-primary hover:text-background transition-all"
                >
                  podľa abecedy
                </a>
                <a 
                  href="/reflexie"
                  className="body-bold text-primary border-1 border-primary px-6 py-2 rounded-3xl 
                  hover:bg-primary hover:text-background transition-all"
                >
                  semester
                </a>
              </div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {articles.map(article => (
                  <Card
                    key={article.slug}
                    title={article.title}
                    code={article.code}
                    semester={article.semester}
                    perex={article.perex}
                    credits={article.credits}
                    slug={article.slug}
                  />
                ))}
              </div>
         
        </div>
      </main>
    </div>
  );
}