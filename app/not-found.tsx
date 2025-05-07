import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="max-w-3xl w-full text-center">
        <div className="relative mb-8 inline-block">
          <div className="text-9xl font-bold text-blue-700">404</div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-700/10 rounded-lg"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-blue-700/20 rounded-lg"></div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved to another URL.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/"
            className="inline-flex items-center px-8 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors shadow-md"
            aria-label='Go back to home'
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <Link 
            href="/#contact"
            aria-label='Contact support'
            className="inline-flex items-center px-8 py-3 border border-blue-700 text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}