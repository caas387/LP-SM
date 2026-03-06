import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Possibilidades', href: '#possibilidades' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-[#f3f3f3]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Hexagon className="w-6 h-6 text-black fill-black" />
          <span className="font-bold tracking-tighter uppercase text-lg">SM COMPANY</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-12">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 hover:text-black transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5511958247301" 
            className="bg-black text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
          >
            Orçamento
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-black/5 p-8 flex flex-col gap-6 lg:hidden shadow-xl"
          >
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium tracking-tight text-black border-b border-black/5 pb-4"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5511958247301" 
              className="bg-black text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};