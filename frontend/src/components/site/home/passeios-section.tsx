import { MapPin } from "lucide-react";
import { SectionShell } from "@/components/common/section-shell";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { passeios as mockPasseios } from "./mock-data";

export function PasseiosSection() {
  const { t } = useLanguage();
  const passeios = t.tours?.items || mockPasseios;

  return (
    <SectionShell id="passeios" title={t.tours.title} subtitle={t.tours.subtitle}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {passeios.map((tour) => (
          <article key={tour.name} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            {tour.image ? (
              <img
                src={tour.image}
                alt={tour.name}
                className="h-40 w-full rounded-xl object-cover"
              />
            ) : (
              <div className="h-40 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900" />
            )}
            <h3 className="mt-4 text-lg font-semibold text-zinc-100">{tour.name}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
              <MapPin className="h-4 w-4" />
              <span>{tour.location}</span>
            </div>
            <p className="mt-3 text-sm text-zinc-300">{tour.price}</p>
            <a href={`/reserva?destino=${encodeURIComponent(tour.name)}`} className="mt-4 inline-block">
              <Button size="sm">{t.tours.cta}</Button>
            </a>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
