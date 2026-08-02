import { MapPin } from "lucide-react";
import { academy } from "@/data/academy";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(academy.mapsQuery)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(academy.mapsQuery)}&output=embed`;

  return (
    <section className="section location-section" id="localizacao">
      <div className="container location-grid">
        <Reveal>
          <SectionHeading
            eyebrow="Localizacao"
            title={
              <>
                SZT Torre. <span>Joao Pessoa.</span>
              </>
            }
            text="O resumo confirma a unidade no bairro da Torre, mas o endereco completo e os horarios de cada modalidade ainda precisam ser validados com o responsavel."
          />
          <div className="location-list">
            <p>
              <MapPin aria-hidden="true" />
              {academy.address}
            </p>
            <p>{academy.hours}</p>
            <p>{academy.parking}</p>
          </div>
          <div className="location-actions">
            <ButtonLink href={mapsUrl} variant="secondary" external>
              Abrir no Google Maps
            </ButtonLink>
            <ButtonLink href={buildWhatsAppUrl("Ola! Quero confirmar endereco, horarios e agendar minha aula experimental na SZT.")} external>
              Falar pelo WhatsApp
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal className="map-frame" delay={0.08}>
          <iframe
            title="Mapa da SZT Torre em Joao Pessoa"
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
