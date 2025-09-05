import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LightCurrent Pro - CCTV, Fire Alarm & Data Network Systems",
  description: "Professional installation and maintenance of CCTV security systems, fire alarm systems, and data network infrastructure. Expert light current solutions for commercial and residential properties.",
  keywords: "CCTV installation, fire alarm systems, data network, security cameras, structured cabling, surveillance systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}