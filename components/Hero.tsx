import Link from 'next/link';
import React from 'react';
import HeroBG from "@/assets/hero-bg.jpeg"
import HeroFG from "@/assets/hero-fg.jpeg"
import Image from 'next/image';
const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-blue-700 opacity-5"></div>
        <div className="absolute -left-20 top-1/3 w-72 h-72 rounded-full bg-blue-700 opacity-5"></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-black opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="block">Transforming Ideas into</span>
              <span className="text-blue-700">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              We build custom technology solutions that help businesses of all sizes thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#services" 
                className="px-8 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors shadow-md text-center"
              >
                Explore Services
              </a>
              <Link 
                href="/#contact" 
                className="px-8 py-3 border border-blue-700 text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-full h-80 bg-gray-200 rounded-lg shadow-xl overflow-hidden transform rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 to-transparent"></div>
              <Image 
                src={HeroBG}
                alt="Digital solutions" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-3/4 h-48 bg-gray-200 rounded-lg shadow-xl overflow-hidden transform -rotate-2 -mt-16 ml-12">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
              <Image
                src={HeroFG}
                alt="Team collaboration"
                className="w-full h-full object-cover" 
               
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;