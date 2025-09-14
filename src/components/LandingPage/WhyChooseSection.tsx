import { Card } from "@/components/ui/card";
import beforeAfterImage from "@/assets/before-after-mockup.jpg";

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Before/After visual */}
          <div className="relative animate-fade-in">
            <img 
              src={beforeAfterImage} 
              alt="Comparison showing transformation from generic document to professional makeup course booklet"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ❌ Generic
            </div>
            <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ✅ Professional
            </div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why This{' '}
                <span className="bg-gradient-cta bg-clip-text text-transparent">
                  Booklet?
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground font-body leading-relaxed mb-8">
                This isn't just a booklet – it's your presentation card as a professional. 
                With an elegant, organized, and customizable layout, you will gain credibility 
                and deliver an unforgettable experience for your students.
              </p>
            </div>

            {/* Benefits cards */}
            <div className="space-y-4">
              {[
                {
                  title: "Instant Credibility",
                  description: "Professional materials that establish you as an expert in your field",
                  icon: "🏆"
                },
                {
                  title: "Save 100+ Hours",
                  description: "No need to create materials from scratch - everything is ready to customize",
                  icon: "⏰"
                },
                {
                  title: "Student Engagement",
                  description: "Beautiful, organized content that keeps students engaged and motivated",
                  icon: "💫"
                },
                {
                  title: "Higher Course Value",
                  description: "Premium materials allow you to charge premium prices for your courses",
                  icon: "💰"
                }
              ].map((benefit, index) => (
                <Card key={index} className="p-4 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
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