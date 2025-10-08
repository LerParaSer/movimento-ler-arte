import danieliPhoto from "@/assets/founders/danieli-rosa.jpg";
import melissaPhoto from "@/assets/founders/melissa-pomi.jpg";

export const FoundersSection = () => {
  return (
    <section id="quem-somos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl lg:text-6xl font-bold text-foreground uppercase tracking-wide mb-6">
            Quem Somos
          </h2>
          <p className="font-nunito text-xl text-foreground max-w-3xl mx-auto">
            Fundado por duas mulheres apaixonadas pela literatura e pela educação
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Danieli Rosa */}
          <div className="bg-secondary/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-6">
              <img 
                src={danieliPhoto} 
                alt="Danieli Rosa" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="font-gothic text-3xl font-bold text-foreground uppercase tracking-wide mb-2">
                Danieli Rosa
              </h3>
              <div className="font-nunito text-primary font-semibold mb-4">
                Escritora, mestre em crítica literária e doutoranda em literatura, arte e outras culturas
              </div>
            </div>
            
            <div className="space-y-4 font-nunito text-foreground">
              <p>
                Desde cedo, encontrou nos livros e na poesia a inspiração para transformar vidas. 
                Sua trajetória acadêmica e profissional é marcada pela paixão pela literatura 
                e pelo compromisso com a educação transformadora.
              </p>
              <div className="bg-background rounded-xl p-4 border-l-4 border-primary">
                <p className="font-script text-2xl text-primary italic">
                  "A literatura tem o poder de abrir mundos e transformar realidades"
                </p>
              </div>
            </div>
          </div>
          
          {/* Melissa Pomi */}
          <div className="bg-secondary/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-6">
              <img 
                src={melissaPhoto} 
                alt="Melissa Pomi" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover object-top"
              />
              <h3 className="font-gothic text-3xl font-bold text-foreground uppercase tracking-wide mb-2">
                Melissa Pomi
              </h3>
              <div className="font-nunito text-accent font-semibold mb-4">
                Educadora Física e Empreendedora
              </div>
            </div>
            
            <div className="space-y-4 font-nunito text-foreground">
              <p>
                Descobriu na literatura uma ferramenta poderosa ao acompanhar o desenvolvimento 
                dos próprios filhos. Hoje, atua para que mais crianças vivenciem essa mesma 
                transformação através da leitura e da arte.
              </p>
              <div className="bg-background rounded-xl p-4 border-l-4 border-accent">
                <p className="font-script text-2xl text-accent italic">
                  "Cada criança merece ter acesso ao poder transformador dos livros"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};