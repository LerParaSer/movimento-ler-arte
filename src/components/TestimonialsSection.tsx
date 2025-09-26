import { useEffect } from "react";

// Declaração de tipo para o Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export const TestimonialsSection = () => {
  useEffect(() => {
    // Carrega o script do Instagram se ainda não foi carregado
    if (!(window as any).instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Se o script já existe, processa os embeds
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  const testimonials = [
    {
      id: "C9ztxgNujnu",
      title: "Depoimento de Instituição Parceira"
    },
    {
      id: "C3fUJkULRgL", 
      title: "Impacto na Comunidade"
    },
    {
      id: "C3Po0pzLy_s",
      title: "Transformação através da Leitura"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl lg:text-6xl font-bold text-black uppercase tracking-wide mb-6">
            Depoimentos
          </h2>
          <p className="font-script text-4xl lg:text-5xl text-accent mb-8">
            "Veja o que instituições parceiras dizem sobre o impacto do movimento"
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 min-h-[600px] flex flex-col">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-gothic text-lg font-bold text-black uppercase mb-6">
                  {testimonial.title}
                </h3>
              </div>
              
              <div className="bg-secondary/20 rounded-lg p-4 flex-1 mb-6">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink={`https://www.instagram.com/p/${testimonial.id}/`}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: '99.375%'
                  }}
                >
                </blockquote>
              </div>
              
              <div className="text-center mt-auto">
                <p className="font-script text-accent italic text-2xl">
                  "O impacto é real e transformador"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="font-nunito text-black mb-6">
            Acompanhe mais depoimentos e histórias inspiradoras em nossas redes sociais
          </p>
          <a 
            href="https://www.instagram.com/movimentolerparaser/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-nunito text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            <span>📱</span>
            @movimentolerparaser
          </a>
        </div>
      </div>
    </section>
  );
};