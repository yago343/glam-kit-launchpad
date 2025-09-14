import { Card } from "@/components/ui/card";
import beforeAfterImage from "@/assets/before-after-mockup.jpg";

export const WhyChooseSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column - Before/After visual */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <img 
              src={beforeAfterImage} 
              alt="Comparação mostrando transformação de documento genérico para apostila profissional de curso de maquiagem"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            {/* Decorative elements */}
            <div className="absolute -top-2 lg:-top-4 -left-2 lg:-left-4 bg-destructive text-destructive-foreground px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg">
              ❌ Genérico
            </div>
            <div className="absolute -bottom-2 lg:-bottom-4 -right-2 lg:-right-4 bg-success text-success-foreground px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg">
              ✅ Profissional
            </div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
                Por que Esta{' '}
                <span className="bg-gradient-cta bg-clip-text text-transparent">
                  Apostila?
                </span>
              </h2>
              
              <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed mb-6 lg:mb-8">
                Isso não é apenas uma apostila – é seu cartão de visita como profissional. 
                Com um layout elegante, organizado e personalizável, você ganhará credibilidade 
                e proporcionará uma experiência inesquecível para suas alunas.
              </p>
            </div>

            {/* Benefits cards */}
            <div className="space-y-3 lg:space-y-4">
              {[
                {
                  title: "Credibilidade Instantânea",
                  description: "Materiais profissionais que estabelecem você como especialista na área",
                  icon: "🏆"
                },
                {
                  title: "Economize +100 Horas",
                  description: "Não precisa criar materiais do zero - tudo está pronto para personalizar",
                  icon: "⏰"
                },
                {
                  title: "Engajamento das Alunas",
                  description: "Conteúdo lindo e organizado que mantém as alunas engajadas e motivadas",
                  icon: "💫"
                },
                {
                  title: "Maior Valor do Curso",
                  description: "Materiais premium permitem cobrar preços premium pelos seus cursos",
                  icon: "💰"
                }
              ].map((benefit, index) => (
                <Card key={index} className="p-3 lg:p-4 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 group">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-body font-semibold text-sm lg:text-base text-foreground group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-xs lg:text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};