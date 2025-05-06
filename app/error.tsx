"use client";
import React from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8 md:p-12 border border-gray-200">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          
          <div className="w-16 h-1 bg-blue-700 mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-600 mb-8">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          
          {error.message && process.env.NODE_ENV === 'development' && (
            <div className="w-full bg-gray-100 p-4 rounded-md mb-8 text-left overflow-auto">
              <p className="font-mono text-sm text-gray-800">{error.message}</p>
              {error.digest && (
                <p className="font-mono text-sm text-gray-500 mt-2">Error ID: {error.digest}</p>
              )}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button
              onClick={reset}
              className="px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors shadow-md flex-1 text-center"
            >
              Try Again
            </button>
            
            <Link
              href="/"
              className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md border border-blue-700 hover:bg-blue-50 transition-colors flex-1 text-center"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;