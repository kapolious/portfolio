export default function Card({
   title,
  code,
  semester,
  perex,
  credits,
  slug,

}: {
  title: string;
  code: string;
  semester: string;
  perex: string;
  credits: number;
  slug: string;
}) {
  return (
    <a 
      href={`/reflexie/${slug}`}
      className="block cursor-pointer rounded-3xl bg-primary text-background p-6 transition-all hover:bg-background hover:text-primary"
    >
      <div className="flex flex-col gap-4">
        <h2 className="menu-medium h-[3rem] leading-[1.5rem] overflow-hidden">{title}</h2>

        <div className="h-64 border-2 border-background bg-transparent flex items-center justify-center">
          <span className="text-background">TODO ilustrácia</span>
        </div>
        
        <div className="pt-2">
          <div className="flex flex-row items-center justify-between">
              <p className="body-small-light">{code}</p>
              <p className="body-small-light">{semester}</p>
          </div>

          <p className="body-small-light">{perex}</p>
        </div>
        
      </div>
      
    </a>
  );
}