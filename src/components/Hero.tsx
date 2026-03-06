import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import samaraImg from '../assets/img/samara.webp';

const CONTACT_PHONE = "5511958247301";
const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20presença%20digital.`;

export const Hero = () => {
  // 2. Extração de Estilos para variáveis (Opcional, mas melhora a leitura do JSX)
  const btnBase = "font-bold text-[11px] uppercase tracking-[0.2em] transition-all text-center";
  const btnPrimary = `${btnBase} bg-black text-white px-10 py-4 rounded-lg hover:bg-zinc-800`;
  const btnSecondary = `${btnBase} text-black/60 hover:text-black`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#f3f3f3]">
      <div className="max-w-[1440px] mx-auto w-full px-8 grid lg:grid-cols-2 gap-4 items-center">
        
        {/* LADO ESQUERDO: CONTEÚDO */}
        <div className="z-20 pt-10">
          <header>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-black/30">
                SUA PRESENÇA DIGITAL COMPLETA
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[100px] font-medium leading-[0.85] tracking-tighter text-[#1d1d1f] mb-12 uppercase"
            >
              Da <span className="italic font-extralight tracking-tight opacity-80">criação</span> <br />
              ao tráfego pago
            </motion.h1>
          </header>
          
          {/* 3. Ações do Usuário (Botões como Links Externos Seguros) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6 mb-24"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Começar Agora
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
              Fale Conosco
            </a>
          </motion.div>

          {/* SOCIAL PROOF */}
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-12 border-t border-black/5 pt-10"
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
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#f3f3f3] flex items-center justify-center text-[11px] font-bold">
                  20+
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase leading-tight text-black/30 tracking-tighter">
                Trusted by<br/>Clients
              </p>
            </div>

            <p className="text-[13px] text-black/50 leading-relaxed max-w-[340px] font-medium italic">
              "Cuidamos de tudo: social media, vídeos, design e anúncios. Junte-se a mais de 50 clientes e veja sua marca decolar."
            </p>
          </motion.footer>
        </div>

        {/* LADO DIREITO: VISUAL */}
        <div className="relative h-full flex items-end justify-end">
          <div className="absolute bottom-0 right-[-10%] w-[120%] h-[85%] bg-white rounded-tl-[120px] shadow-2xl shadow-black/[0.03] -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src={samaraImg} 
              alt="Samara - SM Company Specialist" 
              className="h-[800px] w-auto object-cover grayscale contrast-125"
              loading="eager" // Prioridade de carregamento por ser Hero
            />

            {/* CARD FLUTUANTE 360° */}
            <motion.div 
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute top-[65%] -left-32 bg-white/40 backdrop-blur-3xl border border-white/40 p-12 rounded-[50px] shadow-2xl"
            >
              <div className="text-6xl font-bold tracking-tighter text-black/90">SOLUÇÃO</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 mt-1">
                Estratégia 360°
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};