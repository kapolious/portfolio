import StarIcon from '../../components/StarIcon'
import Image from "next/image";
import Me from "@/public/icons/ja.jpeg";

export default function AboutMe() {
  return (
    <div className="overflow-hidden bg-background">
      
      <main className="h-full flex justify-center">
        <div className="container mx-auto flex flex-col items-start gap-16 px-16 pb-16 pt-16">
          
          <div className="flex items-center gap-4">
              <StarIcon size={50}/>
              <h1 className="header-1-medium text-primary">
                o mne
              </h1>
          </div>

          <div className="flex flex-row gap-16">

            <div className="w-xs flex items-start justify-center">
              <Image 
                src={Me} 
                alt="Placeholder illustration"
              />
            </div>

            <div className="flex flex-col gap-8 max-w-xl ">
              
              <div className="flex flex-item">
                <h2 className="header-2-medium text-primary">
                  dvadsaťniečo ročná žena s&nbsp;hyperfixáciou na ryby, premyslené priestory a modrú farbu.
                </h2>
              </div>
            
              <div className="flex flex-col gap-4">
                <p className="body-regular text-primary">
                  rada tvorím, a ešte radšej mám, keď veci fungujú. 
                  občas sa hrám s myšlienkou, či by našej spoločnosti neprospelo využívať html-only weby. 
                  je to otázne. ašpirujem na rolu priekopníka trocha zlého dizajnu – dizajnu, ktorý funguje, no neuväzňuje.
                </p>
                
                <p className="body-regular text-primary">
                  verím, že mi kisk so svojou multidisciplinárnou povahou dokáže poskytnúť priestor na to byť zvedavá a vyprovokovať otázky, 
                  ktoré ma posunú ďalej.
                </p>
              </div>
            
              <div className="flex gap-4">
                <a 
                  href="/kontakt"
                  className="body-bold text-background bg-primary border-1 border-primary px-6 py-2 rounded-3xl 
                  hover:bg-primary hover:text-highlight transition-all"
                >
                  kontakt
                </a>
                <a 
                  href="/zivotopis"
                  className="body-bold text-primary border-1 border-primary px-6 py-2 rounded-3xl 
                  hover:bg-highlight hover:text-primary transition-all"
                >
                  životopis
                </a>
              </div>
            </div>
          </div>          
        </div>
      </main>
    </div>
  );
}