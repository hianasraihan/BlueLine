import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Line AutoCare",
  description:
    "Profesional dalam Perawatan, Bersih dalam Setiap Detail. Blue Line AutoCare siap melayani kebutuhan detailing kendaraan Anda dengan harga terjangkau dan kualitas internasional.",
  robots: "index, follow",
  metadataBase: new URL("https://blue-line-pearl.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/blue.png", // icon tambahan untuk perangkat Apple
  },
  openGraph: {
    title: "Blue Line AutoCare",
    description:
      "Profesional dalam Perawatan, Bersih dalam Setiap Detail. Blue Line AutoCare siap melayani kebutuhan detailing kendaraan Anda dengan harga terjangkau dan kualitas internasional.",
    url: "https://blue-line-pearl.vercel.app/",
    siteName: "Blue Line AutoCare",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blue Line AutoCare",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Line AutoCare - Profesional dan Terpercaya",
    description:
      "Profesional dalam Perawatan, Bersih dalam Setiap Detail. Blue Line AutoCare siap melayani kebutuhan detailing kendaraan Anda dengan harga terjangkau dan kualitas internasional.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-black text-white antialiased min-h-screen overflow-x-hidden relative">
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
