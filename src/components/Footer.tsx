import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import buscaIcon from "@/assets/graphics/busca.png";
import casaIcon from "@/assets/graphics/casa.png";
import starIcon from "@/assets/graphics/star.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <h3 className="font-gothic text-3xl font-bold text-primary uppercase tracking-wide mb-4">
              Movimento Ler para Ser
            </h3>
            <p className="font-nunito text-background/80 mb-6 leading-relaxed">
              Democratizando o acesso à literatura e à arte, proporcionando experiências 
              enriquecedoras a crianças em situação de vulnerabilidade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm" className="border-black text-black hover:-translate-y-1 hover:bg-transparent hover:text-black hover:border-black transition-transform duration-200">
                <img src={buscaIcon} alt="O que fazemos" className="w-4 h-4 mr-2" />
                O que fazemos
              </Button>
              <Button variant="outline" size="sm" className="border-black text-black hover:-translate-y-1 hover:bg-transparent hover:text-black hover:border-black transition-transform duration-200">
                <img src={casaIcon} alt="Como ajudar" className="w-4 h-4 mr-2" />
                Como ajudar
              </Button>
              <Button variant="outline" size="sm" className="border-black text-black hover:-translate-y-1 hover:bg-transparent hover:text-black hover:border-black transition-transform duration-200">
                <img src={starIcon} alt="Quem somos" className="w-4 h-4 mr-2" />
                Quem somos
              </Button>
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="font-gothic text-xl font-bold text-primary uppercase tracking-wide mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3 font-nunito text-background/80">
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre o Movimento
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-primary transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#impacto" className="hover:text-primary transition-colors">
                  Nosso Impacto
                </a>
              </li>
              <li>
                <a href="#contribuir" className="hover:text-primary transition-colors">
                  Como Contribuir
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato e Redes */}
          <div>
            <h4 className="font-gothic text-xl font-bold text-primary uppercase tracking-wide mb-4">
              Redes Sociais
            </h4>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/movimentolerparaser/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-nunito text-background/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @movimentolerparaser
              </a>
              <a 
                href="mailto:movimelerparaser@gmail.com"
                className="flex items-center gap-3 font-nunito text-background/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                movimelerparaser@gmail.com
              </a>
            </div>
            
            <div className="mt-6">
              <Button variant="default" size="lg" className="w-full">
                Apoiar o Movimento
              </Button>
            </div>
          </div>
        </div>
        
        {/* Linha divisória */}
        <div className="border-t border-background/20 pt-8">
          <div className="text-center">
            <p className="font-script text-2xl text-accent mb-4">
              "Formar através da leitura. Transformar através da arte."
            </p>
            <p className="font-nunito text-background/60 text-sm">
              © {new Date().getFullYear()} Movimento Ler para Ser. Todos os direitos reservados.
            </p>
            <p className="font-nunito text-background/60 text-sm mt-2">
              Alinhado com a Agenda 2030 da ONU para o desenvolvimento sustentável.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};