import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-booklet-mockup.jpg";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-hero min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Start your journey as a{' '}
                <span className="bg-gradient-cta bg-clip-text text-transparent">
                  Makeup Artist
                </span>{' '}
                with a Customized Booklet that Impresses Your Students
              </h1>
              
              <p className="text-xl text-muted-foreground font-body leading-relaxed">
                Professional, editable and elegant files ready for you to deliver 
                in your self-makeup courses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="lg"
                className="text-lg px-8 py-6 rounded-xl relative overflow-hidden group"
              >
                <span className="relative z-10">I want my customized booklet now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
              
              <Button 
                variant="elegant" 
                size="lg"
                className="text-lg px-8 py-6 rounded-xl"
              >
                See what's included
              </Button>
            </div>

            {/* Social proof indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-accent rounded-full border-2 border-background"></div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+500 makeup artists</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">4.9/5</span>
                <span className="text-sm text-muted-foreground">(127 reviews)</span>
              </div>
            </div>
          </div>

          {/* Right column - Hero image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional makeup course booklet mockup showing elegant design on tablet, phone and printed materials"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gold text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                ✨ Ready to use
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                📱 Digital + Print
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};