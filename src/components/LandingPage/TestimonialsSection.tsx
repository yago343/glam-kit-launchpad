import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Maquiadora Profissional",
    content: "Esta apostila transformou meu ensino! Minhas alunas adoram os materiais profissionais, e consegui aumentar o valor dos meus cursos em 40%. A qualidade é excepcional!",
    rating: 5,
    image: "👩🏻‍💼"
  },
  {
    name: "Ana Rodriguez",
    role: "Proprietária de Academia de Beleza",
    content: "Finalmente, materiais que combinam com a qualidade da minha expertise! Os certificados e propostas me ajudaram a estabelecer credibilidade com clientes corporativos. Super recomendo!",
    rating: 5,
    image: "👩🏽‍🎨"
  },
  {
    name: "Jessica Chen",
    role: "Maquiadora Freelancer",
    content: "Eu passava horas criando materiais para cursos. Esta apostila me poupou muito tempo e tem aparência incrivelmente profissional. Minhas alunas ficam sempre impressionadas!",
    rating: 5,
    image: "👩🏻‍💻"
  },
  {
    name: "Sofia Oliveira",
    role: "Instrutora de Maquiagem",
    content: "O melhor investimento da minha carreira de ensino! Os modelos editáveis facilitam muito a personalização para diferentes cursos. Resultados profissionais sempre.",
    rating: 5,
    image: "👩🏽‍🏫"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Já transformando aulas de{' '}
            <span className="bg-gradient-cta bg-clip-text text-transparent">
              centenas de maquiadoras
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 lg:p-8 bg-gradient-hero border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl group animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-cta opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative z-10">
                {/* Stars rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">⭐</span>
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic font-body text-sm lg:text-base">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm lg:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mt-12 lg:mt-16 pt-12 lg:pt-16 border-t border-border">
          <div className="text-center animate-fade-in">
            <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">500+</div>
            <div className="text-muted-foreground text-sm lg:text-base">Alunas Felizes</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">4.9★</div>
            <div className="text-muted-foreground text-sm lg:text-base">Nota Média</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">127</div>
            <div className="text-muted-foreground text-sm lg:text-base">Avaliações</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">98%</div>
            <div className="text-muted-foreground text-sm lg:text-base">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};