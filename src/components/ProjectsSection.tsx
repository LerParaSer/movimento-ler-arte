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
  const projects = [
    {
      id: 1,
      image: projeto1,
      title: "Roda de Leitura",
      description: "Crianças participando de roda de leitura com livros educativos"
    },
    {
      id: 2,
      image: projeto2,
      title: "Leitura Compartilhada",
      description: "Momento de leitura compartilhada entre voluntária e criança"
    },
    {
      id: 3,
      image: projeto3,
      title: "Atividade em Grupo",
      description: "Crianças reunidas em atividade de leitura coletiva"
    },
    {
      id: 4,
      image: projeto4,
      title: "Círculo de Leitura",
      description: "Participantes em círculo durante atividade de leitura"
    },
    {
      id: 5,
      image: projeto5,
      title: "Oficina Artística",
      description: "Crianças desenvolvendo atividades artísticas com tintas"
    },
    {
      id: 6,
      image: projeto6,
      title: "Arte Colaborativa",
      description: "Oficina de arte com participação de voluntárias e crianças"
    },
    {
      id: 7,
      image: projeto7,
      title: "Momento de Alegria",
      description: "Criança exibindo seu desenho com orgulho e alegria"
    },
    {
      id: 8,
      image: projeto8,
      title: "Resultado das Oficinas",
      description: "Apresentação dos trabalhos artísticos desenvolvidos"
    },
    {
      id: 9,
      image: projeto9,
      title: "Atividade Criativa",
      description: "Crianças em oficina de arte e pintura coletiva"
    },
    {
      id: 10,
      image: projeto10,
      title: "Arte em Desenvolvimento",
      description: "Momento de concentração durante atividade artística"
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
            Confira alguns dos nossos projetos em ação nas escolas e instituições parceiras, 
            onde levamos literatura, arte e muito carinho para as crianças.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-gothic text-lg font-bold text-foreground uppercase mb-2">
                  {project.title}
                </h3>
                <p className="font-nunito text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
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