import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Professional Makeup Artist",
    content: "This booklet transformed my teaching! My students love the professional materials, and I've been able to charge 40% more for my courses. The quality is outstanding!",
    rating: 5,
    image: "👩🏻‍💼"
  },
  {
    name: "Ana Rodriguez",
    role: "Beauty Academy Owner",
    content: "Finally, materials that match the quality of my expertise! The certificates and proposals helped me establish credibility with corporate clients. Highly recommend!",
    rating: 5,
    image: "👩🏽‍🎨"
  },
  {
    name: "Jessica Chen",
    role: "Freelance Makeup Artist",
    content: "I was spending hours creating course materials. This booklet saved me so much time and looks incredibly professional. My students are always impressed!",
    rating: 5,
    image: "👩🏻‍💻"
  },
  {
    name: "Sofia Oliveira",
    role: "Makeup Instructor",
    content: "The best investment for my teaching career! The editable templates make it so easy to customize for different courses. Professional results every time.",
    rating: 5,
    image: "👩🏽‍🏫"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Already transforming classes for{' '}
            <span className="bg-gradient-cta bg-clip-text text-transparent">
              hundreds of makeup artists
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-hero border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl group animate-fade-in relative overflow-hidden"
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
                <p className="text-muted-foreground leading-relaxed mb-6 italic font-body">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="flex flex-wrap justify-center gap-12 mt-16 pt-16 border-t border-border">
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-foreground mb-2">500+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-foreground mb-2">4.9★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-foreground mb-2">127</div>
            <div className="text-muted-foreground">Reviews</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-foreground mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};