import { Montserrat, Poppins, Corinthia } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/context";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

const corinthia = Corinthia({
  variable: "--font-corinthia",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Seun Ajayi | Video Editor/Web Developer",
  description: "Seun Ajayi - Video Editor | Digital Creator | Frontend Web Developer",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="js">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${corinthia.variable}`}
      >
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
