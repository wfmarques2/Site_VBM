import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionShell } from "@/components/common/section-shell";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { avaliacoes as mockAvaliacoes } from "./mock-data";

export function AvaliacoesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
  const avaliacoes = t.reviews?.items || mockAvaliacoes;
  const current = useMemo(() => avaliacoes[activeIndex], [activeIndex, avaliacoes]);

  const prev = () => setActiveIndex((value) => (value === 0 ? avaliacoes.length - 1 : value - 1));
  const next = () => setActiveIndex((value) => (value === avaliacoes.length - 1 ? 0 : value + 1));

  return (
    <SectionShell id="avaliacoes" title={t.reviews.title} subtitle={t.reviews.subtitle}>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8">
        <div className="mb-4 flex items-center gap-1 text-amber-400">
          {Array.from({ length: current.rating }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="text-lg leading-8 text-zinc-200">"{current.content}"</p>
        <p className="mt-5 text-sm font-semibold text-zinc-100">{current.name}</p>
        <p className="text-sm text-zinc-400">{current.role}</p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {avaliacoes.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Ir para avaliacao ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full ${activeIndex === index ? "bg-zinc-100" : "bg-zinc-600"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={prev} className="border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={next} className="border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
