import Image from "next/image";
import { modalities } from "@/data/academy";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ModalitiesSection() {
  return (
    <section className="section modalities-section" id="modalidades">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Modalidades"
            title={
              <>
                Uma casa de combate. <span>Varias formas de evoluir.</span>
              </>
            }
              text="Encontre a modalidade que combina com seu objetivo, seja condicionamento, defesa pessoal, qualidade de vida ou evolução competitiva."
          />
        </Reveal>
        <div className="modalities-grid">
          {modalities.map((modality, index) => (
            <Reveal className="modality-card" delay={index * 0.06} key={modality.title}>
              <div className="modality-image">
                <Image src={modality.image} alt={modality.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="modality-body">
                <p>{modality.audience}</p>
                <h3>{modality.title}</h3>
                <p>{modality.description}</p>
                <ButtonLink
                  href={buildWhatsAppUrl(`Ola! Gostaria de informacoes sobre ${modality.title} na SZT Torre.`)}
                  variant="ghost"
                  external
                >
                  Solicitar informacoes
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
