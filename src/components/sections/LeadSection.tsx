import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LeadSection() {
  return (
    <section className="section lead-section" id="contato">
      <div className="container lead-grid">
        <Reveal>
          <SectionHeading
            eyebrow="Fale com a equipe"
            title={
              <>
                Agende sua aula <span>experimental.</span>
              </>
            }
            text="Preencha os dados abaixo e finalize a conversa pelo WhatsApp. Levamos menos de um minuto para responder no horario de atendimento."
          />
          <ul className="lead-points">
            <li>Confirme modalidade, horario e condicao da aula experimental.</li>
            <li>Atendimento humano, direto com a equipe da academia.</li>
            <li>Seus dados sao usados apenas para este contato.</li>
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
