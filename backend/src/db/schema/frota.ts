import { boolean, integer, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const frota = pgTable("frota", {
  id: uuid("id").defaultRandom().primaryKey(),
  nomeVeiculo: varchar("nome_veiculo", { length: 120 }).notNull(),
  capacidade: integer("capacidade").notNull(),
  categoria: varchar("categoria", { length: 60 }).notNull(),
  descricao: text("descricao").notNull(),
  imagemUrl: varchar("imagem_url", { length: 500 }),
  ativo: boolean("ativo").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});