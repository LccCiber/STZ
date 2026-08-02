import { Star } from "lucide-react";
import { testimonials } from "@/data/academy";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="section testimonials-section" id="depoimentos">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Depoimentos"
            title={
              <>
                Relatos reais entram aqui. <span>Sem depoimento ficticio.</span>
              </>
            }
            text="A estrutura esta preparada para publicar avaliacoes autorizadas de alunos, responsaveis e atletas quando a academia enviar os textos."
          />
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal className="testimonial-card" delay={index * 0.06} key={testimonial.label}>
              <div className="stars" aria-label="Avaliacao placeholder">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star aria-hidden="true" key={starIndex} size={16} />
                ))}
              </div>
              <p>{testimonial.text}</p>
              <div>
                <strong>{testimonial.label}</strong>
                <span>{testimonial.type}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
