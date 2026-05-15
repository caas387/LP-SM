import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { useMagneticHover } from '../hooks/useMagneticHover';
// @ts-ignore
import samaraImg from '../assets/img/img1.jpeg';

const CONTACT_PHONE = "5511958247301";
const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20presença%20digital.`;
const DELIVERABLES = ['Social Media', 'Vídeos', 'Design', 'Tráfego Pago'];
const METRICS = [
  { value: '360°', label: 'Estratégia' },
  { value: '04', label: 'Frentes' },
  { value: '01', label: 'Direção' },
];

export const Hero = () => {
  const btnPrimaryRef = useMagneticHover<HTMLAnchorElement>();
  const btnSecondaryRef = useMagneticHover<HTMLAnchorElement>();

  const btnBase = "inline-flex items-center justify-center gap-3 font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-all text-center btn-magnetic";
  const btnPrimary = `${btnBase} bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-lg btn-fill-effect w-full sm:w-auto`;
  const btnSecondary = `${btnBase} text-black/60 hover:text-black w-full sm:w-auto border-b-2 border-black/20 hover:border-yellow-500 pb-2 transition-colors`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#f3f3f3] pt-24 text-black lg:pt-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-6 pb-12 md:px-12 md:pb-20 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
        <div className="z-20 order-1 text-center lg:text-left">
          <header className="max-w-3xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center justify-center gap-4 lg:justify-start"
            >
              <span className="h-px w-10 bg-yellow-500" />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-yellow-600">
                Presença digital completa
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mb-6 max-w-[340px] text-[42px] font-medium uppercase leading-[0.9] tracking-normal text-[#1d1d1f] sm:max-w-none sm:text-6xl md:text-7xl lg:mx-0 lg:text-[88px] xl:text-[108px]"
            >
              Da <span className="italic font-extralight tracking-tight opacity-80">criação</span> <br />
              ao tráfego pago
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.7 }}
              className="mx-auto mb-9 max-w-[340px] text-sm font-medium leading-relaxed text-black/45 sm:max-w-xl md:text-base lg:mx-0"
            >
              Estratégia, conteúdo e performance para marcas que precisam sair do improviso
              e crescer com consistência no digital.
            </motion.p>
          </header>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mb-10 flex max-w-[340px] flex-col items-center justify-center gap-5 sm:max-w-none sm:flex-row lg:mx-0 lg:justify-start"
          >
            <a
              ref={btnPrimaryRef}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
            >
              <MessageCircle size={16} strokeWidth={2} />
              <span>Começar Agora</span>
            </a>
            <a
              ref={btnSecondaryRef}
              href="#servicos"
              className={btnSecondary}
            >
              <span>Ver Soluções</span>
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.46 }}
            className="mx-auto mb-10 flex max-w-[340px] flex-wrap justify-center gap-2 sm:max-w-xl lg:mx-0 lg:justify-start"
          >
            {DELIVERABLES.map((item) => (
              <span
                key={item}
                className="rounded-full border border-yellow-500/35 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.22em] text-black/55 sm:px-4 sm:text-[9px]"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mx-auto grid max-w-[340px] grid-cols-3 divide-x divide-black/10 border-t border-black/10 pt-7 sm:max-w-xl lg:mx-0"
          >
            {METRICS.map((item) => (
              <div key={item.label} className="px-3 first:pl-0 last:pr-0">
                <dt className="text-[8px] font-bold uppercase leading-tight tracking-[0.2em] text-black/35 sm:text-[9px]">
                  {item.label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold uppercase leading-none text-black md:text-3xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 38 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 mx-auto flex w-full max-w-[340px] items-end justify-center sm:max-w-[560px] lg:ml-auto"
        >
          <div className="absolute bottom-0 left-1/2 h-[86%] w-[84%] -translate-x-1/2 rounded-t-[42px] bg-black shadow-2xl shadow-black/15 md:rounded-t-[56px]" />
          <div className="absolute right-0 top-10 hidden h-32 w-32 border-r border-t border-yellow-500/50 lg:block" />
          <div className="absolute -left-2 bottom-12 hidden h-28 w-px bg-yellow-500/60 sm:block" />

          <div className="relative w-full overflow-hidden rounded-t-[40px] border border-black/10 bg-[#0d0d0d] shadow-2xl md:rounded-t-[52px]">
            <img
              src={samaraImg}
              alt="Samara, especialista da SM Company"
              className="h-[430px] w-full object-cover object-[50%_18%] grayscale-[15%] contrast-110 sm:h-[560px] lg:h-[690px] xl:h-[760px]"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.35em] text-yellow-400/80">
                  SM Company
                </p>
                <p className="max-w-[230px] text-xl font-semibold uppercase leading-[0.95] md:text-3xl">
                  Conteúdo com direção
                </p>
              </div>

              <div className="hidden rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-right backdrop-blur-md sm:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
                  Estratégia
                </p>
                <p className="mt-1 text-2xl font-semibold leading-none text-white">
                  360°
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
