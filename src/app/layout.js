import "./layout.css"
import { Croissant_One, Nunito } from 'next/font/google'
import { ThemeProvider } from "./theme-provider"
import Navbar from "@/components/Navbar"

const croissant_one = Croissant_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-croissant',
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
    <html lang="en" className={`${croissant_one.variable} ${nunito.variable}`}>
      <body className="flex">
        <ThemeProvider attribute="class">
          <Navbar />
          
          <main className="grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
