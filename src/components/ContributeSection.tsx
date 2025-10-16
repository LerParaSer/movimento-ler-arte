import { Button } from "@/components/ui/button";
import iconVoluntario from "@/assets/graphics/icon-voluntario.png";
import iconDoacoes from "@/assets/graphics/icon-doacoes.png";
import iconParcerias from "@/assets/graphics/icon-parcerias.png";
import iconParcerias2 from "@/assets/graphics/icon-parcerias-2.png";
import iconAmigos from "@/assets/graphics/icon-amigos-movimento.png";

export const ContributeSection = () => {
  return (
    <section id="contribuir" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl lg:text-6xl font-bold text-foreground uppercase tracking-wide mb-6">
            Como Contribuir
          </h2>
          <p className="font-script text-4xl lg:text-5xl text-foreground mb-8">
            "Você pode fazer parte dessa transformação!"
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center border border-primary/20 hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <img src={iconVoluntario} alt="Voluntariado" className="w-16 h-16" />
            </div>
            <h3 className="font-gothic text-2xl font-bold text-foreground uppercase tracking-wide mb-4">
              Voluntariado
            </h3>
            <p className="font-nunito text-foreground mb-6">
              Participe das rodas de leitura e oficinas. Sua presença e energia fazem toda a diferença 
              na vida das crianças.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://linktr.ee/movimentolerparaser', '_blank')}
            >
              Quero ser voluntário
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 text-center border border-accent/20 hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <img src={iconDoacoes} alt="Doações de livros" className="w-16 h-16" />
            </div>
            <h3 className="font-gothic text-2xl font-bold text-foreground uppercase tracking-wide mb-4">
              Doações
            </h3>
            <p className="font-nunito text-foreground mb-6">
              Contribua com livros novos ou usados. Cada livro doado pode transformar a vida de uma criança.
            </p>
            <Button 
              variant="accent" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://linktr.ee/movimentolerparaser', '_blank')}
            >
              Doar livros
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 rounded-2xl p-8 text-center border border-brand-blue/20 hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <img src={iconParcerias} alt="Parcerias" className="w-16 h-16" />
            </div>
            <h3 className="font-gothic text-2xl font-bold text-foreground uppercase tracking-wide mb-4">
              Parcerias
            </h3>
            <p className="font-nunito text-foreground mb-6">
              Sua empresa pode apoiar campanhas e projetos sociais. Juntos, amplificamos o impacto.
            </p>
            <Button 
              variant="blue" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://linktr.ee/movimentolerparaser', '_blank')}
            >
              Fazer parceria
            </Button>
          </div>
        </div>
        
        {/* Call to Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-secondary/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 min-h-[340px] flex flex-col">
            <div className="flex justify-center mb-6">
              <img src={iconParcerias2} alt="Parcerias" className="w-16 h-16" />
            </div>
            <h4 className="font-gothic text-xl font-bold text-foreground uppercase mb-4">
              Para Instituições e Parcerias
            </h4>
            <p className="font-nunito text-foreground mb-6 flex-grow">
              Preencha nosso formulário e vamos conversar sobre como podemos trabalhar juntos.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdL8NF3Ybtf27818awVqBR_8xILH7i32Ww8TEbAYpUEyn_Z3Q/viewform', '_blank')}
            >
              Acessar Formulário
            </Button>
          </div>
          
          <div className="bg-secondary/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 min-h-[340px] flex flex-col">
            <div className="flex justify-center mb-6">
              <img src={iconAmigos} alt="Amigos do Movimento" className="w-16 h-16" />
            </div>
            <h4 className="font-gothic text-xl font-bold text-foreground uppercase mb-4">
              Amigos do Movimento
            </h4>
            <p className="font-nunito text-foreground mb-6 flex-grow">
              Junte-se ao nosso grupo no WhatsApp e fique por dentro de todas as novidades.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://linktr.ee/movimentolerparaser?fbclid=PAZXh0bgNhZW0CMTEAAafkQWepa2_cXa_FZre7jhEUDQF3AZJJyGJq6qSqLwaKlX0U7lNu_RqjyWA4fQ_aem_--k-9tBLpiY6Tzzuq86yIg', '_blank')}
            >
              Entrar no grupo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};