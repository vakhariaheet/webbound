import React from 'react';
import WebboundLogo from '../assets/plain Logo transperent.webp';
import Image from 'next/image';
export const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 relative bg-white p-2 rounded-lg">
        <Image src={WebboundLogo} alt="Webbound Logo" />
      </div>
      <span className="text-xl font-bold">Webbound</span>
    </div>
  );
};