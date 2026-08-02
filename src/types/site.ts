import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Modality = {
  title: string;
  audience: string;
  status: string;
  description: string;
  image: string;
};

export type Benefit = {
  title: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type QuickFact = {
  title: string;
  text: string;
  icon: LucideIcon;
};
