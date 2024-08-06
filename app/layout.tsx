import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Arimo } from "next/font/google" ;
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Footer1 } from "@/app/components/footer1";
import WhatsApp from "./components/whatsapp";


const arimo = Arimo({ 
  subsets: ["latin"],
  display: 'swap',
 });

const inter = Inter({ subsets: ["latin"] });


 export const metadata: Metadata = {
  title: "Al Shard",
  description: "Best commercial mediation company in Qatar ",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href={inter.href} />
        <link rel="stylesheet" href={arimo.href} />
        <link rel="icon" href="/AlShard.ico" />
      </head>
      <body className={`${inter.className} ${arimo.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsApp/>
      </body>
    </html>
  );
}


