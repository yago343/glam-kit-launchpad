import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-cta relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-4 lg:left-10 w-32 lg:w-40 h-32 lg:h-40 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-4 lg:right-10 w-24 lg:w-32 h-24 lg:h-32 bg-accent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 lg:w-60 h-48 lg:h-60 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
          {/* Urgency header */}
          <div className="animate-fade-in">
            <div className="inline-block bg-destructive text-destructive-foreground px-4 lg:px-6 py-2 rounded-full font-semibold mb-4 lg:mb-6 text-sm lg:text-base">
              ⚠️ Tempo Limitado: 65% OFF termina em breve!
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-primary-foreground mb-4 lg:mb-6 leading-tight">
              Não perca tempo –{' '}
              <span className="block">
                comece seu curso de maquiagem com 
              </span>
              <span className="text-gold">
                materiais profissionais hoje!
              </span>
            </h2>
            
            <p className="text-base lg:text-xl text-primary-foreground/90 font-body leading-relaxed max-w-2xl mx-auto">
              Junte-se a centenas de maquiadoras bem-sucedidas que transformaram seu ensino 
              com nosso sistema profissional de apostilas. Suas alunas merecem os melhores materiais.
            </p>
          </div>

          {/* Main CTA */}
          <div className="animate-fade-in space-y-4 lg:space-y-6" style={{ animationDelay: '0.2s' }}>
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8 rounded-2xl bg-card text-foreground hover:bg-background hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group border-2 border-gold/30"
            >
              <span className="relative z-10 font-bold">
                Quero Minha Apostila Personalizada - Apenas R$ 127
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>

            {/* Secondary benefits */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-primary-foreground/80 text-sm lg:text-base">
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>Download Instantâneo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>Garantia de 7 Dias</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>Atualizações Vitalícias</span>
              </div>
            </div>
          </div>

          {/* Final urgency */}
          <div className="animate-fade-in pt-6 lg:pt-8" style={{ animationDelay: '0.4s' }}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-primary-foreground/20">
              <div className="space-y-3 lg:space-y-4">
                <h3 className="font-body text-xl lg:text-2xl font-bold text-primary-foreground">
                  🚀 Comece a Ensinar como uma Profissional Hoje
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed text-sm lg:text-base">
                  Pare de usar materiais genéricos que não representam sua expertise. 
                  Suas alunas esperam qualidade profissional, e você merece cobrar preços premium. 
                  Obtenha as ferramentas que vão te destacar da concorrência.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-3 lg:pt-4">
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-gold">500+</div>
                    <div className="text-xs lg:text-sm text-primary-foreground/80">Histórias de Sucesso</div>
                  </div>
                  <div className="w-px h-8 lg:h-12 bg-primary-foreground/20 hidden sm:block"></div>
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-gold">4.9★</div>
                    <div className="text-xs lg:text-sm text-primary-foreground/80">Avaliação</div>
                  </div>
                  <div className="w-px h-8 lg:h-12 bg-primary-foreground/20 hidden sm:block"></div>
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-gold">R$ 127</div>
                    <div className="text-xs lg:text-sm text-primary-foreground/80">Pagamento Único</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badge */}
          <div className="text-primary-foreground/60 text-xs lg:text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
            🔒 Checkout seguro • 💳 Todos os métodos de pagamento aceitos • 🛡️ Garantia de 7 dias
          </div>
        </div>
      </div>
    </section>
  );
};