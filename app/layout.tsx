import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export const metadata = {
  title: 'Flexibble',
  description: 'First project portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
