import React from 'react';
const CONTACT_PHONE = "5511958247301";
const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE}?text=Olá!%20Vi%20a%20seção%20Nossa%20Filosofia%20e%20gostaria%20de%20falar%20com%20um%20estrategista.`;

export const About = () => {
  const tags = ['CLAREZA', 'ESTRATÉGIA', 'FOCO'];

  // Classes base para evitar repetição de código (DRY - Don't Repeat Yourself)
  const btnBase = "px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-center w-full md:w-auto";
  const btnPrimary = `${btnBase} bg-white text-black hover:bg-zinc-200 shadow-xl`;
  const btnSecondary = `${btnBase} border border-white/10 text-white/60 hover:text-white hover:border-white/30`;

  // URLs
  const whatsappLink = WHATSAPP_URL;

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="bg-black text-white py-32 px-4 md:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center space-y-12">
        <div>
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
            className="flex flex-wrap gap-3 mb-12"
            aria-label="Valores da marca"
          >
            {tags.map(tag => (
              <li key={tag} className="">
                <span className="text-[9px] uppercase tracking-[0.3em] border border-yellow-500/40 px-6 py-2 rounded-full text-yellow-300/80 font-semibold">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-sm md:text-[16px] text-white/40 leading-relaxed mb-8 md:mb-14 max-w-lg font-medium italic">
            "Acreditamos que grandes resultados nascem de uma visão clara. Mergulhamos
            no universo da sua marca para entender sua essência e desenhar estratégias
            precisas, que conectam, engajam e convertem com propósito. E você? Pronto
            para transformar sua marca?"
          </p>

          {/* BOTÕES: CTAs distintos para melhorar PRUX */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <a
              href="#servicos"
              className={btnPrimary}
              aria-label="Nossos serviços - vá para a seção de serviços"
            >
              NOSSOS SERVIÇOS
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
              aria-label="Conversar no WhatsApp com um estrategista"
            >
              FALE COM UM ESTRATEGISTA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};