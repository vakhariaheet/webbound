

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import { Metadata } from 'next';
import Script from "next/script";
// import Script from 'next/script';

export const metadata: Metadata = {
  title: "Webbound | Transforming Ideas into Digital Reality",
  description: "Webbound builds custom technology solutions that help businesses of all sizes thrive in the digital landscape. Explore our web, mobile, and desktop development services.",
  keywords: "IT services, web development, mobile app development, desktop applications, custom IT solutions, software development",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webbound | Transforming Ideas into Digital Reality",
    description: "Webbound builds custom technology solutions that help businesses of all sizes thrive in the digital landscape.",
    url: "https://webbound.in",
    siteName: "Webbound",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Script id="organization-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Webbound",
            "url": "https://webbound.in",
            "logo": "https://webbound.in/maskable_icon.png",
            "description": "Webbound builds custom technology solutions that help businesses of all sizes thrive in the digital landscape.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 94267 74932",
              "contactType": "customer service",
              "email": "support@webbound.in"
            },
            "sameAs": [
              "https://facebook.com/webbound.in",
              "https://www.linkedin.com/company/webbound",
              "https://www.instagram.com/webbound.in/"
            ]
          }
        `}
      </Script>
      <Hero />
      <Services />
      <Team />
      <About />
      <Contact />
    </>
  );
}
