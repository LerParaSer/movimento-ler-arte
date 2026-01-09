import checkIcon from "@/assets/graphics/check-icon.png";
import searchIcon from "@/assets/graphics/search-icon.png";
import chartIcon from "@/assets/graphics/chart-icon.png";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-gothic text-4xl lg:text-6xl font-bold text-foreground uppercase tracking-wide mb-8">
            Sobre o Movimento
          </h2>
          
          <div className="font-nunito text-lg lg:text-xl text-foreground leading-relaxed space-y-6">
            <p>
              Ler é mais do que decifrar palavras: é <span className="font-semibold">abrir janelas para dentro e para fora</span>, é encontrar-se e reconhecer o outro.
            </p>
            
            <p>
              O Movimento Ler para Ser nasce dessa convicção: de que <span className="font-semibold">um livro nas mãos de uma criança pode ser o início de um caminho</span>. Caminho que desperta a imaginação, alarga horizontes e ajuda a formar seres mais inteiros, mais curiosos, mais humanos.
            </p>

            <p>
              Nosso propósito é <span className="font-semibold">desenvolver o hábito da leitura</span> no maior número possível de crianças, oferecendo <span className="font-semibold">experiências sensoriais que unem literatura e arte</span>. Os livros ilustrados são cuidadosamente escolhidos com o intuito de envolver e provocar, estimulando a criatividade e o autoconhecimento.
            </p>

            <p>
              Mais do que um encontro isolado, o projeto é uma <span className="font-semibold">jornada contínua</span>. Ao longo de <span className="font-semibold">pelo menos quatro meses</span>, cada grupo de crianças percorre um caminho que integra mediação de leitura, oficinas artísticas e partilha.
            </p>

            <p>
              E porque acreditamos que a leitura não termina no instante da escuta, mas continua em cada memória e em cada gesto, ao final do encontro <span className="font-semibold">cada participante leva para casa o livro trabalhado</span>, podendo reler, reviver e compartilhar a experiência com quem desejar.
            </p>

            <p className="font-semibold text-xl lg:text-2xl">
              Movimento Ler para Ser: leitura que desperta e transforma.
            </p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <img src={checkIcon} alt="Nossa Missão" className="w-12 h-12" />
              </div>
              <h3 className="font-gothic text-xl font-bold text-foreground uppercase mb-3">
                Nossa Missão
              </h3>
              <p className="font-nunito text-foreground">
                Formar por meio da leitura e transformar por meio da arte
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <img src={searchIcon} alt="Nosso Foco" className="w-12 h-12" />
              </div>
              <h3 className="font-gothic text-xl font-bold text-foreground uppercase mb-3">
                Nosso Foco
              </h3>
              <p className="font-nunito text-foreground">
                Crianças em situação de vulnerabilidade social
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <img src={chartIcon} alt="Nosso Impacto" className="w-12 h-12" />
              </div>
              <h3 className="font-gothic text-xl font-bold text-foreground uppercase mb-3">
                Nosso Impacto
              </h3>
              <p className="font-nunito text-foreground">
                Desenvolvimento humano e criatividade sem assistencialismo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};