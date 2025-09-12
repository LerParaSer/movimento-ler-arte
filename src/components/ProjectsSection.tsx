import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projeto1 from "@/assets/projects/projeto-1.jpg";
import projeto2 from "@/assets/projects/projeto-2.jpg";
import projeto3 from "@/assets/projects/projeto-3.jpg";
import projeto4 from "@/assets/projects/projeto-4.jpg";
import projeto5 from "@/assets/projects/projeto-5.jpg";
import projeto6 from "@/assets/projects/projeto-6.jpg";
import projeto7 from "@/assets/projects/projeto-7.jpg";
import projeto8 from "@/assets/projects/projeto-8.jpg";
import projeto9 from "@/assets/projects/projeto-9.jpg";
import projeto10 from "@/assets/projects/projeto-10.jpg";

export const ProjectsSection = () => {
  const projectsGroup1 = [
    {
      id: 1,
      image: projeto1,
      title: "Roda de Leitura"
    },
    {
      id: 2,
      image: projeto2,
      title: "Leitura Compartilhada"
    },
    {
      id: 3,
      image: projeto3,
      title: "Atividade em Grupo"
    },
    {
      id: 4,
      image: projeto4,
      title: "Círculo de Leitura"
    },
    {
      id: 5,
      image: projeto5,
      title: "Oficina Artística"
    }
  ];

  const projectsGroup2 = [
    {
      id: 6,
      image: projeto6,
      title: "Arte Colaborativa"
    },
    {
      id: 7,
      image: projeto7,
      title: "Momento de Alegria"
    },
    {
      id: 8,
      image: projeto8,
      title: "Resultado das Oficinas"
    },
    {
      id: 9,
      image: projeto9,
      title: "Atividade Criativa"
    },
    {
      id: 10,
      image: projeto10,
      title: "Arte em Desenvolvimento"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl lg:text-6xl font-bold text-foreground uppercase tracking-wide mb-6">
            Projetos Realizados
          </h2>
          <p className="font-script text-2xl lg:text-3xl text-accent mb-8">
            "Momentos que transformam vidas através da leitura e da arte"
          </p>
          <p className="font-nunito text-lg text-muted-foreground max-w-3xl mx-auto">
            Registros das nossas atividades nas escolas e instituições parceiras
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Primeiro Carrossel */}
          <div className="relative">
            <h3 className="font-gothic text-2xl font-bold text-foreground uppercase mb-6 text-center">
              Rodas de Leitura e Atividades
            </h3>
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent className="-ml-4">
                {projectsGroup1.map((project) => (
                  <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Segundo Carrossel */}
          <div className="relative">
            <h3 className="font-gothic text-2xl font-bold text-foreground uppercase mb-6 text-center">
              Oficinas Artísticas e Criatividade
            </h3>
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent className="-ml-4">
                {projectsGroup2.map((project) => (
                  <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="font-nunito text-muted-foreground mb-6">
            Quer fazer parte dessa transformação? Entre em contato conosco!
          </p>
          <div className="inline-flex gap-4">
            <a 
              href="https://linktr.ee/movimentolerparaser"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-lg font-nunito font-medium hover:bg-primary/90 transition-colors"
            >
              Participar do Movimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};