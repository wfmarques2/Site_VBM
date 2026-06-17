import { AdminShell } from "@/components/admin/admin-shell";

export function ConfiguracoesAdminPage() {
  return (
    <AdminShell title="Configuracoes" subtitle="Preferencias e parametros globais do painel">
      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <h2 className="text-base font-semibold text-zinc-900">Base de Configuracoes</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Estrutura inicial criada para centralizar parametros de WhatsApp, conteudo institucional e integracoes.
        </p>
      </section>
    </AdminShell>
  );
}
