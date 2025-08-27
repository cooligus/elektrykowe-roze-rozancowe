import { Button } from "@/components/ui/button";
import { Shield, BookOpen, Lightbulb } from "lucide-react";
import { joinServer } from "@/lib/joinServer";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-peace relative" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            O naszej wspólnocie
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Jesteśmy dynamiczną społecznością katolików, którzy połączyli tradycyjną modlitwę różańcową 
            z nowoczesnymi technologiami, tworząc przestrzeń duchowej jedności w świecie cyfrowym.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-xl p-8 shadow-peaceful border border-border/50 hover:shadow-divine transition-all duration-300">
            <Shield className="w-12 h-12 text-primary mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-center mb-4 font-serif">Tradycja</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Opieramy się na wielowiekowej tradycji Kościoła katolickiego, 
              szczególnie na devotio Różańca Świętego i praktyce Żywego Różańca.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-peaceful border border-border/50 hover:shadow-divine transition-all duration-300">
            <BookOpen className="w-12 h-12 text-primary mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-center mb-4 font-serif">Edukacja</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Dzielimy się wiedzą o wierze katolickiej, historii Kościoła 
              i znaczeniu modlitwy różańcowej w życiu duchowym.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-peaceful border border-border/50 hover:shadow-divine transition-all duration-300">
            <Lightbulb className="w-12 h-12 text-primary mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-center mb-4 font-serif">Innowacja</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Wykorzystujemy platformę Discord do tworzenia nowoczesnych form 
              wspólnej modlitwy i budowania katolickiej społeczności online.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-divine border border-border/50 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-display font-bold text-primary mb-6">
              Dlaczego Discord?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Discord pozwala nam na tworzenie żywej, interaktywnej wspólnoty, gdzie każdy może 
              uczestniczyć w modlitwie zgodnie ze swoimi możliwościami i czasem. To platforma, 
              która łączy ludzi w realnym czasie, umożliwiając autentyczne budowanie więzi duchowych.
            </p>
            <Button variant="sacred" size="lg" onClick={joinServer}>
              Przekonaj się sam - dołącz już teraz!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;