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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const ogImage = `https://mimshad.vercel.app/_next/image?url=%2Fbg.jpg&w=3840&q=75`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mimshad Portofolio",
  description:
    "Showcase of Mimshad's full-stack work, featuring clean interfaces, polished visuals, and performant web experiences.",
  openGraph: {
    title: "Mimshad Portofolio | Full-Stack Developer",
    description:
      "Showcase of Mimshad's full-stack work, featuring clean interfaces, polished visuals, and performant web experiences.",
    url: siteUrl,
    siteName: "Mimshad Portofolio",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Mimshad Portofolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimshad Portofolio",
    description:
      "Showcase of Mimshad's full-stack work, featuring clean interfaces, polished visuals, and performant web experiences.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
