import { ButtonLink } from "@/components/ui/ButtonLink";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCtaSection() {
  return (
    <section className="final-cta" id="cta-final">
      <div className="container">
        <p className="eyebrow">Comece agora</p>
        <h2>O primeiro passo da sua evolucao comeca no treino.</h2>
        <p>
          Agende sua aula experimental, conheca a SZT Torre e descubra uma nova
          maneira de desenvolver seu corpo, sua confianca e sua disciplina.
        </p>
        <div className="final-actions">
          <ButtonLink href={buildWhatsAppUrl()} external>
            Quero minha aula experimental
          </ButtonLink>
          <ButtonLink
            href={buildWhatsAppUrl("Ola! Quero falar com a equipe da SZT Torre.")}
            variant="secondary"
            external
          >
            Falar com a equipe
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
