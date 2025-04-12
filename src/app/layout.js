import "./layout.css"
import { Montserrat, EB_Garamond } from 'next/font/google'
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Footer from "@/views/footer"
import { StoreProvider } from "@/store/context";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--font-montserrat'
})

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-garamond'
})

export const metadata = {
  title: 'Seun Ajayi',
  description: 'Seun Ajayi - Frontend Developer | Civil Engineering Student',
}

export default function RootLayout({ children }) {
 return (
    <html
      lang="en"
      className={`${montserrat.variable} ${garamond.variable}`}
    >
      <body suppressHydrationWarning={true}>
        <StoreProvider>
          {/* <Navbar />
          <Hero /> */}

          <main className="main">
            {children}
         </main>
         {/* <Footer /> */}
        </StoreProvider>
      </body>
    </html>
  )
}
