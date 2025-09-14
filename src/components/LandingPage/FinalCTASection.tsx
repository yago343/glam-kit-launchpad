import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-cta relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Urgency header */}
          <div className="animate-fade-in">
            <div className="inline-block bg-destructive text-destructive-foreground px-6 py-2 rounded-full font-semibold mb-6">
              ⚠️ Limited Time: 70% OFF ends soon!
            </div>
            
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Don't waste time –{' '}
              <span className="block">
                start your makeup course with 
              </span>
              <span className="text-gold">
                professional materials today!
              </span>
            </h2>
            
            <p className="text-xl text-primary-foreground/90 font-body leading-relaxed max-w-2xl mx-auto">
              Join hundreds of successful makeup artists who transformed their teaching 
              with our professional booklet system. Your students deserve the best materials.
            </p>
          </div>

          {/* Main CTA */}
          <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.2s' }}>
            <Button 
              variant="hero" 
              size="lg"
              className="text-xl px-12 py-8 rounded-2xl bg-card text-foreground hover:bg-background hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group border-2 border-gold/30"
            >
              <span className="relative z-10 font-bold">
                Get My Customized Booklet Now - Only $47
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>

            {/* Secondary benefits */}
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>7-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>Lifetime Updates</span>
              </div>
            </div>
          </div>

          {/* Final urgency */}
          <div className="animate-fade-in pt-8" style={{ animationDelay: '0.4s' }}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <div className="space-y-4">
                <h3 className="font-body text-2xl font-bold text-primary-foreground">
                  🚀 Start Teaching Like a Pro Today
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Stop using generic materials that don't represent your expertise. 
                  Your students expect professional quality, and you deserve to charge premium prices. 
                  Get the tools that will set you apart from the competition.
                </p>
                
                <div className="flex justify-center items-center gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">500+</div>
                    <div className="text-sm text-primary-foreground/80">Success Stories</div>
                  </div>
                  <div className="w-px h-12 bg-primary-foreground/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">4.9★</div>
                    <div className="text-sm text-primary-foreground/80">Rating</div>
                  </div>
                  <div className="w-px h-12 bg-primary-foreground/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">$47</div>
                    <div className="text-sm text-primary-foreground/80">One-Time Payment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badge */}
          <div className="text-primary-foreground/60 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
            🔒 Secure checkout • 💳 All payment methods accepted • 🛡️ 7-day money-back guarantee
          </div>
        </div>
      </div>
    </section>
  );
};