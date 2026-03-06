import React from 'react';
import { Globe } from 'lucide-react';

export const LogoStrip = () => (
  <div className="border-y border-white/10 py-8 md:py-12 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center md:justify-between items-center gap-6 md:gap-0 opacity-30 grayscale flex-wrap">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="flex items-center gap-1 md:gap-2 font-bold text-sm md:text-xl whitespace-nowrap">
          <Globe className="w-4 h-4 md:w-6 md:h-6" />
          <span>Logoipsum</span>
        </div>
      ))}
    </div>
  </div>
);
