import React from 'react';
import { Globe } from 'lucide-react';

export const LogoStrip = () => (
  <div className="border-y border-white/10 py-12 overflow-hidden">
    <div className="max-w-7xl mx-auto px-8 flex justify-between items-center opacity-30 grayscale">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="flex items-center gap-2 font-bold text-xl">
          <Globe className="w-6 h-6" />
          <span>Logoipsum</span>
        </div>
      ))}
    </div>
  </div>
);
