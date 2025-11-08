import { LinkButton } from "@/components/ui/link-button";
import { Heart, Mail, MessageCircle, Cross } from "lucide-react";
import { joinServer } from "@/lib/joinServer";

const Footer = () => {
  return (
    <footer className="bg-gradient-heaven text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <Cross className="w-16 h-16 mx-auto mb-6 text-secondary animate-float" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-shadow-divine">
            Dołącz do nas już dziś
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stań się częścią polskiej społeczności modlitwy różańcowej online. 
            Razem jesteśmy silniejsi w wierze.
          </p>
          <LinkButton
            variant="sacred"
            size="xl"
            href={joinServer}
            target="_blank"
            rel="noreferrer noopener"
            className="text-lg font-bold min-w-[300px]"
          >
            🌹 Dołącz do Serwera Discord
          </LinkButton>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-3">Wspólnota</h3>
            <p className="text-white/80 leading-relaxed">
              Wierni modlących się razem każdego dnia i wspierający się w wierze
            </p>
          </div>
          
          <div className="text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-3">Modlitwa</h3>
            <p className="text-white/80 leading-relaxed">
              Żywy Różaniec, modlitwa 24/7 i dobrowolna wspólna modlitwa online
            </p>
          </div>
          
          <div className="text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-3">Aktualności</h3>
            <p className="text-white/80 leading-relaxed">
              Najświeższe wiadomości ze świata Kościoła katolickiego i dyskusje
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-white/20 pt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold font-display mb-2">
                Discordowy Serwer Różańcowy
              </h4>
              <p className="text-white/70">
                Tradycyjna modlitwa w nowoczesnej formie
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <LinkButton
                variant="divine"
                onClick={() => document.getElementById('living-rosary')?.scrollIntoView({ behavior: 'smooth' })}
              >
                O Żywym Różańcu
              </LinkButton>
              <LinkButton
                variant="divine"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                O nas
              </LinkButton>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center border-t border-white/20 pt-8">
          <p className="text-white/60 mb-4">
            © 2025 Discordowy Serwer Różańcowy
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            Tworzone z ❤️ dla większej chwały Bożej i czci Niepokalanej Maryi
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Heart className="w-6 h-6 animate-float" />
      </div>
      <div className="absolute top-20 right-20 opacity-15" style={{ animationDelay: "1s" }}>
        <Cross className="w-8 h-8 animate-float" />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-10" style={{ animationDelay: "2s" }}>
        <MessageCircle className="w-5 h-5 animate-float" />
      </div>
    </footer>
  );
};

export default Footer;