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
              
              <div className="bg-secondary/20 rounded-lg p-8 flex-1 mb-6 flex flex-col items-center justify-center min-h-[450px]">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <h4 className="font-gothic text-xl font-bold text-black uppercase mb-4">
                    Ver no Instagram
                  </h4>
                  <p className="font-nunito text-black mb-6">
                    Clique para ver este depoimento completo no Instagram
                  </p>
                  <a 
                    href={`https://www.instagram.com/p/${testimonial.id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-nunito font-medium hover:bg-primary/90 transition-colors"
                  >
                    <span>📱</span>
                    Ver Post
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