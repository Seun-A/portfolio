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
  title: "Seun Ajayi",
  description: "Seun Ajayi - Frontend Developer | Civil Engineering Undergrad",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${corinthia.variable}`}
      >
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
