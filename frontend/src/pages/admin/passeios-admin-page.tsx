import { AdminShell } from "@/components/admin/admin-shell";
import { CrudSection } from "@/components/admin/crud-section";
import { useAdminCrud } from "@/hooks/admin/use-admin-crud";
import { adminContentGateway } from "@/services/admin";
import type { PasseioAdmin, PasseioInput } from "@/services/admin/types";

const initialForm: PasseioInput = {
  titulo: "",
  local: "",
  preco: "",
  status: "ativo"
};

export function PasseiosAdminPage() {
  const crud = useAdminCrud<PasseioAdmin, PasseioInput>({
    initialForm,
    list: adminContentGateway.listPasseios,
    create: adminContentGateway.createPasseio,
    update: adminContentGateway.updatePasseio,
    remove: adminContentGateway.deletePasseio
  });

  return (
    <AdminShell title="Passeios" subtitle="CRUD mock preparado para API futura">
      <CrudSection
        title="Gerenciar Passeios"
        fields={[
          { key: "titulo", label: "Titulo" },
          { key: "local", label: "Local" },
          { key: "preco", label: "Preco" },
          { key: "status", label: "Status" }
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
        renderSummary={(item) => `${item.titulo} • ${item.local} • ${item.preco} • ${item.status}`}
      />
    </AdminShell>
  );
}
