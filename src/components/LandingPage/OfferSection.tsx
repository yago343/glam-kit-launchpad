import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import courseImage from "@/assets/course-materials-grid.jpg";

export const OfferSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 lg:mb-12 animate-fade-in">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-3 lg:mb-4">
              Sua{' '}
              <span className="bg-gradient-cta bg-clip-text text-transparent">
                Apostila Personalizada para Maquiadora
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground font-body">
              Tudo que você precisa para começar a ensinar profissionalmente hoje
            </p>
          </div>

          {/* Product showcase card */}
          <Card className="p-6 lg:p-12 bg-card/80 backdrop-blur-sm border-accent/30 shadow-2xl animate-fade-in relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-cta opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold opacity-20 rounded-full blur-2xl"></div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
              {/* Product image */}
              <div className="relative order-1 lg:order-1">
                <img 
                  src={courseImage} 
                  alt="Pacote completo do curso de maquiagem incluindo apostila, certificado e modelos de proposta"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                {/* Badge */}
                <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 bg-success text-success-foreground px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-bold shadow-lg animate-float">
                  🔥 Mais Vendido
                </div>
              </div>

              {/* Offer details */}
              <div className="space-y-6 lg:space-y-8 order-2 lg:order-2">
                {/* What's included */}
                <div className="space-y-3 lg:space-y-4">
                  <h3 className="font-body text-xl lg:text-2xl font-semibold text-foreground mb-3 lg:mb-4">
                    O que está incluído:
                  </h3>
                  <div className="space-y-2 lg:space-y-3">
                    {[
                      "📘 Apostila Completa Editável (50+ páginas)",
                      "🎓 Modelos de Certificados Profissionais",
                      "📑 Modelos de Proposta de Curso", 
                      "💻 Arquivos Prontos para Digital e Impressão",
                      "✨ Bônus: Guia de Ensino e Dicas",
                      "🎯 Atualizações Vitalícias e Suporte"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-muted-foreground text-sm lg:text-base">
                        <span className="text-success">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-accent p-4 lg:p-6 rounded-xl border border-accent/20">
                  <div className="text-center space-y-3 lg:space-y-4">
                    <div>
                      <span className="text-sm text-muted-foreground line-through">Normal: R$ 347</span>
                      <div className="text-3xl lg:text-4xl font-bold text-foreground">
                        Apenas R$ 127
                      </div>
                      <span className="text-muted-foreground text-sm lg:text-base">Oferta por tempo limitado</span>
                    </div>

                    <Button 
                      variant="cta" 
                      size="lg"
                      className="w-full text-base lg:text-lg py-4 lg:py-6 rounded-xl relative overflow-hidden group"
                    >
                      <span className="relative z-10">Quero Minha Apostila Personalizada Agora</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </Button>

                    {/* Guarantee */}
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <span className="text-success">🛡️</span>
                      <span>Garantia de 7 Dias ou Seu Dinheiro de Volta</span>
                    </div>
                  </div>
                </div>

                {/* Urgency elements */}
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 lg:p-4">
                  <div className="flex items-center gap-2 text-destructive font-semibold text-sm lg:text-base">
                    <span>⚠️</span>
                    <span>Tempo Limitado: 65% OFF termina em 48 horas!</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Trust signals */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 lg:mt-12">
            {[
              { icon: "💳", text: "Pagamento Seguro" },
              { icon: "📧", text: "Download Instantâneo" },
              { icon: "🔄", text: "Atualizações Vitalícias" },
              { icon: "💬", text: "Suporte 24/7" }
            ].map((signal, index) => (
              <div key={index} className="text-center p-3 lg:p-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-xl lg:text-2xl mb-2">{signal.icon}</div>
                <div className="text-xs lg:text-sm text-muted-foreground font-body">{signal.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};