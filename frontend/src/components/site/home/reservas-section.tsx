import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/common/section-shell";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/useLanguage";

export function ReservasSection() {
  const { t } = useLanguage();

  return (
    <SectionShell
      id="reservas"
      title={t.bookings.title}
      subtitle={t.bookings.subtitle}
    >
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-semibold text-zinc-100">{t.bookings.heading}</h3>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              {t.bookings.description}
            </p>
          </div>
          <a href="/reserva">
            <Button className="gap-2">
              {t.bookings.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
