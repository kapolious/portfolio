import StarIcon from '../../components/StarIcon'

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

            <div className="w-64 h-80 border-2 border-primary bg-transparent flex items-center justify-center">
              <span className="text-primary">foto</span>
            </div>

            <div className="flex flex-col gap-8 max-w-xl ">
              
              <div className="flex flex-item">
                <h2 className="header-2-medium text-primary">
                  Lorem ipsum dolor sit amet consectetur. Ante adipiscing urna tellus leo. Lorem ipsum dolor sit amet consectetur.
                </h2>
              </div>
            
              <div className="flex flex-col gap-4">
                <p className="body-regular text-primary">
                  Lorem ipsum aenean consectetur. Odio adipiscing urna nulla urna proin in. Duis tortor 
                  accumsan vel turpis. Amet viverra cursus erat nulla pellentesque amet. Sed neque netus ut 
                  enim ultroque adipiscing eleifend. Eget elit amet sed in pulvinar consequat urna vestibulum 
                  ultrices. In condimentum et nisi ultricies ipsum.
                </p>
                
                <p className="body-regular text-primary">
                  Lorem ipsum dolor sit amet consectetur. Odio adipiscing non risus purus nibh egestas 
                  accumsan vel turpis. Amet viverra cursus erat nulla pellentesque amet.
                </p>
              </div>
            
              <div className="flex gap-4">
                <a 
                  href="/kontakt"
                  className="body-bold text-background bg-primary border-1 border-primary px-6 py-2 rounded-3xl 
                  hover:bg-background hover:text-primary transition-all"
                >
                  kontakt
                </a>
                <a 
                  href="/zivotopis"
                  className="body-bold text-primary border-1 border-primary px-6 py-2 rounded-3xl 
                  hover:bg-primary hover:text-background transition-all"
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