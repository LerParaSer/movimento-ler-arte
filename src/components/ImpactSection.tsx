import { StatCard } from "@/components/ui/stat-card";
import { BookOpen, Users, School, Heart, UserCheck, Calendar } from "lucide-react";
import childReadingIcon from "@/assets/graphics/child-reading.png";
import starIcon from "@/assets/graphics/star.png";
import houseIcon from "@/assets/graphics/house.png";
import booksIcon from "@/assets/graphics/books.png";
import volunteerHandsIcon from "@/assets/graphics/volunteer-hands.png";

export const ImpactSection = () => {
  return (
    <section id="impacto" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl lg:text-6xl font-bold text-foreground uppercase tracking-wide mb-6">
            Nossas Atividades e Impacto
          </h2>
          <p className="font-nunito text-xl text-muted-foreground max-w-4xl mx-auto">
            O Movimento Ler para Ser atua em escolas e instituições com atividades que 
            despertam o interesse pela leitura e estimulam a expressão artística
          </p>
        </div>
        
        {/* Atividades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-background rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <img src={childReadingIcon} alt="Rodas de leitura" className="w-12 h-12" />
            </div>
            <h3 className="font-gothic text-xl font-bold text-foreground uppercase mb-3">
              Rodas de Leitura
            </h3>
            <p className="font-nunito text-muted-foreground text-sm">
              Histórias que convidam à reflexão e ao desenvolvimento socioemocional
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <img src={starIcon} alt="Oficinas artísticas" className="w-12 h-12" />
            </div>
            <h3 className="font-gothic text-xl font-bold text-foreground uppercase mb-3">
              Oficinas Artísticas
            </h3>
            <p className="font-nunito text-muted-foreground text-sm">
              Produção criativa de cartões-postais, desenhos e ilustrações
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <img src={booksIcon} alt="Diversidade de títulos" className="w-12 h-12" />
            </div>
            <h3 className="font-gothic text-xl font-bold text-foreground uppercase mb-3">
              Diversidade de Títulos
            </h3>
            <p className="font-nunito text-muted-foreground text-sm">
              Livros novos e usados para escolha e troca entre crianças
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <img src={volunteerHandsIcon} alt="Campanhas de arrecadação" className="w-12 h-12" />
            </div>
            <h3 className="font-gothic text-xl font-bold text-foreground uppercase mb-3">
              Campanhas de Arrecadação
            </h3>
            <p className="font-nunito text-muted-foreground text-sm">
              Mobilização de livros em parceria com organizações e livrarias
            </p>
          </div>
        </div>
        
        {/* Resultados */}
        <div className="text-center mb-12">
          <h3 className="font-gothic text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide mb-4">
            Resultados do 1º Ciclo
          </h3>
          <p className="font-nunito text-lg text-muted-foreground mb-2">
            (desde Agosto/23)
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          <StatCard
            icon={<Calendar className="w-8 h-8" />}
            number="+190"
            description="Encontros realizados"
            color="green"
          />
          <StatCard
            icon={<Users className="w-8 h-8" />}
            number="+440"
            description="Presenças registradas"
            color="purple"
          />
          <StatCard
            icon={<School className="w-8 h-8" />}
            number="8"
            description="Instituições contempladas"
            color="blue"
          />
          <StatCard
            icon={<BookOpen className="w-8 h-8" />}
            number="+60"
            description="Livros por instituição"
            color="yellow"
          />
          <StatCard
            icon={<UserCheck className="w-8 h-8" />}
            number="+190"
            description="Participações voluntárias"
            color="pink"
          />
          <StatCard
            icon={<Heart className="w-8 h-8" />}
            number="100%"
            description="Amor pela leitura"
            color="orange"
          />
        </div>
      </div>
    </section>
  );
};