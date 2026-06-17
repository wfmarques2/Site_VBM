import { PasseiosSection } from "@/components/site/home/passeios-section";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export function PasseiosPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors mb-6">
          <ChevronLeft className="h-4 w-4" />
          <span className="text-sm font-medium uppercase tracking-[0.12em]">Voltar</span>
        </Link>
        <PasseiosSection />
      </div>
    </section>
  );
}