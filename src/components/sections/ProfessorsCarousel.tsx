"use client";

import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { professors } from "@/data/academy";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ProfessorsCarousel() {
  const [active, setActive] = useState(0);
  const professor = professors[active];

  function previous() {
    setActive((current) => (current - 1 + professors.length) % professors.length);
  }

  function next() {
    setActive((current) => (current + 1) % professors.length);
  }

  return (
    <div className="professors-carousel" aria-label="Carrossel de professores">
      <button className="carousel-arrow" type="button" onClick={previous} aria-label="Professor anterior">
        <ChevronLeft aria-hidden="true" />
      </button>

      <article className="professor-slide" aria-live="polite">
        <p className="eyebrow">Equipe SZT Torre</p>
        <span className="professor-slide-count">
          {String(active + 1).padStart(2, "0")} / {String(professors.length).padStart(2, "0")}
        </span>
        <h3>{professor.name}</h3>
        <strong>{professor.role}</strong>
        <a
          className="professor-phone"
          href={buildWhatsAppUrl(
            `Olá, ${professor.name}! Conheci a SZT Torre pelo site e gostaria de informações sobre a aula experimental.`,
            professor.phone,
          )}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle aria-hidden="true" />
          <span>{professor.phone.replace(/^55(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")}</span>
        </a>
        <a
          className="btn btn-secondary professor-slide-cta"
          href={buildWhatsAppUrl(
            `Olá, ${professor.name}! Conheci a SZT Torre pelo site e gostaria de informações sobre a aula experimental.`,
            professor.phone,
          )}
          target="_blank"
          rel="noreferrer"
        >
          Falar com {professor.name}
          <MessageCircle aria-hidden="true" size={18} />
        </a>

        <div className="carousel-dots" aria-label="Selecionar professor">
          {professors.map((item, index) => (
            <button
              className={index === active ? "carousel-dot carousel-dot-active" : "carousel-dot"}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Mostrar ${item.name}`}
              aria-current={index === active ? "true" : undefined}
              key={item.name}
            />
          ))}
        </div>
      </article>

      <button className="carousel-arrow" type="button" onClick={next} aria-label="Próximo professor">
        <ChevronRight aria-hidden="true" />
      </button>
    </div>
  );
}
