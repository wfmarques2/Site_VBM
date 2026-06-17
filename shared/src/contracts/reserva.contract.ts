import { z } from "zod";

export const reservaContract = z.object({
  nome: z.string().min(2),
  telefone: z.string().min(8),
  origem: z.string().min(2),
  destino: z.string().min(2),
  dataHora: z.string().min(4),
  passageiros: z.number().int().positive(),
  bagagens: z.string().optional(),
  observacoes: z.string().optional()
});

export type ReservaContract = z.infer<typeof reservaContract>;