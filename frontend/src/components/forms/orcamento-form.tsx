import { ChangeEvent, FormEvent, ReactNode, useMemo, useState } from "react";
import { reservaSchema } from "@/schemas/reserva.schema";
import { buildOrcamentoMessage } from "@/services/whatsapp/build-orcamento-message";
import { redirectToWhatsApp } from "@/services/whatsapp/whatsapp-redirect";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type OrcamentoFormData = {
  origem: string;
  destino: string;
  dataHora: string;
  retornoDataHora: string;
  nome: string;
  telefone: string;
  email: string;
  paisOrigem: string;
  passageiros: string;
  observacoes: string;
};

const inputClassName =
  "w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500";

export function OrcamentoForm() {
  const minDatetime = useMemo(() => {
    const now = new Date();
    now.setHours(now.getHours() + 3); // Add 3 hours from current time

    // Format as YYYY-MM-DDTHH:MM (required for datetime-local input)
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }, []);

  const [form, setForm] = useState<OrcamentoFormData>({
    origem: "",
    destino: "",
    dataHora: "",
    retornoDataHora: "",
    nome: "",
    telefone: "",
    email: "",
    paisOrigem: "",
    passageiros: "1",
    observacoes: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [statusError, setStatusError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    // If dataHora is being changed, make sure it's >= minDatetime
    if (name === "dataHora" && value) {
      const selected = new Date(value);
      const min = new Date(minDatetime);
      if (selected < min) {
        // Don't update if it's before minDatetime, or show error
        setErrors((current) => ({ ...current, dataHora: "A reserva deve ser pelo menos 3 horas a partir da hora atual" }));
        return;
      }
      // Also reset retornoDataHora if it's before new dataHora
      if (form.retornoDataHora && new Date(form.retornoDataHora) <= selected) {
        setForm((current) => ({ ...current, [name]: value, retornoDataHora: "" }));
        setErrors((current) => ({ ...current, retornoDataHora: "" }));
        return;
      }
    }

    // If retornoDataHora is being changed, make sure it's after dataHora
    if (name === "retornoDataHora" && value && form.dataHora) {
      const selected = new Date(value);
      const departure = new Date(form.dataHora);
      if (selected <= departure) {
        setErrors((current) => ({ ...current, retornoDataHora: "A data de retorno deve ser depois da data de partida" }));
        return;
      }
    }

    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatusError(null);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = reservaSchema.safeParse(form);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const nextErrors = Object.fromEntries(
        Object.entries(fieldErrors)
          .filter(([, value]) => value && value.length > 0)
          .map(([key, value]) => [key, value?.[0] ?? "Campo invalido"])
      );
      setErrors(nextErrors);
      setStatusError("Revise os campos obrigatorios antes de continuar.");
      return;
    }

    setErrors({});
    setStatusError(null);
    setIsSubmitting(true);

    const message = buildOrcamentoMessage(parsed.data);
    setTimeout(() => {
      redirectToWhatsApp(message);
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 md:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Origem" error={errors.origem}>
          <input className={cn(inputClassName, errors.origem && "border-red-500")} name="origem" value={form.origem} onChange={handleChange} />
        </Field>
        <Field label="Destino" error={errors.destino}>
          <input className={cn(inputClassName, errors.destino && "border-red-500")} name="destino" value={form.destino} onChange={handleChange} />
        </Field>
        <Field label="Data e horario" error={errors.dataHora}>
          <input
            className={cn(inputClassName, errors.dataHora && "border-red-500")}
            type="datetime-local"
            name="dataHora"
            value={form.dataHora}
            min={minDatetime}
            onChange={handleChange}
          />
        </Field>
        <Field label="Retorno (opcional)">
          <input 
            className={inputClassName} 
            type="datetime-local" 
            name="retornoDataHora" 
            value={form.retornoDataHora}
            min={form.dataHora || minDatetime}
            onChange={handleChange} 
          />
        </Field>
        <Field label="Nome" error={errors.nome}>
          <input className={cn(inputClassName, errors.nome && "border-red-500")} name="nome" value={form.nome} onChange={handleChange} />
        </Field>
        <Field label="Telefone / WhatsApp" error={errors.telefone}>
          <input className={cn(inputClassName, errors.telefone && "border-red-500")} name="telefone" value={form.telefone} onChange={handleChange} />
        </Field>
        <Field label="E-mail" error={errors.email}>
          <input className={cn(inputClassName, errors.email && "border-red-500")} name="email" value={form.email} onChange={handleChange} />
        </Field>
        <Field label="Pais de origem" error={errors.paisOrigem}>
          <input className={cn(inputClassName, errors.paisOrigem && "border-red-500")} name="paisOrigem" value={form.paisOrigem} onChange={handleChange} />
        </Field>
        <Field label="Numero de passageiros" error={errors.passageiros}>
          <input
            className={cn(inputClassName, errors.passageiros && "border-red-500")}
            type="number"
            min={1}
            max={30}
            name="passageiros"
            value={form.passageiros}
            onChange={handleChange}
          />
        </Field>
      </div>

      <Field label="Observacoes" error={errors.observacoes}>
        <textarea
          className={cn(inputClassName, "min-h-28 resize-y", errors.observacoes && "border-red-500")}
          name="observacoes"
          value={form.observacoes}
          onChange={handleChange}
          placeholder="Ex.: quantidade de malas, necessidades especiais, observacoes do trajeto."
        />
      </Field>

      {statusError ? <p className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">{statusError}</p> : null}

      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? "Redirecionando para WhatsApp..." : "Enviar para WhatsApp"}
      </Button>
    </form>
  );
}

function Field({
  label,
  children,
  error
}: {
  label: string;
  children: ReactNode;
  error?: string;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">{label}</span>
      {children}
      {error ? <span className="text-xs text-red-400">{error}</span> : null}
    </label>
  );
}
