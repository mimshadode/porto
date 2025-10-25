import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mimshadode.vercel.app"),
  title: "Mimshad Portfolio",
  description:
    "Personal playground of Mimshad—crafting reliable full-stack builds and clean interfaces with purpose.",
  openGraph: {
    title: "Mimshad Portofolio | フルスタック開発者",
    description:
      "Explore full-stack work by Mimshad. Clean interfaces, modern web engineering, and performance-focused builds.",
    url: "https://mimshadode.vercel.app",
    siteName: "Mimshad Portfolio",
    images: [
      {
        url: "https://mimshadode.vercel.app/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Mimshad Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimshad Portfolio",
    description:
      "Modern and clean full-stack web projects by Mimshad. Built with Next.js, TypeScript, and TailwindCSS.",
    images: ["https://mimshad.vercel.app/bg2.png"],
  },
  other: {
    "whatsapp:title": "Mimshad Portfolio",
    "whatsapp:description":
      "Clean UI. Better code. Purposeful engineering. Explore my work 🚀",
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
