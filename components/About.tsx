import Image from 'next/image';
import React from 'react';
import AboutImage from '@/assets/about.webp'
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-72 md:h-96 bg-gray-200 rounded-lg shadow-md overflow-hidden">
                <Image 
                  src={AboutImage} 
                  alt="Webbound team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-blue-700 rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 md:w-24 md:h-24 border-4 border-black rounded-lg"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Webbound</h2>
            <div className="w-16 h-1 bg-blue-700 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
              At Webbound, we&apos;re passionate about helping businesses harness the power of technology to achieve their goals. 
              Founded with a mission to deliver high-quality, innovative IT solutions, we&apos;ve grown into a trusted partner for 
              companies of all sizes across various industries.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experienced developers, designers, and IT specialists work collaboratively to deliver solutions 
              that are not only technically excellent but also aligned with your business objectives. We pride ourselves on 
              our ability to understand your unique challenges and translate them into effective digital strategies.
            </p>
            <p className="text-lg text-gray-600">
              Whether you need a stunning website, a powerful mobile app, or comprehensive IT services, we&apos;re here to turn 
              your vision into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;