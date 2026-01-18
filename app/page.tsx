import StarIcon from "../components/StarIcon";

export default function Home() {
  return (
    <div className="overflow-hidden bg-background">
      <div className="h-full flex justify-center">
        <div className="flex items-center gap-24 pt-32">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-left">
              <span className="header-2-medium text-primary">nerobím</span>
              <span className="header-2-medium text-primary">a iné práce</span>
            </div>

            <StarIcon />

            <span className="header-2-medium text-primary pb-10">nič</span>
          </div>

          <div className="flex flex-col gap-6 max-w-xl pt-48">
            <p className="header-3-light text-primary">
              dvadsaťniečo ročná žena s&nbsp;hyperfixáciou na ryby, premyslené
              priestory a modrú farbu.
            </p>

            <a
              href="/reflexie"
              className="body-bold text-primary border-1 border-primary px-6 py-2 rounded-3xl 
              hover:bg-primary hover:text-background transition-all w-fit"
            >
              reflexie
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
