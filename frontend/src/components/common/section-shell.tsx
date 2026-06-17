import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  noReveal?: boolean;
};

export function SectionShell({ id, title, subtitle, children, className, noReveal = false }: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-14 md:py-20 section", className)}>
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            {title && (
              <div className={cn(noReveal ? "" : "reveal")}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">VBM Transfer</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">{title}</h2>
                {subtitle ? <p className="mt-3 max-w-2xl text-sm text-zinc-400 md:text-base">{subtitle}</p> : null}
              </div>
            )}
            {title && <div className="spacer-large"></div>}
            <div className={cn(noReveal ? "" : "reveal delay-100")}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
