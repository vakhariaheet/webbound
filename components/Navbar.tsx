"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = usePathname();
  const isHomePage = location === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'Desktop Development', path: '/services/desktop-development' },
    { name: 'WhatsApp Business', path: '/services/whatsapp-business' },
    { name: 'Custom IT Solutions', path: '/services/custom-it' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center text-gray-900 hover:text-blue-700 font-medium transition-colors"
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {isHomePage ? (
              <a href="#about" className="text-gray-900 hover:text-blue-700 font-medium transition-colors">About</a>
            ) : (
              <Link href="/#about" className="text-gray-900 hover:text-blue-700 font-medium transition-colors">About</Link>
            )}
            {isHomePage ? (
              <a href="#contact" className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium">
                Contact Us
              </a>
            ) : (
              <Link href="/#contact" className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium">
                Contact Us
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-900 hover:text-blue-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="pl-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.path}
                        className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {isHomePage ? (
                <a
                  href="#about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              ) : (
                <Link
                  href="/#about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              )}
              {isHomePage ? (
                <a
                  href="#contact"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-700 text-white hover:bg-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              ) : (
                <Link
                  href="/#contact"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-700 text-white hover:bg-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;