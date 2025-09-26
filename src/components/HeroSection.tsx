import { useState, useEffect } from "react";
import banner1 from "@/assets/hero/banner-1.jpg";
import banner2 from "@/assets/hero/banner-2.jpg";
import banner3 from "@/assets/hero/banner-3.jpg";
import banner4 from "@/assets/hero/banner-4.jpg";

const heroImages = [
  { src: banner1, alt: "Criatividade como ferramenta de educação" },
  { src: banner2, alt: "5 livros escolhidos com muito carinho" },
  { src: banner3, alt: "Levando histórias e experiências à crianças por meio da literatura e da arte" },
  { src: banner4, alt: "Ler para uma criança é plantar sementes de conhecimento e afeto" }
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
    <section className="h-screen relative overflow-hidden mt-24">
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
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-3 z-10">
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
    </section>
  );
};