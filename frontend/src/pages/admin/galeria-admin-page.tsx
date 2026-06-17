import { AdminShell } from "@/components/admin/admin-shell";
import { CrudSection } from "@/components/admin/crud-section";
import { useAdminCrud } from "@/hooks/admin/use-admin-crud";
import { adminContentGateway } from "@/services/admin";
import type { GaleriaAdmin, GaleriaInput } from "@/services/admin/types";

const initialForm: GaleriaInput = {
  titulo: "",
  categoria: "",
  imagemUrl: ""
};

export function GaleriaAdminPage() {
  const crud = useAdminCrud<GaleriaAdmin, GaleriaInput>({
    initialForm,
    list: adminContentGateway.listGaleria,
    create: adminContentGateway.createGaleria,
    update: adminContentGateway.updateGaleria,
    remove: adminContentGateway.deleteGaleria
  });

  return (
    <AdminShell title="Galeria" subtitle="CRUD mock para organizacao de midias">
      <CrudSection
        title="Gerenciar Galeria"
        fields={[
          { key: "titulo", label: "Titulo" },
          { key: "categoria", label: "Categoria" },
          { key: "imagemUrl", label: "URL da Imagem", placeholder: "https://..." }
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
        renderSummary={(item) => `${item.titulo} • ${item.categoria} • ${item.imagemUrl}`}
      />
    </AdminShell>
  );
}
