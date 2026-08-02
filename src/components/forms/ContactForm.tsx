"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const ageOptions = ["Menor de 12", "13 a 17", "18 a 30", "31 a 45", "46+"];
const modalityOptions = [
  "Jiu-Jitsu",
  "Muay Thai",
  "MMA",
  "Sanda",
  "Sipalki-do",
  "Defesa pessoal",
  "Quero orientacao",
];
const timeOptions = ["Manha", "Tarde", "Noite", "Fim de semana"];

type FormState = {
  name: string;
  phone: string;
  age: string;
  modality: string;
  time: string;
  message: string;
  consent: boolean;
  website: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  age: "",
  modality: "",
  time: "",
  message: "",
  consent: false,
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    return (
      form.name.trim().length >= 3 &&
      form.phone.replace(/\D/g, "").length >= 10 &&
      form.age &&
      form.modality &&
      form.time &&
      form.consent &&
      !form.website
    );
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setError("");
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.website) {
      return;
    }

    if (!isValid) {
      setError("Preencha os campos obrigatorios e autorize o contato pelo WhatsApp.");
      return;
    }

    const text = [
      "Ola! Conheci a SZT Torre pelo site e gostaria de agendar minha primeira aula experimental.",
      `Nome: ${form.name.trim()}`,
      `WhatsApp: ${form.phone.trim()}`,
      `Faixa etaria: ${form.age}`,
      `Modalidade de interesse: ${form.modality}`,
      `Melhor horario: ${form.time}`,
      form.message.trim() ? `Mensagem: ${form.message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setSubmitted(true);
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="name">Nome completo</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(event) => update("name", event.target.value)}
          placeholder="Seu nome"
          autoComplete="name"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="phone">WhatsApp com DDD</label>
        <input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={(event) => update("phone", event.target.value)}
          placeholder="(83) 90000-0000"
          autoComplete="tel"
          inputMode="tel"
          required
        />
      </div>

      <div className="form-pair">
        <div className="field">
          <label htmlFor="age">Faixa etaria</label>
          <select id="age" value={form.age} onChange={(event) => update("age", event.target.value)} required>
            <option value="">Selecione</option>
            {ageOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="modality">Modalidade de interesse</label>
          <select
            id="modality"
            value={form.modality}
            onChange={(event) => update("modality", event.target.value)}
            required
          >
            <option value="">Selecione</option>
            {modalityOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="time">Melhor horario para treinar</label>
        <select id="time" value={form.time} onChange={(event) => update("time", event.target.value)} required>
          <option value="">Selecione</option>
          {timeOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Mensagem opcional</label>
        <textarea
          id="message"
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Conte se voce ja treinou antes ou tire uma duvida."
          rows={4}
        />
      </div>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => update("consent", event.target.checked)}
        />
        <span>Autorizo o contato da SZT Torre pelo WhatsApp informado.</span>
      </label>

      <input
        className="honeypot"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(event) => update("website", event.target.value)}
        aria-hidden="true"
      />

      {error ? <p className="form-error" role="alert">{error}</p> : null}
      {submitted ? <p className="form-success">Perfeito. Abrimos o WhatsApp com sua mensagem pronta.</p> : null}

      <button className="btn btn-primary form-submit" type="submit" disabled={submitted && !isValid}>
        <span>Enviar e falar no WhatsApp</span>
        <Send aria-hidden="true" size={18} />
      </button>
    </form>
  );
}
