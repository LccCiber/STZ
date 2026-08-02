import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { academy } from "@/data/academy";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <Image
        className="hero-image"
        src="/images/mod-competicao.jpg"
        alt="Treino de artes marciais com atletas no tatame"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <Reveal>
          <p className="hero-kicker">
            <span />
            SZT Torre • South Zone Team • Joao Pessoa
          </p>
          <h1>
            Agende sua aula <strong>experimental.</strong>
          </h1>
          <p className="hero-copy">
            Venha sentir o ritmo da SZT Torre, conhecer a energia do treino e descobrir qual
            modalidade combina com seu objetivo. Nao precisa ter experiencia para comecar.
          </p>
          <div className="hero-actions">
            <ButtonLink href={buildWhatsAppUrl()} external>
              Agendar aula experimental
            </ButtonLink>
            <ButtonLink href="#professores" variant="secondary">
              Conhecer a equipe
            </ButtonLink>
          </div>
          <p className="hero-note">
            Jiu-Jitsu • Muay Thai • MMA • Sanda • Sipalki-do • Defesa pessoal
          </p>
        </Reveal>
      </div>
      <a className="scroll-cue" href="#sobre" aria-label="Continuar navegando">
        Explorar <ArrowDown aria-hidden="true" size={16} />
      </a>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            name: academy.name,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Joao Pessoa",
              addressRegion: "PB",
              addressCountry: "BR",
              streetAddress: academy.address,
            },
            areaServed: "Torre, Joao Pessoa - PB",
            url: "https://example.com",
            sport: ["Jiu-Jitsu", "Muay Thai", "MMA", "Sanda", "Sipalki-do", "Defesa pessoal"],
          }),
        }}
      />
    </section>
  );
}
