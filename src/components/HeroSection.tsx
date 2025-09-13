import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import hero1 from "@/assets/hero/hero-1.jpg";
import hero2 from "@/assets/hero/hero-2.jpg";
import hero3 from "@/assets/hero/hero-3.jpg";
import hero4 from "@/assets/hero/hero-4.jpg";
import hero5 from "@/assets/hero/hero-5.jpg";

const heroImages = [
  { src: hero1, alt: "Crianças mostrando orgulhosamente seus livros" },
  { src: hero2, alt: "Atividade de contação de histórias em roda" },
  { src: hero3, alt: "Brincadeiras e atividades lúdicas educativas" },
  { src: hero4, alt: "Oficina de arte e criatividade para crianças" },
  { src: hero5, alt: "Momento de concentração e aprendizado coletivo" }
];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[95vh] relative overflow-hidden flex items-center justify-center">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="font-gothic text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase tracking-wide leading-tight mb-6 drop-shadow-2xl">
          Formar através da <span className="text-primary">leitura.</span><br />
          Transformar através da <span className="text-accent">arte.</span>
        </h1>
        
        <p className="font-nunito text-lg lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
          Um movimento que leva literatura e experiências culturais a crianças, 
          despertando imaginação, criatividade e novas possibilidades de vida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            variant="hero" 
            size="lg" 
            className="group text-lg px-8 py-4"
            onClick={() => window.open('https://linktr.ee/movimentolerparaser', '_blank')}
          >
            👉 Quero apoiar essa transformação
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20"
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Saiba mais sobre nós
          </Button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-3 mb-8">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white/80 text-sm mb-2 animate-pulse">Descubra mais</p>
          <ChevronDown 
            className="w-8 h-8 text-white/80 animate-bounce cursor-pointer mx-auto" 
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};