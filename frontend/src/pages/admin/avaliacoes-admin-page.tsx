import { AdminShell } from "@/components/admin/admin-shell";
import { CrudSection } from "@/components/admin/crud-section";
import { useAdminCrud } from "@/hooks/admin/use-admin-crud";
import { adminContentGateway } from "@/services/admin";
import type { AvaliacaoAdmin, AvaliacaoInput } from "@/services/admin/types";

const initialForm: AvaliacaoInput = {
  cliente: "",
  nota: "5",
  comentario: ""
};

export function AvaliacoesAdminPage() {
  const crud = useAdminCrud<AvaliacaoAdmin, AvaliacaoInput>({
    initialForm,
    list: adminContentGateway.listAvaliacoes,
    create: adminContentGateway.createAvaliacao,
    update: adminContentGateway.updateAvaliacao,
    remove: adminContentGateway.deleteAvaliacao
  });

  return (
    <AdminShell title="Avaliacoes" subtitle="CRUD mock para depoimentos e prova social">
      <CrudSection
        title="Gerenciar Avaliacoes"
        fields={[
          { key: "cliente", label: "Cliente" },
          { key: "nota", label: "Nota (1-5)" },
          { key: "comentario", label: "Comentario" }
        ]}
        items={crud.items}
        form={crud.form}
        editingId={crud.editingId}
        isLoading={crud.isLoading}
        isSubmitting={crud.isSubmitting}
        error={crud.error}
        onFieldChange={crud.setField}
        onSubmit={crud.submit}
        onCancelEdit={crud.resetForm}
        onEdit={crud.startEdit}
        onDelete={crud.remove}
        renderSummary={(item) => `${item.cliente} • Nota ${item.nota} • ${item.comentario}`}
      />
    </AdminShell>
  );
}
