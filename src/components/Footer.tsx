import React from 'react';
import { Instagram, Linkedin, MessageCircle, Globe, Hexagon } from 'lucide-react';

export const Footer = () => {
  const WHATSAPP_URL = "https://wa.me/5511958247301";

  return (
    <footer className="bg-black text-white pt-32 pb-12 px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* LOGO SUPERIOR */}
        <div className="flex items-center gap-3 mb-20 group cursor-default">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
            <Hexagon className="w-5 h-5 text-black fill-black" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">SM COMPANY</span>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          
          {/* COLUNA 1: IDENTIDADE */}
          <div className="lg:col-span-1">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-8">Identidade</h5>
            <p className="text-sm font-medium mb-4 italic">"Estratégias que Definem o Futuro."</p>
            <p className="text-xs text-white/40 leading-relaxed">
              Agência focada em soluções digitais 360°, unindo design de elite e performance real para dominar o mercado.
            </p>
          </div>

          {/* COLUNA 2: CONTATO */}
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-8">Contato</h5>
            <div className="flex flex-col gap-6 text-sm">
              <div>
                <span className="block text-[9px] text-white/20 uppercase mb-1">E-mail</span>
                <a href="mailto:contato@smcompany.com" className="hover:text-white/60 transition-colors">contato@smcompany.com</a>
              </div>
              <div>
                <span className="block text-[9px] text-white/20 uppercase mb-1">WhatsApp</span>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white/60 transition-colors">+55 (11) 95824-7301</a>
              </div>
              <p className="text-xs text-white/40 uppercase tracking-widest">Atendimento: Digital & Global</p>
            </div>
          </div>

          {/* COLUNA 3: LINKS RÁPIDOS */}
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-8">Links Rápidos</h5>
            <ul className="flex flex-col gap-4 text-sm text-white/40 uppercase tracking-widest font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nossos Serviços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
            </ul>
          </div>

          {/* COLUNA 4: SOLUÇÕES */}
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-8">Nossas Soluções</h5>
            <ul className="flex flex-col gap-4 text-xs text-white/40 leading-tight">
              <li>Social Media & Tráfego Pago</li>
              <li>Filmmaker & Storymaker</li>
              <li>Criação de Arte & Edição</li>
              <li>Divulgações Estratégicas</li>
            </ul>
          </div>

          {/* COLUNA 5: REDES SOCIAIS (Estilo Foto 10) */}
          <div className="flex flex-col items-start lg:items-end">
             <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-8 lg:text-right w-full">Siga-nos</h5>
             <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: MessageCircle, href: WHATSAPP_URL },
                  { icon: Globe, href: "#" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
             </div>
          </div>
        </div>


        {/* COPYRIGHT FINAL */}
        <div className="mt-20 text-center">
          <p className="text-[9px] text-white/10 uppercase tracking-[0.5em]">
            SM Company © 2026 | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};