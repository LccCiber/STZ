import Image from "next/image";
import { processSteps } from "@/data/academy";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function TrialSection() {
  return (
    <section className="trial-section" id="aula-experimental">
      <Image
        src="/images/gal-4.jpg"
        alt="Atleta de artes marciais em ambiente de competicao"
        fill
        sizes="100vw"
      />
      <div className="trial-overlay" />
      <div className="container trial-content">
        <Reveal>
          <SectionHeading
            eyebrow="Aula experimental"
            title={
              <>
                Comece com orientacao. <span>Sem precisar ter experiencia.</span>
              </>
            }
            text="Converse com a equipe, confirme a modalidade ideal para seu objetivo e agende um primeiro treino na SZT Torre."
          />
          <div className="steps-grid">
            {processSteps.map((step, index) => (
              <div className="step-card" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <ButtonLink href={buildWhatsAppUrl()} external>
            Agendar pelo WhatsApp
          </ButtonLink>
          <p className="microcopy">Disponibilidade, gratuidade e horarios devem ser confirmados com a unidade.</p>
        </Reveal>
      </div>
    </section>
  );
}
