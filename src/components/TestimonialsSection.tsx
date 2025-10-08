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
            <div key={testimonial.id} className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <iframe
                src={`https://www.instagram.com/p/${testimonial.id}/embed/`}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
                title={testimonial.title}
                className="w-full"
              />
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