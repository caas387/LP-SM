import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Camera, Diamond, ChevronLeft, ChevronRight } from 'lucide-react';

// Centralização de dados - Boas Práticas (Clean Code)
const SOLUTIONS = [
  {
    title: 'DOMÍNIO DE MERCADO',
    subtitle: 'Estratégia & Performance',
    icon: Activity,
    tags: ['GESTÃO', 'TRÁFEGO PAGO', 'ESCALA'],
    desc: 'Não apenas postamos, nós posicionamos. Utilizamos inteligência de dados e tráfego pago para garantir que sua marca seja vista pelas pessoas certas.',
    buttonText: 'VER ESTRATÉGIAS'
  },
  {
    title: 'NARRATIVAS IMERSIVAS',
    subtitle: 'Audiovisual de Elite',
    icon: Camera,
    tags: ['FILMMAKER', 'STORIES', 'CONEXÃO'],
    desc: 'O conteúdo estático morreu. Criamos experiências cinematográficas através de vídeos e stories que prendem a atenção e transformam seguidores.',
    buttonText: 'VER PRODUÇÕES'
  },
  {
    title: 'ESTÉTICA DE VANGUARDA',
    subtitle: 'Identidade & Autoridade',
    icon: Diamond,
    tags: ['DESIGN', 'FOTO', 'AUTORIDADE'],
    desc: 'Sua imagem é seu maior ativo. Desenvolvemos artes e edições de foto com acabamento de alto padrão, elevando o valor percebido da sua marca.',
    buttonText: 'VER PORTFÓLIO'
  }
];

export const Services = () => {
  const WHATSAPP_URL = "https://wa.me/5511958247301";

  return (
    <section id="servicos" className="bg-black text-white py-32 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADER DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-0 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-white/20 mb-4 block">
              O QUE ENTREGAMOS
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter uppercase">
              NOSSAS <span className="font-light opacity-70 italic">SOLUÇÕES</span>
            </h2>
          </motion.div>

          <div className="hidden md:flex gap-4 mb-4">
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* GRID DE SOLUÇÕES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SOLUTIONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#121212] p-10 rounded-[40px] flex flex-col items-center text-center group transition-all duration-500 border border-white/[0.03] hover:border-white/20 hover:bg-[#1a1a1a] shadow-2xl"
            >
              {/* ÍCONE ESTILO PINTEREST/NEOVISION */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white transition-all duration-500">
                <item.icon className="text-white/40 group-hover:text-black transition-colors" size={24} />
              </div>

              <span className="text-[10px] font-bold text-white/30 tracking-[0.2em] mb-2 uppercase">
                {item.subtitle}
              </span>
              
              <h3 className="text-lg md:text-2xl font-bold mb-6 tracking-tight uppercase">
                {item.title}
              </h3>

              {/* TAGS */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[8px] border border-white/10 px-3 py-1 rounded-full opacity-40 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-white/30 text-[11px] md:text-xs leading-relaxed mb-10 min-h-[60px]">
                {item.desc}
              </p>

              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 hover:text-white border-b border-white/10 pb-1 transition-all group-hover:border-white"
              >
                {item.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};