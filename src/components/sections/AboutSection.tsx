import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function AboutSection() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <Reveal className="about-media">
          <Image
            src="/images/gal-3.jpg"
            alt="Detalhe de kimono durante treino de artes marciais"
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
          />
        </Reveal>
        <Reveal className="about-copy" delay={0.08}>
          <SectionHeading
            eyebrow="Sobre a SZT"
            title={
              <>
                SZT Torre. <span>Casa do Flow.</span>
              </>
            }
          />
          <p>
            A SZT Torre - South Zone Team e uma academia de artes marciais em Joao Pessoa,
            tambem associada publicamente aos nomes Extreme Elite Fight / SZT Torre e Casa do
            Flow. A unidade reune modalidades de combate como Jiu-Jitsu, Muay Thai, MMA, Sanda,
            Sipalki-do e defesa pessoal, sempre com foco em disciplina, respeito e evolucao.
          </p>
          <p>
            Integrando a estrutura da South Zone Team, equipe reconhecida por sua presenca no
            cenario competitivo paraibano, a SZT Torre recebe pessoas que desejam iniciar uma
            atividade fisica, aprender defesa pessoal, melhorar a qualidade de vida ou evoluir
            como atletas.
          </p>
          <ButtonLink href={buildWhatsAppUrl("Ola! Quero conhecer a SZT Torre e tirar duvidas sobre modalidades e primeira aula.")} external>
            Falar com a equipe
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
