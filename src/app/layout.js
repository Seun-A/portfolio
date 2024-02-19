import "./layout.css"
import { Noto_Serif, Nunito } from 'next/font/google'
import { ThemeProvider } from "./theme-provider"
import Navbar from "@/components/Navbar"
import Menu from "@/components/Menu"

const noto_serif = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif',
  weight: ['400']
})

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})


export const metadata = {
  title: 'Seun-A',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" className={`${noto_serif.variable} ${nunito.variable}`}>
      <body className="flex">
        <ThemeProvider attribute="class">
          <Navbar />
          <Menu />
          
          <main className="grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
