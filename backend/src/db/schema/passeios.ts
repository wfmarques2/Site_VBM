import { boolean, numeric, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const passeios = pgTable("passeios", {
  id: uuid("id").defaultRandom().primaryKey(),
  titulo: varchar("titulo", { length: 120 }).notNull(),
  descricao: text("descricao").notNull(),
  precoBase: numeric("preco_base", { precision: 10, scale: 2 }),
  duracao: varchar("duracao", { length: 60 }),
  ativo: boolean("ativo").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});