import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://szt-south-zone-team.vercel.app"),
  title: {
    default: "SZT Torre | Academia de Artes Marciais em Joao Pessoa",
    template: "%s | SZT Torre",
  },
  description:
    "SZT Torre, South Zone Team em Joao Pessoa: artes marciais, Jiu-Jitsu, Muay Thai, MMA, Sanda, Sipalki-do e defesa pessoal.",
  keywords: [
    "Jiu-Jitsu em Joao Pessoa",
    "Jiu-Jitsu na Torre",
    "Muay Thai Joao Pessoa",
    "MMA Joao Pessoa",
    "defesa pessoal Joao Pessoa",
    "academia de artes marciais Joao Pessoa",
    "aula experimental de Jiu-Jitsu",
    "South Zone Team Joao Pessoa",
    "SZT Torre",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SZT Torre | Descubra do que voce e capaz",
    description:
      "Academia de artes marciais no bairro Torre, em Joao Pessoa. Jiu-Jitsu, Muay Thai, MMA, Sanda, Sipalki-do e defesa pessoal.",
    url: "/",
    siteName: "SZT Torre",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-training.jpg",
        width: 1920,
        height: 1080,
        alt: "Treino de artes marciais da SZT Torre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SZT Torre | Artes marciais em Joao Pessoa",
    description: "Jiu-Jitsu, Muay Thai, MMA, Sanda, Sipalki-do e defesa pessoal.",
    images: ["/images/hero-training.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
