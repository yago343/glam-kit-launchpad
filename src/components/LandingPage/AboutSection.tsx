import { Card } from "@/components/ui/card";
import authorImage from "@/assets/makeup-artist-professional.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 bg-gradient-hero border-accent/20 shadow-xl">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Author image */}
              <div className="lg:col-span-1 text-center animate-fade-in">
                <div className="relative inline-block">
                  <img 
                    src={authorImage} 
                    alt="Professional makeup artist and course creator smiling confidently"
                    className="w-48 h-48 rounded-full shadow-2xl mx-auto object-cover border-4 border-gold/20"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 bg-gold text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl animate-float">
                    ✨
                  </div>
                </div>
                {/* Digital signature */}
                <div className="mt-6">
                  <div className="font-display text-2xl text-primary font-bold">Caroline Lopes</div>
                  <div className="text-muted-foreground font-body">Professional Makeup Artist & Educator</div>
                </div>
              </div>

              {/* About content */}
              <div className="lg:col-span-2 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    About the{' '}
                    <span className="bg-gradient-cta bg-clip-text text-transparent">
                      Creator
                    </span>
                  </h2>
                </div>

                <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                  <p>
                    With over 8 years of experience in the makeup industry, I've transformed 
                    hundreds of aspiring artists into confident professionals. My journey began 
                    as a freelance makeup artist, and I quickly discovered my passion for teaching 
                    and empowering others.
                  </p>
                  
                  <p>
                    After years of creating course materials from scratch and seeing the struggle 
                    other artists faced with unprofessional presentations, I decided to create 
                    this comprehensive booklet system. I wanted every makeup artist to have access 
                    to the same high-quality materials that helped me build a successful teaching career.
                  </p>
                  
                  <p>
                    Today, I've helped over 500 makeup artists launch their own successful courses, 
                    increase their credibility, and build thriving businesses. This booklet represents 
                    years of refinement and real-world testing with actual students and instructors.
                  </p>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-accent/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Artists Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">8+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>

                {/* Signature */}
                <div className="pt-4">
                  <div className="font-display text-3xl text-primary italic">Caroline Lopes</div>
                  <div className="text-sm text-muted-foreground">Founder & Lead Educator</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};