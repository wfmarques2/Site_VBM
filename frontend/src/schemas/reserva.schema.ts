import { z } from "zod";

const requiredText = (field: string) => z.string().trim().min(1, `${field} e obrigatorio`);

// Helper function to get the minimum allowed datetime (now + 3h)
const getMinDatetime = () => {
  const now = new Date();
  now.setHours(now.getHours() + 3);
  return now;
};

export const reservaSchema = z.object({
  origem: requiredText("Origem"),
  destino: requiredText("Destino"),
  dataHora: z.string().trim().min(1, "Data e horario e obrigatorio")
    .refine((val) => {
      const selected = new Date(val);
      return selected >= getMinDatetime();
    }, "A reserva deve ser pelo menos 3 horas a partir da hora atual e nao pode ser em dias anteriores"),
  retornoDataHora: z.string().trim().optional()
    .refine((val) => {
      if (!val) return true;
      return new Date(val) > new Date();
    }, "A data de retorno deve ser valida"),
  nome: requiredText("Nome"),
  telefone: z.string().trim().min(8, "Telefone/WhatsApp invalido"),
  email: z.string().trim().email("E-mail invalido"),
  paisOrigem: requiredText("Pais de origem"),
  passageiros: z.coerce.number().int().min(1, "Numero de passageiros invalido"),
  observacoes: requiredText("Observacoes")
})
.refine((data) => {
  if (!data.retornoDataHora) return true;
  return new Date(data.retornoDataHora) > new Date(data.dataHora);
}, {
  message: "A data de retorno deve ser apos a data e horario de partida",
  path: ["retornoDataHora"]
});

export type ReservaInput = z.infer<typeof reservaSchema>;
