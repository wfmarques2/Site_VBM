import { Users } from "lucide-react";
import { SectionShell } from "@/components/common/section-shell";
import { useLanguage } from "@/lib/i18n/useLanguage";

interface FleetVehicle {
  model: string;
  capacity: string;
  badge: string;
  image: string;
}

export function FrotaSection() {
  const { t } = useLanguage();
  const frota: FleetVehicle[] = (t.fleet?.items || []) as FleetVehicle[];

  return (
    <SectionShell id="frota" title={t.fleet.title} subtitle={t.fleet.subtitle}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {frota.map((vehicle) => (
          <article key={vehicle.model} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <div className="h-48 rounded-xl overflow-hidden">
              <img
                src={vehicle.image}
                alt={vehicle.model}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <p className="mt-4 inline-flex rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">{vehicle.badge}</p>
            <h3 className="mt-3 text-base font-semibold text-zinc-100">{vehicle.model}</h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
              <Users className="h-4 w-4" />
              {vehicle.capacity}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
