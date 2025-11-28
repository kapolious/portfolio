import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <nav className="container mx-auto px-16 py-6 flex justify-between">

        <Link 
          href="/" 
          className="menu-medium text-primary"
        >
          karolína pirohová
        </Link>
        
        <div className="flex items-center gap-10">
          <Link 
            href="/reflexie" 
            className="menu-medium text-primary hover:line-through"
          >
            reflexie
          </Link>

          <Link 
            href="/o-mne" 
            className="menu-medium text-primary hover:line-through"
          >
            o mne
          </Link>

          <Link 
            href="/kontakt" 
            className="menu-medium text-primary hover:line-through"
          >
            kontakt
          </Link>
        </div>

      </nav>
    </header>
  );
}
