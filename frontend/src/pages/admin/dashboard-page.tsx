import { Link } from "wouter";
import { AdminShell } from "@/components/admin/admin-shell";

const cards = [
  { title: "Passeios", description: "Gerenciar catalogo de passeios", href: "/admin/passeios" },
  { title: "Galeria", description: "Organizar imagens e categorias", href: "/admin/galeria" },
  { title: "Avaliacoes", description: "Publicar e editar depoimentos", href: "/admin/avaliacoes" },
  { title: "Frota", description: "Atualizar dados dos veiculos", href: "/admin/frota" }
];

export function DashboardPage() {
  return (
    <AdminShell title="Dashboard" subtitle="Visao geral do painel administrativo">
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-400">
            <h2 className="text-base font-semibold text-zinc-900">{card.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{card.description}</p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
