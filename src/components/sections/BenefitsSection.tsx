import { Check } from "lucide-react";
import { beginnerAnswers, benefits } from "@/data/academy";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function BenefitsSection() {
  return (
    <>
      <section className="section benefits-section" id="beneficios">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Beneficios"
              title={
                <>
                  O que o tatame <span>desenvolve</span> em voce
                </>
              }
              text="As artes marciais atuam no corpo e na mente. A evolucao e individual e construida com constancia, orientacao e respeito ao proprio ritmo."
            />
          </Reveal>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Reveal className="benefit-card" delay={index * 0.025} key={benefit.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{benefit.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section beginners-section">
        <div className="container beginners-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Para iniciantes"
              title={
                <>
                  Voce nao precisa estar pronto para comecar. <span>Precisa apenas comecar.</span>
                </>
              }
              text="Nao importa sua idade, seu condicionamento atual ou se voce nunca praticou uma arte marcial. A equipe estara preparada para orientar seus primeiros passos com seguranca."
            />
            <ButtonLink href={buildWhatsAppUrl()} external>
              Quero fazer minha primeira aula
            </ButtonLink>
          </Reveal>

          <div className="beginner-list">
            {beginnerAnswers.map((answer, index) => (
              <Reveal className="beginner-item" delay={index * 0.05} key={answer}>
                <Check aria-hidden="true" />
                <span>{answer}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
