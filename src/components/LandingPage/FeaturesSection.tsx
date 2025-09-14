import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import gridImage from "@/assets/course-materials-grid.jpg";

const features = [
  {
    icon: "📘",
    title: "Complete Editable Booklet for Your Students",
    description: "Professional layout with all makeup techniques, tips, and step-by-step tutorials ready to customize with your branding."
  },
  {
    icon: "🎓",
    title: "Editable Personalized Certificates",
    description: "Beautiful certificate templates to reward your students upon course completion, fully customizable with your information."
  },
  {
    icon: "📑",
    title: "Editable Proposal Templates",
    description: "Professional proposal formats to present your courses to potential clients and establish your credibility."
  },
  {
    icon: "💻",
    title: "Digital Version to Use in Classes",
    description: "Interactive digital materials perfect for online classes, presentations, and modern learning experiences."
  },
  {
    icon: "✨",
    title: "Bonus: Guide on How to Present Your Courses",
    description: "Exclusive bonus content with expert tips on course presentation, student engagement, and building your reputation."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-cta bg-clip-text text-transparent">
              Start Teaching Today
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Transform your passion into a professional teaching business with our complete toolkit designed specifically for makeup artists.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features list */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Product showcase image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src={gridImage} 
              alt="Complete makeup course materials including booklets, certificates, and templates beautifully arranged"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            {/* Overlay badge */}
            <div className="absolute top-6 right-6 bg-gradient-cta text-primary-foreground px-6 py-3 rounded-full shadow-lg">
              <span className="font-semibold">Complete Kit</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-10 py-6 rounded-xl"
          >
            Get Your Complete Teaching Kit Now
          </Button>
        </div>
      </div>
    </section>
  );
};