import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-reading.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-gothic text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide leading-tight mb-6">
              Formar através da <span className="text-primary">leitura.</span> Transformar através da <span className="text-accent">arte.</span>
            </h1>
            
            <p className="font-nunito text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Um movimento que leva literatura e experiências culturais a crianças, 
              despertando imaginação, criatividade e novas possibilidades de vida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                👉 Quero apoiar essa transformação
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button variant="outline" size="xl">
                Saiba mais sobre nós
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Crianças lendo livros com alegria e imaginação"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-brand-yellow text-black font-script text-lg p-3 rounded-full shadow-lg animate-bounce">
              📚
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brand-pink text-white font-script text-lg p-3 rounded-full shadow-lg animate-bounce delay-1000">
              ✨
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
    </section>
  );
};