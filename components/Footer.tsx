import StarIcon from "./StarIcon";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background">
      <div className="container mx-auto px-16 py-6 flex justify-between">
        <div className="flex items-center gap-3">
          <StarIcon size={24}/>
          
          <span className="menu-medium text-primary">
            2025 © karolína pirohová
          </span>
        </div>
        
        <div className="flex items-center gap-10">
          <a 
            href="https://www.linkedin.com/in/karol%C3%ADna-pirohov%C3%A1-827866267/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="menu-medium text-primary hover:line-through"
          >
            linkedin
          </a>
          <a 
            href="https://www.instagram.com/kapolious/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="menu-medium text-primary hover:line-through"
          >
            instagram
          </a>
        </div>
      </div>
    </footer>
  );
}