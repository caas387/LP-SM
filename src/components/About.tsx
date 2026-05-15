import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import aboutImg from '../assets/img/img2.jpeg';

const CONTACT_PHONE = "5511958247301";
const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE}?text=Olá!%20Vi%20a%20seção%20Nossa%20Filosofia%20e%20gostaria%20de%20falar%20com%20um%20estrategista.`;

export const About = () => {
  const tags = ['CLAREZA', 'ESTRATÉGIA', 'FOCO'];

  const btnBase = "inline-flex items-center justify-center gap-3 rounded-lg font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-center transition-all w-full md:w-auto";
  const btnPrimary = `${btnBase} brand-glow-cta bg-yellow-400 text-black border border-yellow-300 px-8 md:px-10 py-4 md:py-5 hover:bg-yellow-300 hover:-translate-y-1`;
  const btnSecondary = `${btnBase} border border-white/15 bg-white/[0.03] text-white/70 px-7 md:px-8 py-4 hover:text-white hover:border-yellow-400/50 hover:bg-yellow-400/10`;

  const whatsappLink = WHATSAPP_URL;

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="bg-black text-white py-24 md:py-32 px-6 md:px-12 min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center">
        <div className="text-center lg:text-left">
          <span className="text-[9px] md:text-[10px] tracking-[0.5em] font-bold uppercase text-yellow-400 mb-4 md:mb-6 block">
            NOSSA FILOSOFIA
          </span>

          <h2
            id="about-heading"
            className="text-4xl md:text-6xl lg:text-8xl font-medium leading-[0.85] tracking-tighter mb-10 uppercase"
          >
            A MENTE <br />
            <span className="font-light italic opacity-70">POR TRÁS</span> <br />
            DA MARCA
          </h2>
          
          <ul
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12"
            aria-label="Valores da marca"
          >
            {tags.map(tag => (
              <li key={tag}>
                <span className="text-[9px] uppercase tracking-[0.3em] border border-yellow-500/40 px-6 py-2 rounded-full text-yellow-300/80 font-semibold">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          <p className="mx-auto lg:mx-0 text-sm md:text-[16px] text-white/40 leading-relaxed mb-8 md:mb-14 max-w-lg font-medium italic">
            "Acreditamos que grandes resultados nascem de uma visão clara. Mergulhamos
            no universo da sua marca para entender sua essência e desenhar estratégias
            precisas, que conectam, engajam e convertem com propósito. E você? Pronto
            para transformar sua marca?"
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
              aria-label="Conversar no WhatsApp com um estrategista"
            >
              <MessageCircle size={16} strokeWidth={2.4} />
              <span>Fale com um estrategista</span>
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </a>

            <a
              href="#servicos"
              className={btnSecondary}
              aria-label="Nossos serviços - vá para a seção de serviços"
            >
              <span>Nossos serviços</span>
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[520px] lg:max-w-[620px]">
          <div className="absolute -left-4 top-12 h-36 w-px bg-yellow-400/60 hidden sm:block" />
          <div className="absolute -right-6 bottom-16 h-28 w-28 border-r border-b border-yellow-400/40 hidden lg:block" />

          <div className="relative overflow-hidden rounded-t-[42px] md:rounded-t-[56px] border border-white/10 bg-[#111] shadow-2xl shadow-black">
            <img
              src={aboutImg}
              alt="Samara, a mente por trás da SM Company"
              className="h-[500px] md:h-[680px] w-full object-cover object-[50%_18%]"
              loading="lazy"
            />

            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-yellow-300/80 mb-2">
                Direção de marca
              </p>
              <p className="text-2xl md:text-4xl font-semibold uppercase leading-[0.95] max-w-xs">
                Estratégia com presença
              </p>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
};
