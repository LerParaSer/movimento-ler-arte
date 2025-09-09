export const MediaSection = () => {
  const interviews = [
    {
      title: "Danieli Rosa - Entrevista",
      description: "Conheça a história e a paixão por trás do movimento",
      url: "https://www.youtube.com/watch?v=aCtoy5Axp3A&t=159s",
      presenter: "Danieli Rosa"
    },
    {
      title: "Melissa Pomi - Entrevista", 
      description: "A descoberta do poder transformador da literatura",
      url: "https://www.youtube.com/watch?v=SVrfpMO14Yw",
      presenter: "Melissa Pomi"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl lg:text-6xl font-bold text-foreground uppercase tracking-wide mb-6">
            Na Mídia
          </h2>
          <p className="font-nunito text-xl text-muted-foreground mb-8">
            Entrevistas que mostram nossa história e impacto
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {interviews.map((interview, index) => (
            <div key={index} className="bg-secondary/20 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🎥</div>
                <h3 className="font-gothic text-2xl font-bold text-foreground uppercase tracking-wide mb-2">
                  {interview.title}
                </h3>
                <p className="font-nunito text-muted-foreground mb-4">
                  {interview.description}
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 mb-6">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">▶️</div>
                    <p className="font-nunito text-sm text-muted-foreground">
                      Vídeo do YouTube
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="font-nunito font-semibold text-foreground mb-2">
                    {interview.presenter}
                  </p>
                  <a 
                    href={interview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-nunito text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    <span>🔗</span>
                    Assistir no YouTube
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <p className="font-script text-accent italic text-sm">
                  "Conheça as pessoas por trás da transformação"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};