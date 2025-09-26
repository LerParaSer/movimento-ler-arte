import checkIcon from "@/assets/graphics/check-icon.png";
import searchIcon from "@/assets/graphics/search-icon.png";
import chartIcon from "@/assets/graphics/chart-icon.png";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-gothic text-4xl lg:text-6xl font-bold text-black uppercase tracking-wide mb-8">
            Sobre o Movimento
          </h2>
          
          <div className="font-nunito text-lg lg:text-xl text-black leading-relaxed space-y-6">
            <p>
              O Movimento Ler para Ser nasceu para <span className="text-primary font-semibold">democratizar o acesso à literatura e à arte</span>, 
              proporcionando experiências enriquecedoras a crianças em situação de vulnerabilidade.
            </p>
            
            <p className="text-black font-medium text-xl lg:text-2xl">
              Nossa missão é clara: <span className="font-script text-accent text-4xl lg:text-5xl">"formar através da leitura e da arte"</span>, 
              sem assistencialismo, mas com foco no desenvolvimento humano, na criatividade 
              e no alinhamento com a Agenda 2030 da ONU.
            </p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <img src={checkIcon} alt="Nossa Missão" className="w-12 h-12" />
              </div>
              <h3 className="font-gothic text-xl font-bold text-black uppercase mb-3">
                Nossa Missão
              </h3>
              <p className="font-nunito text-black">
                Formar através da leitura e transformar através da arte
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <img src={searchIcon} alt="Nosso Foco" className="w-12 h-12" />
              </div>
              <h3 className="font-gothic text-xl font-bold text-black uppercase mb-3">
                Nosso Foco
              </h3>
              <p className="font-nunito text-black">
                Crianças em situação de vulnerabilidade social
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <img src={chartIcon} alt="Nosso Impacto" className="w-12 h-12" />
              </div>
              <h3 className="font-gothic text-xl font-bold text-black uppercase mb-3">
                Nosso Impacto
              </h3>
              <p className="font-nunito text-black">
                Desenvolvimento humano e criatividade sem assistencialismo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};