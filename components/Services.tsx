import React from 'react';
import { Globe, Smartphone, Monitor, MessageSquare, Code } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.',
      icon: <Globe className="w-10 h-10 text-blue-700" />,
      link: '/services/web-development',
      ariaLabel: 'Explore our web development services - custom websites and modern web applications'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.',
      icon: <Smartphone className="w-10 h-10 text-blue-700" />,
      link: '/services/mobile-app-development',
      ariaLabel: 'Discover our mobile app development services for iOS and Android platforms'
    },
    {
      title: 'Desktop Application Development',
      description: 'Powerful desktop software tailored to your business needs, with intuitive interfaces and robust functionality.',
      icon: <Monitor className="w-10 h-10 text-blue-700" />,
      link: '/services/desktop-development',
      ariaLabel: 'View our desktop software development solutions and custom business applications'
    },
    {
      title: 'WhatsApp Business Solutions',
      description: 'Implement WhatsApp Business API to enhance customer engagement and streamline communication.',
      icon: <MessageSquare className="w-10 h-10 text-blue-700" />,
      link: '/services/whatsapp-business',
      ariaLabel: 'Explore WhatsApp Business API integration services and communication solutions'
    },
    {
      title: 'Custom IT Solutions',
      description: 'Specialized IT services and solutions designed to address your unique business challenges.',
      icon: <Code className="w-10 h-10 text-blue-700" />,
      link: '/services/custom-it',
      ariaLabel: 'Discover specialized IT solutions and consulting services for your business'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We deliver comprehensive IT solutions tailored to your business needs.
            Our expertise spans across multiple technologies and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              ariaLabel={service.ariaLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;