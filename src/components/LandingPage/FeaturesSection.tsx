import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import gridImage from "@/assets/course-materials-grid.jpg";

const features = [
  {
    icon: "📘",
    title: "Apostila Completa Editável para suas Alunas",
    description: "Layout profissional com todas as técnicas de maquiagem, dicas e tutoriais passo a passo prontos para personalizar com sua marca."
  },
  {
    icon: "🎓",
    title: "Certificados Personalizados Editáveis",
    description: "Modelos de certificados lindos para premiar suas alunas ao concluir o curso, totalmente personalizáveis com suas informações."
  },
  {
    icon: "📑",
    title: "Modelos de Proposta Editáveis",
    description: "Formatos profissionais de proposta para apresentar seus cursos a potenciais clientes e estabelecer sua credibilidade."
  },
  {
    icon: "💻",
    title: "Versão Digital para Usar nas Aulas",
    description: "Materiais digitais interativos perfeitos para aulas online, apresentações e experiências de aprendizado modernas."
  },
  {
    icon: "✨",
    title: "Bônus: Guia de Como Apresentar seus Cursos",
    description: "Conteúdo bônus exclusivo com dicas de especialistas sobre apresentação de cursos, engajamento de alunas e construção de reputação."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Tudo que Você Precisa para{' '}
            <span className="bg-gradient-cta bg-clip-text text-transparent">
              Começar a Ensinar Hoje
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed px-4">
            Transforme sua paixão em um negócio profissional de ensino com nosso kit completo desenvolvido especificamente para maquiadoras.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Features list */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {features.map((feature, index) => (
              <Card key={index} className="p-4 lg:p-6 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body font-semibold text-base lg:text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Product showcase image */}
          <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <img 
              src={gridImage} 
              alt="Materiais completos do curso de maquiagem incluindo apostilas, certificados e modelos organizados de forma elegante"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            {/* Overlay badge */}
            <div className="absolute top-3 lg:top-6 right-3 lg:right-6 bg-gradient-cta text-primary-foreground px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-lg">
              <span className="font-semibold text-sm lg:text-base">Kit Completo</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 lg:mt-16">
          <Button 
            variant="hero" 
            size="lg"
            className="text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-6 rounded-xl"
          >
            Obter Meu Kit Completo de Ensino Agora
          </Button>
        </div>
      </div>
    </section>
  );
};