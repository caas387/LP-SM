import React from 'react';
import { motion } from 'framer-motion';

const StrategicBlueprint = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 0.5,
      transition: {
        pathLength: { delay: i * 0.2, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: i * 0.2, duration: 0.2 }
      }
    })
  };

  return (
    <div className="relative w-full h-[380px] md:h-[480px] bg-[#050505] rounded-[30px] md:rounded-[40px] border border-white/5 overflow-hidden flex items-center justify-center shadow-2xl">
      {/* Grid de Fundo Milimetrado */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '30px 30px' 
        }} 
      />

      {/* SVG Técnico com Formas de Engenharia */}
      <svg width="100%" height="100%" viewBox="0 0 600 400" fill="none" className="z-10 px-6">
        <motion.circle
          cx="300" cy="200" r="80"
          stroke="white" strokeWidth="0.5" strokeDasharray="10 5"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 0.1 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="300" cy="200" r="60"
          stroke="white" strokeWidth="1"
          variants={draw} custom={0} initial="hidden" whileInView="visible"
        />
        <motion.path
          d="M300 170 V230 M270 200 H330"
          stroke="white" strokeWidth="1"
          variants={draw} custom={1} initial="hidden" whileInView="visible"
        />
        <motion.path
          d="M100 100 H220 L250 160"
          stroke="white" strokeWidth="0.5"
          variants={draw} custom={2} initial="hidden" whileInView="visible"
        />
        <motion.path
          d="M500 300 H380 L350 240"
          stroke="white" strokeWidth="0.5"
          variants={draw} custom={3} initial="hidden" whileInView="visible"
        />
      </svg>

      {/* Rótulos de Processamento Lateral */}
      <div className="absolute inset-0 flex flex-col justify-center gap-12 md:gap-16 p-8 md:p-12 pointer-events-none">
        {['SOCIAL MEDIA', 'TRÁFEGO PAGO', 'FILMMAKER', 'STORYMAKER'].map((service, i) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + (i * 0.3) }}
            className="flex items-center gap-4"
          >
            <span className="text-[7px] md:text-[9px] tracking-[0.4em] text-white/20 font-mono uppercase">
              {service} <span className="hidden sm:inline opacity-10 text-[7px] ml-2">// PROCESSED_</span>
            </span>
            <div className="h-[1px] w-4 md:w-8 bg-white/5" />
          </motion.div>
        ))}
      </div>

      {/* Scanner Line */}
      <motion.div 
        animate={{ y: [0, 480, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"
      />
    </div>
  );
};

export const Possibilities = () => {
  return (
    <section className="bg-black text-white py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl lg:text-[100px] font-medium tracking-tighter uppercase mb-16 md:mb-24 max-w-5xl leading-[0.85] text-center lg:text-left"
        >
          PRONTO PARA O <br />
          <span className="font-light italic opacity-70 text-3xl md:text-7xl lg:text-[90px]">PRÓXIMO NÍVEL?</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* TAGLINE LATERAL (Oculta no Mobile para foco no Blueprint) */}
          <div className="hidden lg:flex lg:col-span-2 flex-col gap-8 text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
            <span className="text-white/60 border-l border-white/40 pl-4">INOVAÇÃO</span>
            <span className="pl-5">TECNOLOGIA</span>
            <span className="pl-5">RESULTADO</span>
          </div>

          {/* BLUEPRINT ANIMADO */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:col-span-6 w-full"
          >
            <StrategicBlueprint />
          </motion.div>

          {/* TEXTOS DE APOIO */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pl-10 text-center lg:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 uppercase border-b border-white/10 pb-4 w-full">
              Engenharia de <span className="italic font-light">Crescimento</span>
            </h3>
            
            <p className="text-white/40 text-sm md:text-base leading-relaxed mb-10 font-medium">
              "O mercado digital não espera. Enquanto outros apenas observam, nós construímos a presença que domina sua marca merece design de elite."
            </p>
            
            <motion.a 
              whileHover={{ x: 10 }}
              href="#"
              className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold border-b border-white pb-2 hover:text-white/60 transition-all mb-16 flex items-center gap-4 mx-auto lg:mx-0"
            >
              QUERO MINHA ESTRATÉGIA AGORA
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};