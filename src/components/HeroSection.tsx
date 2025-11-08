import { LinkButton } from "@/components/ui/link-button";
import { Heart, Users, Clock } from "lucide-react";
import { joinServer } from "@/lib/joinServer";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-heaven flex items-center justify-center relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-float">
        <Heart className="w-8 h-8 text-white/30" />
      </div>
      <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: "1s" }}>
        <Users className="w-10 h-10 text-white/20" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
        <Clock className="w-6 h-6 text-white/25" />
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-shadow-divine leading-tight">
            Discordowy Serwer

            <span className="inline-block bg-gradient-divine bg-clip-text text-transparent">
              Różańcowy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 font-light leading-relaxed">
            Dołącz do polskiej wspólnoty modlitwy różańcowej online
          </p>
          
          <p className="text-lg mb-10 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Doświadcz mocy wspólnej modlitwy w formie <strong>Żywego Różańca</strong>, 
            łącz się z wiernymi z całej Polski i świata, módl się 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <LinkButton
              variant="sacred"
              size="xl"
              href={joinServer}
              target="_blank"
              rel="noreferrer noopener"
              className="text-lg font-bold min-w-[250px]"
            >
              🙏 Dołącz do Serwera
            </LinkButton>
            
            <LinkButton
              variant="divine"
              size="xl"
              onClick={() => document.getElementById('living-rosary')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[200px]"
            >
              Dowiedz się więcej
            </LinkButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Wspólnota</h3>
              <p className="text-white/80">Wierni modlący się razem każdego dnia</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Heart className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Żywy Różaniec</h3>
              <p className="text-white/80">Tradycyjna forma modlitwy w nowoczesnej odsłonie</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">24/7</h3>
              <p className="text-white/80">Modlitwa różańcowa dostępna o każdej porze</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;