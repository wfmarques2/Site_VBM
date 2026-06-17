import { boolean, integer, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const avaliacoes = pgTable("avaliacoes", {
  id: uuid("id").defaultRandom().primaryKey(),
  clienteNome: varchar("cliente_nome", { length: 120 }).notNull(),
  nota: integer("nota").notNull(),
  depoimento: text("depoimento").notNull(),
  destaque: boolean("destaque").default(false).notNull(),
  aprovado: boolean("aprovado").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});