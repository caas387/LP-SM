import React from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_URL = "https://wa.me/5511958247301?text=Quero%20levar%20minha%20marca%20para%20o%20próximo%20nível!";

// Componente Interno para o Blueprint Animado (Alta Tecnologia)
const StrategicBlueprint = () => {
  // Variantes para o efeito de "desenho" do laser
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
    <div className="relative w-full h-[480px] bg-[#050505] rounded-[40px] border border-white/5 overflow-hidden flex items-center justify-center shadow-2xl">
      {/* Grid de Fundo Milimetrado */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '30px 30px' 
        }} 
      />

      {/* SVG com Formas de Engenharia Verdadeiras */}
      <svg width="100%" height="100%" viewBox="0 0 600 400" fill="none" className="z-10 px-6">
        {/* Núcleo Central de Dados */}
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

        {/* Mira de Precisão (Crosshair) */}
        <motion.path
          d="M300 170 V230 M270 200 H330"
          stroke="white" strokeWidth="1"
          variants={draw} custom={1} initial="hidden" whileInView="visible"
        />

        {/* Vetores de Fluxo Lateral (Estratégia) */}
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

        {/* Fórmulas Técnicas */}
        <motion.text
          x="320" y="140" fill="white" fontSize="7" fontFamily="monospace" className="opacity-40"
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} transition={{ delay: 1.5 }}
        >
          Σ(ROI) = ΔPERFORMANCE / dt
        </motion.text>
        <motion.text
          x="180" y="270" fill="white" fontSize="7" fontFamily="monospace" className="opacity-40"
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} transition={{ delay: 1.8 }}
        >
          0x4F22_CONVERSION_STRAT
        </motion.text>
      </svg>

      {/* Brilho Atmosférico Central */}
      <div className="absolute w-64 h-64 bg-white/[0.02] blur-[100px] rounded-full" />
      
      {/* Listagem Lateral de Processamento (Estilo Imagem 9) */}
      <div className="absolute inset-0 flex flex-col justify-center gap-16 p-12 pointer-events-none">
        {['SOCIAL MEDIA', 'TRÁFEGO PAGO', 'FILMMAKER', 'STORYMAKER'].map((service, i) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + (i * 0.3) }}
            className="flex items-center gap-4"
          >
            <span className="text-[9px] tracking-[0.4em] text-white/20 font-mono">
              {service} <span className="opacity-10 text-[7px] ml-2">// PROCESSED_</span>
            </span>
            <div className="h-[1px] w-8 bg-white/5" />
          </motion.div>
        ))}
      </div>

      {/* Marcação de Scanner (Linha que sobe e desce) */}
      <motion.div 
        animate={{ y: [0, 480, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"
      />
    </div>
  );
};

export const Possibilities = () => {
  const sidebarLinks = ['INOVAÇÃO', 'TECNOLOGIA', 'RESULTADO'];

  return (
    <section className="bg-black text-white py-32 px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* TÍTULO IMPACTANTE */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[100px] font-medium tracking-[calc(-0.05em)] uppercase mb-24 max-w-5xl leading-[0.85]"
        >
          PRONTO PARA O <br />
          <span className="font-light italic opacity-70">PRÓXIMO NÍVEL?</span>
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* TAGLINE LATERAL */}
          <div className="lg:col-span-2 flex flex-col gap-8 text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
            {sidebarLinks.map((link, index) => (
              <span key={link} className={index === 0 ? "text-white/60 border-l border-white/40 pl-4" : "pl-5"}>
                {link}
              </span>
            ))}
          </div>

          {/* BLUEPRINT ANIMADO (CONTEÚDO TÉCNICO) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:col-span-6 relative"
          >
            <StrategicBlueprint />
          </motion.div>

          {/* CONTEÚDO DE APOIO E CALL TO ACTION */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pl-10">
            <header className="mb-8 w-full">
              <h3 className="text-2xl font-semibold leading-tight tracking-tight uppercase border-b border-white/10 pb-4">
                Engenharia de <span className="italic font-light">Crescimento</span>
              </h3>
            </header>
            
            <p className="text-white/40 text-[14px] leading-relaxed mb-10 font-medium">
              "O mercado digital não espera. Enquanto outros apenas observam, nós construímos a presença que domina. Sua marca merece uma estratégia que une design de elite e performance real."
            </p>
            
            <motion.a 
              whileHover={{ x: 10 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-[11px] uppercase tracking-[0.3em] font-bold border-b border-white pb-2 hover:text-white/60 transition-all mb-16 flex items-center gap-4"
            >
              QUERO MINHA ESTRATÉGIA AGORA
              <span className="w-2 h-2 bg-white rounded-full animate-pulse group-hover:scale-150 transition-transform" />
            </motion.a>

            {/* RODAPÉ EDITORIAL */}
            <footer className="w-full flex justify-between items-center pt-10 border-t border-white/5 text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">
              <span>SM Company © 2026</span>
              <span className="italic">Blueprint Estratégico</span>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};