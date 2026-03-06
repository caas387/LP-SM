import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import samara2Img from '../assets/img/samara2.webp';
const CONTACT_PHONE = "5511958247301";
const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE}?text=Olá!%20Vi%20a%20seção%20Nossa%20Filosofia%20e%20gostaria%20de%20falar%20com%20um%20estrategista.`;

export const About = () => {
  const tags = ['CLAREZA', 'ESTRATÉGIA', 'FOCO'];
  
  // Classes base para evitar repetição de código (DRY - Don't Repeat Yourself)
  const btnBase = "px-8 py-4 rounded-lg font-bold text-[11px] uppercase tracking-[0.2em] transition-all text-center min-w-[200px]";
  const btnPrimary = `${btnBase} bg-white text-black hover:bg-zinc-200 shadow-xl`;
  const btnSecondary = `${btnBase} border border-white/10 text-white/60 hover:text-white hover:border-white/30`;

  return (
    <section className="bg-black text-white py-32 px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO ESQUERDO: IMAGEM (SAMARA2) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
            <img 
              src={samara2Img} 
              alt="Samara - Estrategista SM Company" 
              className="w-full h-auto object-cover grayscale brightness-90 contrast-110"
            />
          </div>
        </motion.div>

        {/* LADO DIREITO: CONTEÚDO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-white/20 mb-6 block">
            NOSSA FILOSOFIA
          </span>

          <h2 className="text-6xl md:text-8xl font-medium leading-[0.85] tracking-tighter mb-10 uppercase">
            A MENTE <br />
            <span className="font-light italic opacity-70">POR TRÁS</span> <br />
            DA MARCA
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {tags.map(tag => (
              <span key={tag} className="text-[9px] uppercase tracking-[0.3em] border border-white/10 px-6 py-2 rounded-full text-white/40 font-semibold">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[16px] text-white/40 leading-relaxed mb-14 max-w-lg font-medium italic">
            "Acreditamos que grandes resultados nascem de uma visão clara. Mergulhamos no universo da sua marca para entender sua essência e desenhar estratégias precisas, que conectam, engajam e convertem com propósito."
          </p>

          {/* BOTÕES: Ambos levando para o mesmo WhatsApp */}
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={btnPrimary}
            >
              NOSSOS SERVIÇOS
            </a>

            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={btnSecondary}
            >
              FALE COM UM ESTRATEGISTA
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};