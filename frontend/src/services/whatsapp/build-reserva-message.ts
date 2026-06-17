import type { ReservaInput } from "@/schemas/reserva.schema";

function splitDateTime(dateTime: string) {
  const [rawDate, rawTime] = dateTime.split("T");
  if (!rawDate || !rawTime) {
    return { date: dateTime, time: "Nao informado" };
  }

  const [year, month, day] = rawDate.split("-");
  return {
    date: `${day}/${month}/${year}`,
    time: rawTime.slice(0, 5)
  };
}

export function buildReservaMessage(input: ReservaInput) {
  const { date, time } = splitDateTime(input.dataHora);
  const retorno = input.retornoDataHora ? splitDateTime(input.retornoDataHora) : null;

  return [
    "Ola, gostaria de solicitar uma reserva:",
    `Nome: ${input.nome}`,
    `Telefone: ${input.telefone}`,
    `E-mail: ${input.email}`,
    `Pais de origem: ${input.paisOrigem}`,
    `Origem: ${input.origem}`,
    `Destino: ${input.destino}`,
    `Data: ${date}`,
    `Horario: ${time}`,
    retorno ? `Retorno: ${retorno.date} ${retorno.time}` : "Retorno: Nao informado",
    `Passageiros: ${input.passageiros}`,
    `Observacoes: ${input.observacoes}`
  ].join("\n");
}
