"use client";
import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';
import MSMELogo from "../assets/msme-logo-500x500.webp"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = usePathname();
  const isHomePage = location === '/';

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6  p-2">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6">
              Transforming ideas into digital reality with cutting-edge technology solutions for businesses of all sizes.
            </p>
            <div className="flex items-center mb-4">
              <div className="mr-2 bg-white p-2 rounded">
                <Image src={MSMELogo} alt="MSME Registered" className="h-12 w-12" />
              </div>
              <div className="text-sm text-gray-300">
                <p>MSME Registered Company</p>
                <p>Reg. No: UDYAM-GJ-01-0486963</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                aria-label="Follow us on Facebook"
                href="https://facebook.com/webbound.in" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
          
              <a
                aria-label="Follow us on LinkedIn"
                href="https://www.linkedin.com/company/webbound" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a
                aria-label="Follow us on Instagram"
                href="https://www.instagram.com/webbound.in/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  aria-label='Web Development'
                  href="/services/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link aria-label='Mobile App Development'
                  href="/services/mobile-app-development" className="text-gray-300 hover:text-white transition-colors">Mobile App Development</Link>
              </li>
              <li>
                <Link
                  aria-label='Desktop Applications'
                  href="/services/desktop-development" className="text-gray-300 hover:text-white transition-colors">Desktop Applications</Link>
              </li>
              <li>
                <Link aria-label='WhatsApp Business Solutions'
                  href="/services/whatsapp-business" className="text-gray-300 hover:text-white transition-colors">WhatsApp Business Solutions</Link>
              </li>
              <li>
                <Link
                  aria-label='Custom IT Services'
                  href="/services/custom-it" className="text-gray-300 hover:text-white transition-colors">Custom IT Services</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                {isHomePage ? (
                  <a
                    aria-label='About Us'
                    href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
                ) : (
                    <Link
                      aria-label='About Us'
                      href="/#about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a aria-label='Our Team'
                    href="#team" className="text-gray-300 hover:text-white transition-colors">Our Team</a>
                ) : (
                  <Link href="/#team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link>
                )}
              </li>
              <li>
                <Link
                  aria-label='Contact Us'
                  href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link
                  aria-label='Terms of Service'
                  href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                <span className="text-gray-300">support@webbound.in</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                <span className="text-gray-300">+91 94267 74932</span>
              </li>

            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Webbound. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                aria-label='Privacy Policy'
                href="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link
                aria-label='Terms of Service'
                href="/terms-of-service" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</Link>
              <Link
                aria-label='Sitemap'
                href="/sitemap.xml" className="text-gray-400 text-sm hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;