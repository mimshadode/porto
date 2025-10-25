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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://digital.vitee.id";
const brandName = "vitee.id";
const invitationNames = "Astri & Risal";
const recipient = "Keluarga La Ode Makasa";
const ogImage = `${siteUrl}/bg2.png`;
const shareTitle = `${invitationNames} - ${brandName}`;
const shareDescription = `Kepada Yth. Bapak/Ibu/Saudara/i ${recipient}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: shareTitle,
  description: shareDescription,
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: siteUrl,
    siteName: brandName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${invitationNames} invitation cover`,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
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
