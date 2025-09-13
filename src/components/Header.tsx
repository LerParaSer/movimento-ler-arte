import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoMovimento from "@/assets/logo-movimento.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#sobre", label: "Sobre" },
    { href: "#quem-somos", label: "Quem Somos" },
    { href: "#projetos", label: "Projetos" },
    { href: "#impacto", label: "Nosso Impacto" },
    { href: "#contribuir", label: "Como Ajudar" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoMovimento} 
              alt="Movimento Ler para Ser" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-gothic text-xl font-bold text-primary uppercase tracking-wide">
                Movimento Ler para Ser
              </h1>
              <p className="font-script text-sm text-accent -mt-1">
                "Formar através da leitura"
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="font-nunito text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <Button 
              variant="default" 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => window.open('mailto:movimelerparaser@gmail.com', '_blank')}
            >
              💌 Apoiar Movimento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="font-nunito text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white font-medium w-fit mt-4"
                onClick={() => {
                  window.open('mailto:movimelerparaser@gmail.com', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                💌 Apoiar Movimento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};