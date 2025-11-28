import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>

      <body className="bg-background text-primary">
        <Header />

        <main className="pt-[67.8px] pb-[72px]"> 
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}