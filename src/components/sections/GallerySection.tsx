"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { galleryImages } from "@/data/academy";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight" && active !== null) setActive((active + 1) % galleryImages.length);
      if (event.key === "ArrowLeft" && active !== null) {
        setActive((active - 1 + galleryImages.length) % galleryImages.length);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <section className="section gallery-section" id="estrutura">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Fotos do local e do treino"
            title={
              <>
                O visitante precisa sentir o clima <span>antes de pisar no tatame.</span>
              </>
            }
            text="Usei as fotos que voce enviou para criar uma galeria de marketing: intensidade, detalhe, competicao, turma adulta e proposta infantil. Quando chegarem fotos reais da fachada, recepcao e estrutura interna, elas entram aqui."
          />
        </Reveal>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <Reveal className={`gallery-item gallery-item-${index + 1}`} delay={index * 0.05} key={image.src}>
              <button type="button" onClick={() => setActive(index)} aria-label={`Abrir imagem: ${image.alt}`}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 45vw" />
                <span className="gallery-caption">
                  <strong>{image.title}</strong>
                  <em>{image.caption}</em>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Imagem ampliada">
          <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Fechar galeria">
            <X aria-hidden="true" />
          </button>
          <button
            className="lightbox-image"
            type="button"
            onClick={() => setActive((active + 1) % galleryImages.length)}
            aria-label="Proxima imagem"
          >
            <Image src={galleryImages[active].src} alt={galleryImages[active].alt} fill sizes="90vw" />
          </button>
          <p>{galleryImages[active].alt}</p>
        </div>
      ) : null}
    </section>
  );
}
