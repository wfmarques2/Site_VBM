import { describe, expect, it } from "vitest";
import type { ReservaInput } from "@/schemas/reserva.schema";
import { buildReservaMessage } from "./build-reserva-message";

const baseInput: ReservaInput = {
  origem: "Aeroporto de Salvador",
  destino: "Praia do Forte",
  dataHora: "2026-04-21T14:30",
  nome: "Joao Silva",
  telefone: "+55 71 99999-9999",
  email: "joao@email.com",
  paisOrigem: "Brasil",
  passageiros: 3,
  observacoes: "Levar cadeirinha infantil"
};

describe("buildReservaMessage", () => {
  it("formata os campos principais da mensagem", () => {
    const result = buildReservaMessage(baseInput);

    expect(result).toContain("Ola, gostaria de solicitar uma reserva:");
    expect(result).toContain("Data: 21/04/2026");
    expect(result).toContain("Horario: 14:30");
    expect(result).toContain("Retorno: Nao informado");
  });

  it("inclui data e horario de retorno quando informado", () => {
    const result = buildReservaMessage({
      ...baseInput,
      retornoDataHora: "2026-04-25T09:15"
    });

    expect(result).toContain("Retorno: 25/04/2026 09:15");
  });
});
