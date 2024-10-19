import "./layout.css"
import { Noto_Serif, Nunito, Montserrat } from 'next/font/google'
import { ThemeProvider } from "./theme-provider"
import Navbar from "@/components/navbar"
import Menu from "@/components/menu"

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

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})


export const metadata = {
  title: 'Seun Ajayi',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" className={`${noto_serif.variable} ${nunito.variable}  ${montserrat.variable}`}>
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          <Menu />
         
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
