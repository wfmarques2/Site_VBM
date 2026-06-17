import { z } from "zod";

export const orcamentoContract = z.object({
  nome: z.string().min(2),
  telefone: z.string().min(8),
  email: z.string().email().optional(),
  origem: z.string().min(2),
  destino: z.string().min(2),
  dataServico: z.string().optional(),
  mensagem: z.string().optional()
});

export type OrcamentoContract = z.infer<typeof orcamentoContract>;