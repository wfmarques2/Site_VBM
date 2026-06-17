import { ReservaForm } from "@/components/forms/reserva-form";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export function ReservaPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors mb-6">
          <ChevronLeft className="h-4 w-4" />
          <span className="text-sm font-medium uppercase tracking-[0.12em]">Voltar</span>
        </Link>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">VBM Transfer</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">Solicitar Reserva</h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-400 md:text-base">
          Preencha os dados abaixo para gerar automaticamente sua mensagem e seguir direto para o WhatsApp da equipe.
        </p>
        <div className="mt-8">
          <ReservaForm />
        </div>
      </div>
    </section>
  );
}
