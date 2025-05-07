import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Metrics from "./metrics/Index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webbound | Custom IT Solutions & Web Development Services",
  description: "Webbound is a professional IT services company offering web development, mobile app development, desktop applications, WhatsApp Business solutions, and custom IT services.",
  keywords: "web development, mobile app development, desktop applications, WhatsApp Business, custom IT solutions, software development, IT services",
  authors: [{ name: "Webbound", url: "https://webbound.in" }],
  creator: "Webbound",
  publisher: "Webbound",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://webbound.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webbound | Custom IT Solutions & Web Development Services",
    description: "Professional IT services company offering web development, mobile apps, desktop applications, and custom IT solutions.",
    url: "https://webbound.in",
    siteName: "Webbound",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Webbound - Transforming Ideas into Digital Reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webbound | Custom IT Solutions & Web Development Services",
    description: "Professional IT services company offering web development, mobile apps, desktop applications, and custom IT solutions.",
    images: ["/og-image.png"], // Same as OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
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
        <Navbar/>
        {children}
        <Footer />
        <Metrics/>
      </body>
    </html>
  );
}
