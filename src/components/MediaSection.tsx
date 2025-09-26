import emailIcon from "@/assets/graphics/email.png";

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
    <section className="py-20" style={{backgroundColor: '#F4E9D5'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl lg:text-6xl font-bold text-black uppercase tracking-wide mb-6">
            Na Mídia
          </h2>
          <p className="font-nunito text-xl text-black mb-8">
            Entrevistas que mostram nossa história e impacto
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {interviews.map((interview, index) => (
            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <img src={emailIcon} alt="Entrevista" className="w-12 h-12" />
                </div>
                <h3 className="font-gothic text-2xl font-bold text-black uppercase tracking-wide mb-2">
                  {interview.title}
                </h3>
                <p className="font-nunito text-black mb-4">
                  {interview.description}
                </p>
              </div>
              
              <div className="rounded-lg p-6 mb-6" style={{backgroundColor: '#F4E9D5'}}>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    src={interview.url.replace('watch?v=', 'embed/').replace('&t=159s', '?start=159')}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={interview.title}
                  />
                </div>
                
                <div className="text-center">
                  <p className="font-nunito font-semibold text-black mb-2">
                    {interview.presenter}
                  </p>
                  <a 
                    href={interview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-nunito text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    Assistir no YouTube
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <p className="font-script text-accent italic text-2xl">
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