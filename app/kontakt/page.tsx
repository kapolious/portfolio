import StarIcon from "../../components/StarIcon";

export default function Contact() {
  return (
    <div className="overflow-hidden bg-background">
      <main className="h-full flex justify-center">
        <div className="container mx-auto flex flex-col items-start gap-16 px-16 pb-16 pt-16">
          <div className="flex items-center gap-4">
            <StarIcon size={50} />
            <h1 className="header-1-medium text-primary">kontakt</h1>
          </div>

          <div className="flex flex-col gap-4">
            <p className="body-regular text-primary">
              v prípade, že ma nenájdete stáť v slnečnom lúči, neváhajte ma
              kontaktovať jednou z nasledujúcich foriem:
            </p>

            <div className="flex gap-2">
              <a
                href="mailto:karolina.pirohova@gmail.com"
                className="body-bold text-primary border-1 border-primary px-6 py-2 rounded-3xl 
                  hover:bg-primary hover:text-background transition-all w-fit"
              >
                karolina.pirohova@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/karol%C3%ADna-pirohov%C3%A1-827866267/"
                className="body-bold text-primary border-1 border-primary px-6 py-2 rounded-3xl 
                  hover:bg-primary hover:text-background transition-all w-fit"
              >
                karolína pirohová
              </a>
              <a
                href="https://www.instagram.com/kapolious/"
                className="body-bold text-primary border-1 border-primary px-6 py-2 rounded-3xl 
                  hover:bg-primary hover:text-background transition-all w-fit"
              >
                kapolious
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
