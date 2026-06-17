import { pgEnum, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const orcamentoStatusEnum = pgEnum("orcamento_status", ["novo", "contato_realizado", "convertido", "arquivado"]);

export const orcamentos = pgTable("orcamentos", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: varchar("nome", { length: 120 }).notNull(),
  telefone: varchar("telefone", { length: 30 }).notNull(),
  email: varchar("email", { length: 160 }),
  origem: varchar("origem", { length: 255 }).notNull(),
  destino: varchar("destino", { length: 255 }).notNull(),
  dataServico: varchar("data_servico", { length: 40 }),
  mensagem: text("mensagem"),
  status: orcamentoStatusEnum("status").default("novo").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});