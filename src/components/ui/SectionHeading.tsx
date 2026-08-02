import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("section-heading", align === "center" && "section-heading-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-lead">{text}</p> : null}
    </div>
  );
}
