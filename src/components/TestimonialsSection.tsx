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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl lg:text-6xl font-bold text-foreground uppercase tracking-wide mb-6">
            Depoimentos
          </h2>
          <p className="font-script text-2xl lg:text-3xl text-accent mb-8">
            "Veja o que instituições parceiras dizem sobre o impacto do movimento"
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-center mb-4">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-gothic text-lg font-bold text-foreground uppercase mb-4">
                  {testimonial.title}
                </h3>
              </div>
              
              <div className="bg-secondary/20 rounded-lg p-4 mb-4">
                <p className="font-nunito text-sm text-muted-foreground text-center">
                  Post do Instagram incorporado
                </p>
                <div className="mt-4 text-center">
                  <a 
                    href={`https://www.instagram.com/p/${testimonial.id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-nunito text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                  >
                    <span>📸</span>
                    Ver no Instagram
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <p className="font-script text-accent italic">
                  "O impacto é real e transformador"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="font-nunito text-muted-foreground mb-6">
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