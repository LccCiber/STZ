"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/academy";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title={
              <>
                Duvidas comuns antes da <span>primeira aula.</span>
              </>
            }
          />
        </Reveal>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = active === index;
            return (
              <Reveal className="faq-item" delay={index * 0.025} key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setActive(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown className={cn(isOpen && "rotate-icon")} aria-hidden="true" />
                </button>
                <div className={cn("faq-answer", isOpen && "faq-answer-open")} id={`faq-answer-${index}`}>
                  <p>{item.answer}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
