"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { academy, navItems } from "@/data/academy";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("site-header", scrolled && "site-header-scrolled")}>
      <div className="container header-inner">
        <Link className="brand" href="#inicio" aria-label="Voltar ao inicio">
          <Image
            src="/logos/szt-logo.jpg"
            alt="Logotipo SZT Torre"
            width={46}
            height={46}
            priority
          />
          <span>
            <strong>SZT</strong>
            <em>Torre</em>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-cta" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
          Aula experimental
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div className={cn("mobile-panel", open && "mobile-panel-open")} aria-hidden={!open}>
        <nav aria-label="Navegacao mobile">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Agendar aula experimental
          </a>
        </nav>
        <p>{academy.fullLocation}</p>
      </div>
    </header>
  );
}
