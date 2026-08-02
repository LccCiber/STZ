import { quickFacts } from "@/data/academy";
import { Reveal } from "@/components/ui/Reveal";

export function AuthorityStrip() {
  return (
    <section className="authority-strip" aria-label="Informacoes rapidas">
      <div className="container authority-grid">
        {quickFacts.map((fact, index) => {
          const Icon = fact.icon;
          return (
            <Reveal className="authority-item" delay={index * 0.04} key={fact.title}>
              <Icon aria-hidden="true" />
              <div>
                <h2>{fact.title}</h2>
                <p>{fact.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
