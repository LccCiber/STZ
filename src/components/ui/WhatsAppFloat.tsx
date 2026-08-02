import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar aula experimental pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" size={20} />
      <span>Agendar no WhatsApp</span>
    </a>
  );
}
