import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-booklet-mockup.jpg";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-hero min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 lg:left-20 w-32 h-32 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-4 lg:right-20 w-24 h-24 bg-accent rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Inicie sua jornada como{' '}
                <span className="bg-gradient-cta bg-clip-text text-transparent">
                  Maquiadora Profissional
                </span>{' '}
                com uma Apostila Personalizada que Impressiona suas Alunas
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed">
                Arquivos profissionais, editáveis e elegantes prontos para você usar 
                nos seus cursos de automaquiagem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="cta" 
                size="lg"
                className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 rounded-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Quero minha apostila personalizada agora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
              
              <Button 
                variant="elegant" 
                size="lg"
                className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 rounded-xl"
              >
                Ver o que está incluso
              </Button>
            </div>

            {/* Social proof indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8 pt-6 lg:pt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-accent rounded-full border-2 border-background"></div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+500 maquiadoras</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">4.9/5</span>
                <span className="text-sm text-muted-foreground">(127 avaliações)</span>
              </div>
            </div>
          </div>

          {/* Right column - Hero image */}
          <div className="relative animate-fade-in order-first lg:order-last" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Mockup profissional da apostila de curso de maquiagem mostrando design elegante em tablet, celular e materiais impressos"
                className="w-full h-auto rounded-2xl shadow-2xl max-w-md mx-auto lg:max-w-none"
              />
              {/* Floating elements */}
              <div className="absolute -top-3 lg:-top-6 -right-3 lg:-right-6 bg-gold text-primary-foreground px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg animate-float">
                ✨ Pronto para usar
              </div>
              <div className="absolute -bottom-2 lg:-bottom-4 -left-2 lg:-left-4 bg-accent text-accent-foreground px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                📱 Digital + Impresso
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};