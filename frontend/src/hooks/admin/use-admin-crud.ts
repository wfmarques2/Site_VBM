import { useCallback, useEffect, useState } from "react";

type IdEntity = { id: string };

type UseAdminCrudOptions<TItem extends IdEntity, TInput extends Record<string, string>> = {
  initialForm: TInput;
  list: () => Promise<TItem[]>;
  create: (input: TInput) => Promise<TItem>;
  update: (id: string, input: TInput) => Promise<TItem>;
  remove: (id: string) => Promise<void>;
};

export function useAdminCrud<TItem extends IdEntity, TInput extends Record<string, string>>(
  options: UseAdminCrudOptions<TItem, TInput>
) {
  const [items, setItems] = useState<TItem[]>([]);
  const [form, setForm] = useState<TInput>(options.initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await options.list();
      setItems(result);
    } catch {
      setError("Falha ao carregar dados.");
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    load();
  }, [load]);

  const setField = (key: keyof TInput, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const resetForm = () => {
    setForm(options.initialForm);
    setEditingId(null);
  };

  const startEdit = (item: TItem) => {
    const { id, ...rest } = item;
    setEditingId(id);
    setForm(rest as unknown as TInput);
  };

  const submit = async () => {
    try {
      setIsSubmitting(true);
      setError(null);
      if (editingId) {
        await options.update(editingId, form);
      } else {
        await options.create(form);
      }
      await load();
      resetForm();
    } catch {
      setError("Nao foi possivel salvar o registro.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const remove = async (id: string) => {
    try {
      setError(null);
      await options.remove(id);
      await load();
    } catch {
      setError("Nao foi possivel remover o registro.");
    }
  };

  return {
    items,
    form,
    editingId,
    isLoading,
    isSubmitting,
    error,
    setField,
    startEdit,
    resetForm,
    submit,
    remove
  };
}
