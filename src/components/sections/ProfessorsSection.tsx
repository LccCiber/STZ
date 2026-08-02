import Image from "next/image";
import { professors, professorTrustPoints } from "@/data/academy";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ProfessorsSection() {
  return (
    <section className="section professors-section" id="professores">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Professores"
            title={
              <>
                Quem puxa o ritmo, <span>guia sua evolucao.</span>
              </>
            }
            text="Acompanhamento técnico, atenção aos fundamentos e respeito ao ritmo de cada aluno desde o primeiro contato com o tatame."
          />
        </Reveal>

        <div className="professors-feature">
          <Reveal className="professors-photo" delay={0.04}>
            <Image
              src="/images/mod-competicao.jpg"
              alt="Professores e alunos em clima de treino tecnico"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </Reveal>
          <Reveal className="professors-panel" delay={0.08}>
            <p className="eyebrow">Metodo e acompanhamento</p>
            <h3>Treinar bem comeca por ser bem orientado.</h3>
            <p>
              Você não entra apenas em uma aula. Entra em um ambiente onde a equipe corrige,
              orienta e organiza o ritmo para transformar insegurança em evolução consistente.
            </p>
            <ButtonLink
              href={buildWhatsAppUrl("Ola! Quero saber quem sao os professores da SZT Torre e qual modalidade combina comigo.")}
              external
            >
              Falar com a equipe
            </ButtonLink>
          </Reveal>
        </div>

        <div className="professor-trust-grid">
          {professorTrustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal className="professor-trust-card" delay={index * 0.05} key={point.title}>
                <Icon aria-hidden="true" />
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </Reveal>
            );
          })}
        </div>

        <div className="professor-grid">
          {professors.map((professor, index) => {
            const Icon = professor.icon;
            return (
              <Reveal className="professor-card" delay={index * 0.06} key={professor.name}>
                <div className="professor-icon">
                  <Icon aria-hidden="true" />
                </div>
                <p>{professor.role}</p>
                <h3>{professor.name}</h3>
                <p>{professor.details}</p>
                <ButtonLink
                  href={buildWhatsAppUrl(
                    `Olá, ${professor.name}! Conheci a SZT Torre pelo site e gostaria de informações sobre a aula experimental.`,
                    professor.phone,
                  )}
                  variant="secondary"
                  external
                >
                  Falar com {professor.name}
                </ButtonLink>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
