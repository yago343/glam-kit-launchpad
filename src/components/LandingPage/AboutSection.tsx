import { Card } from "@/components/ui/card";
import authorImage from "@/assets/makeup-artist-professional.jpg";

export const AboutSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 lg:p-12 bg-gradient-hero border-accent/20 shadow-xl">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
              {/* Author image */}
              <div className="lg:col-span-1 text-center animate-fade-in order-1 lg:order-1">
                <div className="relative inline-block">
                  <img 
                    src={authorImage} 
                    alt="Maquiadora profissional e criadora de cursos sorrindo com confiança"
                    className="w-32 h-32 lg:w-48 lg:h-48 rounded-full shadow-2xl mx-auto object-cover border-4 border-gold/20"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-1 lg:-top-2 -right-1 lg:-right-2 bg-gold text-primary-foreground w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-lg lg:text-xl animate-float">
                    ✨
                  </div>
                </div>
                {/* Digital signature */}
                <div className="mt-4 lg:mt-6">
                  <div className="font-display text-xl lg:text-2xl text-primary font-bold">Caroline Lopes</div>
                  <div className="text-muted-foreground font-body text-sm lg:text-base">Maquiadora Profissional e Educadora</div>
                </div>
              </div>

              {/* About content */}
              <div className="lg:col-span-2 space-y-4 lg:space-y-6 animate-fade-in order-2 lg:order-2" style={{ animationDelay: '0.2s' }}>
                <div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3 lg:mb-4">
                    Sobre a{' '}
                    <span className="bg-gradient-cta bg-clip-text text-transparent">
                      Criadora
                    </span>
                  </h2>
                </div>

                <div className="space-y-3 lg:space-y-4 text-muted-foreground font-body leading-relaxed text-sm lg:text-base">
                  <p>
                    Com mais de 8 anos de experiência na indústria da maquiagem, transformei 
                    centenas de aspirantes a artistas em profissionais confiantes. Minha jornada começou 
                    como maquiadora freelancer, e rapidamente descobri minha paixão por ensinar 
                    e empoderar outras pessoas.
                  </p>
                  
                  <p>
                    Depois de anos criando materiais de curso do zero e vendo a dificuldade 
                    que outras artistas enfrentavam com apresentações não profissionais, decidi criar 
                    este sistema completo de apostilas. Queria que toda maquiadora tivesse acesso 
                    aos mesmos materiais de alta qualidade que me ajudaram a construir uma carreira de ensino bem-sucedida.
                  </p>
                  
                  <p>
                    Hoje, já ajudei mais de 500 maquiadoras a lançar seus próprios cursos bem-sucedidos, 
                    aumentar sua credibilidade e construir negócios prósperos. Esta apostila representa 
                    anos de refinamento e testes no mundo real com alunas e instrutoras reais.
                  </p>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-2 gap-3 lg:gap-4 pt-4 lg:pt-6 border-t border-accent/20">
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">Artistas Treinadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-primary">8+</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">Anos de Experiência</div>
                  </div>
                </div>

                {/* Signature */}
                <div className="pt-3 lg:pt-4">
                  <div className="font-display text-2xl lg:text-3xl text-primary italic">Caroline Lopes</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Fundadora e Educadora Principal</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};