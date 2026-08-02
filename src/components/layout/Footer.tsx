import Image from "next/image";
import Link from "next/link";
import { academy, modalities, navItems } from "@/data/academy";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/logos/szt-logo.jpg" alt="Logotipo SZT" width={58} height={58} />
          <p>
            SZT Torre - South Zone Team. Artes marciais, disciplina e evolução dentro e fora
            do treino.
          </p>
        </div>

        <div>
          <h3>Navegação</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Modalidades</h3>
          <ul>
            {modalities.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contato</h3>
          <ul>
            {academy.contacts.map((contact) => (
              <li key={contact.phone}>
                <a
                  href={buildWhatsAppUrl(
                    `Olá, ${contact.name}! Conheci a SZT Torre pelo site e gostaria de informações.`,
                    contact.phone,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp — {contact.name}
                </a>
              </li>
            ))}
            <li>
              <a href={academy.instagram} target="_blank" rel="noreferrer">
                Instagram @szttorre
              </a>
            </li>
            <li>
              <a href={academy.secondaryInstagram} target="_blank" rel="noreferrer">
                Instagram @extreme_elite_fight
              </a>
            </li>
            <li>{academy.unit}</li>
            <li>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  academy.mapsQuery,
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 SZT Torre - South Zone Team. Todos os direitos reservados.</span>
        <span>Disciplina • Respeito • Evolução</span>
      </div>
    </footer>
  );
}
