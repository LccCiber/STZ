import Image from "next/image";
import { historyPoints, marketingPillars } from "@/data/academy";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function HistorySection() {
  return (
    <section className="section history-section" id="historia">
      <div className="container history-grid">
        <Reveal className="history-copy">
          <SectionHeading
            eyebrow="Historia da SZT Torre"
            title={
              <>
                Uma unidade com raiz, energia e <span>cultura de tatame.</span>
              </>
            }
            text="A SZT Torre aparece publicamente como South Zone Team Torre, Extreme Elite Fight / SZT Torre e Casa do Flow. Essa historia posiciona a academia como um lugar de treino serio, acolhedor e conectado ao crescimento real dos alunos."
          />
          <div className="history-pillars">
            {marketingPillars.map((pillar) => (
              <span key={pillar}>{pillar}</span>
            ))}
          </div>
          <ButtonLink
            href={buildWhatsAppUrl("Ola! Quero conhecer a historia da SZT Torre e agendar uma primeira aula.")}
            external
          >
            Conhecer a SZT Torre
          </ButtonLink>
        </Reveal>

        <Reveal className="history-media" delay={0.08}>
          <Image
            src="/images/gal-4.jpg"
            alt="Atleta de artes marciais representando a cultura competitiva da SZT Torre"
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
          />
          <div className="history-badge">
            <strong>Casa do Flow</strong>
            <span>South Zone Team Torre</span>
          </div>
        </Reveal>
      </div>

      <div className="container history-timeline">
        {historyPoints.map((point, index) => (
          <Reveal className="history-point" delay={index * 0.05} key={point.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
