import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I edit the booklet with my own name/logo?",
    answer: "Absolutely! The entire booklet is fully editable. You can customize it with your own name, logo, branding, colors, and any additional content you want to include. All files come in editable formats that work with common software like Canva, PowerPoint, and Adobe programs."
  },
  {
    question: "Do I receive it digitally or printed?", 
    answer: "You receive digital files that you can use both digitally and for printing. The package includes high-resolution files optimized for both digital use (classes, presentations) and professional printing. You'll get both interactive digital versions and print-ready PDFs."
  },
  {
    question: "How quickly do I get access?",
    answer: "You get instant access! Immediately after your purchase is confirmed, you'll receive an email with download links to all your materials. No waiting, no shipping delays - you can start customizing and using your booklet within minutes."
  },
  {
    question: "What software do I need to edit the files?",
    answer: "The files are designed to work with popular, user-friendly software. You can edit them using Canva (free), PowerPoint, Google Slides, or professional software like Adobe Illustrator/InDesign. We also include a quick start guide showing you exactly how to customize each type of file."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 7-day money-back guarantee. If you're not completely satisfied with your purchase for any reason, simply contact us within 7 days and we'll refund your payment, no questions asked."
  },
  {
    question: "Can I use this for multiple courses?",
    answer: "Absolutely! Once you purchase the booklet, you own it and can use it for as many courses as you want. You can create different versions for different types of makeup courses, customize for different audiences, and use it as many times as you need."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-cta bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Everything you need to know about your makeup course booklet
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur-sm rounded-xl border border-accent/20 px-6 hover:border-accent/40 transition-colors"
                >
                  <AccordionTrigger className="text-left font-body font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional help */}
          <div className="text-center mt-12 p-8 bg-card/30 backdrop-blur-sm rounded-xl border border-accent/20">
            <h3 className="font-body text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              We're here to help! Contact us and we'll get back to you within 24 hours.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">📧</span>
                <span className="text-muted-foreground">support@makeupacademy.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">💬</span>
                <span className="text-muted-foreground">Live Chat Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};