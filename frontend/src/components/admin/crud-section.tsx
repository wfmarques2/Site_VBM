import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type FieldConfig<TForm extends Record<string, string>> = {
  key: keyof TForm;
  label: string;
  placeholder?: string;
};

type CrudSectionProps<TItem extends { id: string }, TForm extends Record<string, string>> = {
  title: string;
  fields: FieldConfig<TForm>[];
  items: TItem[];
  form: TForm;
  editingId: string | null;
  isLoading: boolean;
  isSubmitting: boolean;
  error: string | null;
  onFieldChange: (key: keyof TForm, value: string) => void;
  onSubmit: () => void;
  onCancelEdit: () => void;
  onEdit: (item: TItem) => void;
  onDelete: (id: string) => void;
  renderSummary: (item: TItem) => ReactNode;
};

export function CrudSection<TItem extends { id: string }, TForm extends Record<string, string>>({
  title,
  fields,
  items,
  form,
  editingId,
  isLoading,
  isSubmitting,
  error,
  onFieldChange,
  onSubmit,
  onCancelEdit,
  onEdit,
  onDelete,
  renderSummary
}: CrudSectionProps<TItem, TForm>) {
  return (
    <section className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-5">
      <h2 className="text-base font-semibold text-zinc-900">{title}</h2>

      <div className="grid gap-3 md:grid-cols-2">
        {fields.map((field) => (
          <label key={String(field.key)} className="space-y-1 text-sm">
            <span className="text-zinc-600">{field.label}</span>
            <input
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-zinc-500"
              value={form[field.key]}
              placeholder={field.placeholder}
              onChange={(event) => onFieldChange(field.key, event.target.value)}
            />
          </label>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <Button type="button" onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : editingId ? "Atualizar" : "Criar"}
        </Button>
        {editingId ? (
          <Button type="button" variant="outline" onClick={onCancelEdit}>
            Cancelar edicao
          </Button>
        ) : null}
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <div className="space-y-2">
        {isLoading ? <p className="text-sm text-zinc-500">Carregando...</p> : null}
        {!isLoading && items.length === 0 ? <p className="text-sm text-zinc-500">Nenhum item cadastrado.</p> : null}
        {items.map((item) => (
          <article key={item.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-zinc-200 p-3">
            <div className="text-sm text-zinc-700">{renderSummary(item)}</div>
            <div className="flex gap-2">
              <Button type="button" size="sm" variant="outline" onClick={() => onEdit(item)}>
                Editar
              </Button>
              <Button type="button" size="sm" onClick={() => onDelete(item.id)}>
                Excluir
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
