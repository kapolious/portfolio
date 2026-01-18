import StarIcon from '../../components/StarIcon'

export default function Contact() {
  return (
    <div className="overflow-hidden bg-background">
      
      <main className="h-full flex justify-center">
        <div className="container mx-auto flex flex-col items-start gap-16 px-16 pb-16 pt-16">
          
          <div className="flex items-center gap-4">
              <StarIcon size={50}/>
              <h1 className="header-1-medium text-primary">
                kontakt
              </h1>
          </div>

          <div>
            <p className="body-regular text-primary">
              karolina.pirohova@gmail.com
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}