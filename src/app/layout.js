import "@/styles/globals.scss"
import { Croissant_One, Nunito } from 'next/font/google'
import { ThemeProvider } from "./theme-provider"
import Header from "@/components/navigation/Header"

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
      <body>
        <ThemeProvider attribute="class">
          <div className="sticky top-0 z-20">
            <Header />
          </div>

          <main className="pb-6">
            {children}
          </main>
        </ThemeProvider>

        {/* Animated Circles */}
        { new Array(10).fill().map((e, i) => <div key={i} className={`circle c-${i}`} />) }
      </body>
    </html>
  )
}
