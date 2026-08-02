import { academy } from "@/data/academy";

export function buildWhatsAppUrl(message = academy.whatsapp.defaultMessage) {
  const phone = academy.whatsapp.number.replace(/\D/g, "");
  const text = encodeURIComponent(message);

  if (!phone) {
    return `https://wa.me/?text=${text}`;
  }

  return `https://wa.me/${phone}?text=${text}`;
}
