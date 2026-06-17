import { AdminShell } from "@/components/admin/admin-shell";

export function FrotaAdminPage() {
  return (
    <AdminShell title="Frota" subtitle="Estrutura pronta para integracao futura com backend">
      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <h2 className="text-base font-semibold text-zinc-900">Modulo de Frota</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Nesta etapa o modulo esta preparado para receber CRUD conectado a API de frota.
        </p>
      </section>
    </AdminShell>
  );
}
