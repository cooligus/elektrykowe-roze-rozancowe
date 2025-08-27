import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, ChevronRight } from "lucide-react";
import { joinServer } from "@/lib/joinServer";

const NewsSection = () => {
  return (
    <section className="py-20 bg-gradient-peace" id="news">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Aktualności Katolickie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bądź na bieżąco z najważniejszymi wydarzeniami ze świata Kościoła katolickiego. 
            Otrzymuj aktualne informacje prosto na naszym serwerze Discord.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-divine border border-border/50">
          <div className="text-center">
            <ExternalLink className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-primary mb-4 font-serif">
              Więcej aktualności na serwerze
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Na naszym serwerze Discord znajdziesz dedykowane kanały z najświeższymi 
              wiadomościami katolickimi, komentarzami i dyskusjami na tematy religijne.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Aktualizacje z Watykanu</h4>
                  <p className="text-sm text-muted-foreground">Najważniejsze komunikaty Stolicy Apostolskiej</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Kościół w Polsce</h4>
                  <p className="text-sm text-muted-foreground">Wiadomości z Konferencji Episkopatu Polski</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Wydarzenia religijne</h4>
                  <p className="text-sm text-muted-foreground">Pielgrzymki, uroczystości, święta</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Dyskusje i komentarze</h4>
                  <p className="text-sm text-muted-foreground">Wymiana myśli na tematy religijne</p>
                </div>
              </div>
            </div>
            
            <Button variant="sacred" size="lg" onClick={joinServer}>
              📰 Zobacz aktualności na serwerze
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;