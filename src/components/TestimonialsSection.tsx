export const TestimonialsSection = () => {

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
          <h2 className="font-gothic text-4xl lg:text-6xl font-bold text-foreground uppercase tracking-wide mb-6">
            Depoimentos
          </h2>
          <p className="font-script text-4xl lg:text-5xl text-foreground mb-8">
            "Veja o que instituições parceiras dizem sobre o impacto do movimento"
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 min-h-[600px] flex flex-col">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-gothic text-lg font-bold text-foreground uppercase mb-6">
                  {testimonial.title}
                </h3>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-8 flex-1 mb-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4">📸</div>
                  <h4 className="font-gothic text-xl font-bold uppercase mb-4">
                    {testimonial.title}
                  </h4>
                  <p className="font-nunito mb-6 opacity-90">
                    Assista ao depoimento completo no Instagram
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                        <span className="text-sm">📱</span>
                      </div>
                      <span className="font-semibold">@movimentolerparaser</span>
                    </div>
                    <div className="text-sm opacity-80">
                      Post ID: {testimonial.id}
                    </div>
                  </div>
                  <a 
                    href={`https://www.instagram.com/p/${testimonial.id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-nunito font-semibold hover:bg-white/90 transition-colors"
                  >
                    <span>▶️</span>
                    Ver Depoimento
                  </a>
                </div>
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
          <p className="font-nunito text-foreground mb-6">
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