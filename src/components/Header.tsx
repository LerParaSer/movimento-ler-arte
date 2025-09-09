import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-gothic text-2xl font-bold text-primary uppercase tracking-wide">
          Movimento Ler para Ser
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#sobre" className="font-nunito text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#quem-somos" className="font-nunito text-foreground hover:text-primary transition-colors">
            Quem Somos
          </a>
          <a href="#impacto" className="font-nunito text-foreground hover:text-primary transition-colors">
            Impacto
          </a>
          <a href="#contribuir" className="font-nunito text-foreground hover:text-primary transition-colors">
            Como Contribuir
          </a>
          <Button variant="hero" size="sm">
            Apoiar Movimento
          </Button>
        </nav>
      </div>
    </header>
  );
};