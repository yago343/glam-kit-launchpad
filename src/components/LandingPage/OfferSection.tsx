import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import courseImage from "@/assets/course-materials-grid.jpg";

export const OfferSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Your{' '}
              <span className="bg-gradient-cta bg-clip-text text-transparent">
                Customized Makeup Artist Booklet
              </span>
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Everything you need to start teaching professionally today
            </p>
          </div>

          {/* Product showcase card */}
          <Card className="p-8 lg:p-12 bg-card/80 backdrop-blur-sm border-accent/30 shadow-2xl animate-fade-in relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-cta opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold opacity-20 rounded-full blur-2xl"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Product image */}
              <div className="relative">
                <img 
                  src={courseImage} 
                  alt="Complete makeup course package including booklet, certificate and proposal templates"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-float">
                  🔥 Best Seller
                </div>
              </div>

              {/* Offer details */}
              <div className="space-y-8">
                {/* What's included */}
                <div className="space-y-4">
                  <h3 className="font-body text-2xl font-semibold text-foreground mb-4">
                    What's included:
                  </h3>
                  <div className="space-y-3">
                    {[
                      "📘 Complete Editable Booklet (50+ pages)",
                      "🎓 Professional Certificate Templates",
                      "📑 Course Proposal Templates", 
                      "💻 Digital & Print Ready Files",
                      "✨ Bonus: Teaching Guide & Tips",
                      "🎯 Lifetime Updates & Support"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-muted-foreground">
                        <span className="text-success">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-accent p-6 rounded-xl border border-accent/20">
                  <div className="text-center space-y-4">
                    <div>
                      <span className="text-sm text-muted-foreground line-through">Regular: $127</span>
                      <div className="text-4xl font-bold text-foreground">
                        Only $47
                      </div>
                      <span className="text-muted-foreground">Limited time offer</span>
                    </div>

                    <Button 
                      variant="cta" 
                      size="lg"
                      className="w-full text-lg py-6 rounded-xl relative overflow-hidden group"
                    >
                      <span className="relative z-10">Get My Customized Booklet Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </Button>

                    {/* Guarantee */}
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <span className="text-success">🛡️</span>
                      <span>7 Days Money Back Guarantee</span>
                    </div>
                  </div>
                </div>

                {/* Urgency elements */}
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-destructive font-semibold">
                    <span>⚠️</span>
                    <span>Limited Time: 70% OFF ends in 48 hours!</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Trust signals */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: "💳", text: "Secure Payment" },
              { icon: "📧", text: "Instant Download" },
              { icon: "🔄", text: "Lifetime Updates" },
              { icon: "💬", text: "24/7 Support" }
            ].map((signal, index) => (
              <div key={index} className="text-center p-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-2xl mb-2">{signal.icon}</div>
                <div className="text-sm text-muted-foreground font-body">{signal.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};