// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Line Autocare",
  description: "Layanan detailing mobil terpercaya dengan harga terjangkau di Blue Line Autocare.",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" href="/Logo.jpg" sizes="48x48" />
      </head>
      <body className="bg-black text-white antialiased min-h-screen overflow-x-hidden relative">
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
