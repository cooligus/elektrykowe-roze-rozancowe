import { LinkButton } from "@/components/ui/link-button";
import { Clock, Headphones, Smartphone, Bot } from "lucide-react";
import { joinServer } from "@/lib/joinServer";

const Rosary24Section = () => {
  return (
    <section className="py-20 bg-background relative" id="rosary247">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-secondary/20 rounded-full px-6 py-3 mb-6">
            <Clock className="w-6 h-6 text-secondary animate-pulse" />
            <span className="text-primary font-semibold">Dostępne 24/7</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Różaniec 24/7
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oprócz wspólnych sesji Żywego Różańca, oferujemy możliwość indywidualnej 
            modlitwy różańcowej o każdej porze dnia i nocy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gradient-peace rounded-2xl p-8 shadow-divine">
            <h3 className="text-3xl font-bold text-primary mb-6 font-serif text-center">
              Jak to działa?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3 flex-shrink-0">
                  <Headphones className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Kanały głosowe</h4>
                  <p className="text-muted-foreground">
                    Dedykowane kanały głosowe gdzie możesz dołączyć do modlitwy 
                    lub modlić się w ciszy z innymi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3 flex-shrink-0">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Bot modlitewny</h4>
                  <p className="text-muted-foreground">
                    Mamy bota, który puszcza różaniec 24/7 
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3 flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Mobilny dostęp</h4>
                  <p className="text-muted-foreground">
                    Aplikacja Discord na telefon pozwala modlić się 
                    w każdym miejscu i czasie
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6 font-serif">
              Dlaczego modlitwa 24/7?
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-primary">Modlitwa nie zna granic czasu.</strong> Nasza 
                wspólnota obejmuje ludzi różnych rytmów życia 
                i różnych potrzeb duchowych.
              </p>
              
              <p>
                Niektórzy znajdują czas na modlitwę wcześnie rano, inni późno w nocy. 
                Dzięki ciągłej dostępności <em>każdy może znaleźć swój moment </em> 
                na spotkanie z Bogiem poprzez modlitwę różańcową.
              </p>
              
              <p>
                To także odpowiedź na wezwanie <strong className="text-primary">św. Pawła</strong>: 
                "Nieustannie się módlcie" (1 Tes 5,17). Nasza wspólnota dosłownie 
                realizuje to wezwanie.
              </p>
            </div>

            <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/30">
              <p className="text-primary font-semibold mb-2 text-center">
                💡 Wskazówka duchowa
              </p>
              <p className="text-muted-foreground text-center italic">
                "Różaniec to skarb, który trzeba odkryć"
              </p>
              <p className="text-xs text-muted-foreground text-center mt-2">
                św. Jan Paweł II
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-peaceful border-2 border-secondary/30 text-center">
          <Clock className="w-16 h-16 text-secondary mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl font-bold text-primary mb-6 font-display">
            Rozpocznij modlitwę już teraz
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Nie czekaj na <em>odpowiedni moment</em>. Każda chwila jest dobra na rozmowę z Bogiem 
            przez wstawiennictwo Maryi. Dołącz do nas i znajdź pokój w modlitwie różańcowej.
          </p>
          
          <LinkButton variant="sacred" size="xl" href={joinServer} target="_blank" rel="noreferrer noopener">
            🕐 Rozpocznij modlitwę 24/7
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Rosary24Section;