

import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import WebImage from "@/assets/web.jpeg"
import Image from 'next/image';
export const metadata: Metadata = {
  title: "Web Development Services | Webbound",
  description: "Transform your digital presence with our custom web development solutions. We create modern, responsive websites that drive results.",
  keywords: "web development, website design, responsive websites, custom websites, e-commerce solutions, PWA, content management systems",
  alternates: {
    canonical: "/services/web-development",
  },
  openGraph: {
    title: "Web Development Services | Webbound",
    description: "Transform your digital presence with our custom web development solutions. We create modern, responsive websites that drive results.",
    url: "https://webbound.in/services/web-development",
    siteName: "Webbound",
    locale: "en_US",
    type: "website",
  },
};

const WebDevelopment: React.FC = () => {
  const features = [
    "Custom website development",
    "E-commerce solutions",
    "Progressive Web Apps (PWA)",
    "Content Management Systems",
    "API development and integration",
    "Website maintenance and support"
  ];

  const technologies = [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL"
  ];

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web Development Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your digital presence with our custom web development solutions. 
                We create modern, responsive websites that drive results.
              </p>
              <Link 
                href="/#contact" 
                className="inline-flex items-center px-8 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors shadow-md"
              >
                Start Your Project
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src={WebImage}
                  alt="Web Development"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-700/10 rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-700/20 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white rounded-lg shadow-md mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-medium text-gray-900">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <p className="font-medium text-gray-900">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;