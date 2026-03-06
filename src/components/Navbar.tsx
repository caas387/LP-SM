import React from 'react';
import { Search } from 'lucide-react';
// @ts-ignore
import logoImg from '../assets/img/logo-sm.webp'; 

export const Navbar = () => (
  // O container principal agora é totalmente transparente para absorver a cor de fundo
  <nav className="flex items-center justify-between px-10 py-6 max-w-[1440px] mx-auto w-full bg-transparent">
    
    {/* LADO ESQUERDO: LOGO E NOME DA EMPRESA */}
    <div className="flex items-center gap-3">
      {/* Container para sua logo, garantindo que ela se encaixe */}
      <div className="w-9 h-9 flex items-center justify-center overflow-hidden">
        <img 
          src={logoImg} 
          alt="SM Company Logo" 
          className="w-full h-full object-contain" // Mantém a proporção da logo
        />
      </div>
      {/* Nome da empresa com a cor escura e tipografia da referência */}
      <span className="text-lg font-bold tracking-tighter text-[#1d1d1f]">
        SM Company
      </span>
    </div>
    
    {/* CENTRO: LINKS DE NAVEGAÇÃO */}
    {/* Cores alteradas para cinza sutil e preto no hover */}
    <div className="hidden md:flex items-center gap-10 text-[13px] font-semibold text-black/40">
      <a href="#" className="hover:text-black transition-colors">Início</a>
      <a href="#" className="hover:text-black transition-colors">Sobre Nós</a>
      <a href="#" className="hover:text-black transition-colors">Serviços</a>
      <a href="#" className="hover:text-black transition-colors">Contato</a>
    </div>

    
  </nav>
);