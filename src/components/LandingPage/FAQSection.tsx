import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Posso editar a apostila com meu próprio nome/logo?",
    answer: "Claro que sim! A apostila inteira é totalmente editável. Você pode personalizá-la com seu próprio nome, logo, marca, cores e qualquer conteúdo adicional que queira incluir. Todos os arquivos vêm em formatos editáveis que funcionam com softwares comuns como Canva, PowerPoint e programas Adobe."
  },
  {
    question: "Recebo digital ou impresso?", 
    answer: "Você recebe arquivos digitais que pode usar tanto digitalmente quanto para impressão. O pacote inclui arquivos em alta resolução otimizados para uso digital (aulas, apresentações) e impressão profissional. Você receberá versões digitais interativas e PDFs prontos para impressão."
  },
  {
    question: "Quão rápido tenho acesso?",
    answer: "Você tem acesso instantâneo! Imediatamente após a confirmação da compra, receberá um email com links para download de todos os materiais. Sem espera, sem demoras de envio - você pode começar a personalizar e usar sua apostila em minutos."
  },
  {
    question: "Que software preciso para editar os arquivos?",
    answer: "Os arquivos são projetados para funcionar com softwares populares e fáceis de usar. Você pode editá-los usando Canva (gratuito), PowerPoint, Google Slides ou softwares profissionais como Adobe Illustrator/InDesign. Também incluímos um guia de início rápido mostrando exatamente como personalizar cada tipo de arquivo."
  },
  {
    question: "Há garantia de devolução do dinheiro?",
    answer: "Sim! Oferecemos garantia de 7 dias de devolução do dinheiro. Se não estiver completamente satisfeita com sua compra por qualquer motivo, simplesmente entre em contato conosco em até 7 dias e reembolsaremos seu pagamento, sem perguntas."
  },
  {
    question: "Posso usar isso para múltiplos cursos?",
    answer: "Absolutamente! Uma vez que comprar a apostila, ela é sua e pode usá-la para quantos cursos quiser. Pode criar diferentes versões para diferentes tipos de cursos de maquiagem, personalizar para diferentes públicos e usar quantas vezes precisar."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 lg:mb-12 animate-fade-in">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-3 lg:mb-4">
              Perguntas{' '}
              <span className="bg-gradient-cta bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground font-body">
              Tudo que você precisa saber sobre sua apostila de curso de maquiagem
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Accordion type="single" collapsible className="space-y-3 lg:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur-sm rounded-xl border border-accent/20 px-4 lg:px-6 hover:border-accent/40 transition-colors"
                >
                  <AccordionTrigger className="text-left font-body font-semibold text-foreground hover:text-primary py-4 lg:py-6 hover:no-underline text-sm lg:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-4 lg:pb-6 text-sm lg:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional help */}
          <div className="text-center mt-8 lg:mt-12 p-6 lg:p-8 bg-card/30 backdrop-blur-sm rounded-xl border border-accent/20">
            <h3 className="font-body text-lg lg:text-xl font-semibold text-foreground mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-4 text-sm lg:text-base">
              Estamos aqui para ajudar! Entre em contato e responderemos em até 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">📧</span>
                <span className="text-muted-foreground">suporte@academiamaquiagem.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">💬</span>
                <span className="text-muted-foreground">Chat Online Disponível</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};