import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Arimo } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import WhatsApp from "../components/whatsapp";

const arimo = Arimo({ 
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al Shard",
  description: "Best commercial mediation company in Qatar",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <link rel="icon" href="/AlShard.ico" />
      </head>
      <body className={`${inter.className} ${arimo.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
