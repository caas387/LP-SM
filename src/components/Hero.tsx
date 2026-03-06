import React from 'react';
import { motion } from 'framer-motion';
import { useMagneticHover } from '../hooks/useMagneticHover';
// @ts-ignore
import samaraImg from '../assets/img/samara1.webp';

const CONTACT_PHONE = "5511958247301";
const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20presença%20digital.`;

export const Hero = () => {
  // Refs para efeito magnético
  const btnPrimaryRef = useMagneticHover();
  const btnSecondaryRef = useMagneticHover();

  // Variáveis de Estilo para Botões
  const btnBase = "font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-all text-center btn-magnetic";
  const btnPrimary = `${btnBase} bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-lg btn-fill-effect w-full md:w-auto`;
  const btnSecondary = `${btnBase} text-black/60 hover:text-black w-full md:w-auto border-b-2 border-black/20 hover:border-yellow-500 transition-colors`;

  return (
    <section id="inicio" className="relative min-h-screen lg:min-h-[90vh] flex items-center overflow-hidden bg-[#f3f3f3] pt-24 lg:pt-0">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO ESQUERDO: CONTEÚDO TEXTUAL */}
        <div className="z-20 order-2 lg:order-1 text-center lg:text-left">
          <header>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 md:mb-8"
            >
              <span className="text-[9px] md:text-[10px] tracking-[0.4em] font-bold uppercase text-yellow-500">
                SUA PRESENÇA DIGITAL COMPLETA
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-7xl lg:text-[85px] xl:text-[105px] font-medium leading-[0.9] tracking-tighter text-[#1d1d1f] mb-8 md:mb-12 uppercase"
            >
              Da <span className="italic font-extralight tracking-tight opacity-80">criação</span> <br />
              ao tráfego pago
            </motion.h1>
          </header>
          
          {/* BOTÕES DE CHAMADA PARA AÇÃO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 mb-16 lg:mb-24"
          >
            <a 
              ref={btnPrimaryRef} 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={btnPrimary}
            >
              Começar Agora
            </a>
            <a 
              ref={btnSecondaryRef} 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={btnSecondary}
            >
              Fale Conosco
            </a>
          </motion.div>

          {/* PROVA SOCIAL (Oculta em celulares muito pequenos para evitar poluição) */}
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden sm:flex items-center justify-center lg:justify-start gap-8 md:gap-12 border-t border-yellow-500/20 pt-10"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[11, 12, 13, 14].map((id) => (
                  <img 
                    key={id}
                    src={`https://i.pravatar.cc/100?img=${id}`} 
                    className="w-10 h-10 rounded-full border-2 border-[#f3f3f3] object-cover" 
                    alt="Avatar do Cliente" 
                  />
                ))}
              </div>
              <p className="text-[10px] font-bold uppercase leading-tight text-yellow-500 tracking-tighter">
                Trusted by<br/>Clients
              </p>
            </div>

              <p className="text-[12px] md:text-[13px] text-black/40 leading-relaxed max-w-[300px] font-medium italic">
              "Cuidamos de tudo: <span className="text-yellow-600">social media</span>, vídeos, design e anúncios."
            </p>
          </motion.footer>
        </div>

        {/* LADO DIREITO: VISUAL DA ESPECIALISTA */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-end h-[450px] md:h-[600px] lg:h-full">
          {/* Forma Arredondada de Fundo */}
          <div className="absolute bottom-0 right-[-5%] lg:right-[-10%] w-[110%] lg:w-[120%] h-[75%] lg:h-[85%] bg-white rounded-t-[60px] lg:rounded-tl-[120px] shadow-2xl shadow-black/[0.03] -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src={samaraImg} 
              alt="Samara - SM Company Specialist" 
              className="h-[400px] md:h-[550px] lg:h-[750px] xl:h-[850px] w-auto object-cover grayscale contrast-125"
              loading="eager"
            /> 

            {/* CARD FLUTUANTE - Responsivo */}
            <motion.div 
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-12 -left-6 md:-left-24 bg-white/60 backdrop-blur-2xl border border-white/40 p-6 md:p-12 rounded-[30px] md:rounded-[50px] shadow-2xl"
            >
              <div className="text-4xl md:text-6xl font-bold tracking-tighter text-black/90 uppercase">SOLUÇÃO</div>
              <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 mt-1">
                Estratégia 360°
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};