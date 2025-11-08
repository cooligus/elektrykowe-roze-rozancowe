import { LinkButton } from "@/components/ui/link-button";
import { Crown, Users2, MessageCircle, Calendar } from "lucide-react";
import { joinServer } from "@/lib/joinServer";

const LivingRosarySection = () => {
  return (
    <section className="py-20 bg-background relative" id="living-rosary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-accent/20 rounded-full px-6 py-3 mb-6">
            <Crown className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Główna atrakcja serwera</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
            Żywy Różaniec Online
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Doświadcz mocy tradycyjnej praktyki Żywego Różańca w przestrzeni cyfrowej - 
            każdy dziesiątek różańca odmawiany przez innego członka wspólnoty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6 font-serif">
              Czym jest Żywy Różaniec?
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-primary">Żywy Różaniec</strong> to tradycyjna katolicka praktyka, 
                w której każda osoba odmawia jeden dziesiątek różańca, a razem wszyscy uczestnicy 
                tworzą kompletny różaniec składający się z dwudziestu dziesiątków.
              </p>
              <p>
                W naszej internetowej implementacji <strong>każdy członek może dołączyć do
                róży</strong>, tworząc żywą, duchową sieć 
                modlitwy obejmującą cały świat.
              </p>
              <p>
                To nie tylko modlitwa - to <em>żywa wspólnota</em>, gdzie każda osoba jest 
                niezbędnym ogniwem w łańcuchu modlitwy do Matki Bożej.
              </p>
            </div>
          </div>

          <div className="bg-gradient-peace rounded-2xl p-8 shadow-divine">
            <h4 className="text-2xl font-bold text-primary mb-6 text-center font-serif">
              Jak to działa na naszym serwerze?
            </h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-full p-3 flex-shrink-0">
                  <Users2 className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-2">Automatyczny podział</h5>
                  <p className="text-sm text-muted-foreground">
                    System automatycznie przydziela każdemu uczestnikowi konkretną różę
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-full p-3 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-2">Wspólne odmawianie</h5>
                  <p className="text-sm text-muted-foreground">
                    Jeśli uczestnicy zechcą odmawiają swoje modlitwy razem
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-full p-3 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-2">Regularne sesje</h5>
                  <p className="text-sm text-muted-foreground">
                    W pierwszą sobotę miesiąca organizujemy wspólną modlitwę różańcową
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-peaceful border-2 border-primary/20 text-center">
          <Crown className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-primary mb-6 font-display">
            Stań się częścią Żywego Różańca
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Każda Twoja modlitwa ma znaczenie. Dołącz do nas i poczuj moc wspólnej modlitwy, 
            która łączy serca wiernych w jedną, wielką rodzinę duchową.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton variant="sacred" size="xl" href={joinServer} target="_blank" rel="noreferrer noopener">
              🌹 Dołącz do Żywego Różańca
            </LinkButton>
            <LinkButton
              variant="peaceful"
              size="xl"
              onClick={() => document.getElementById('rosary247')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Zobacz więcej opcji modlitwy
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivingRosarySection;