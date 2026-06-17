import { integer, pgEnum, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const reservaStatusEnum = pgEnum("reserva_status", ["pendente", "confirmada", "cancelada"]);
export const reservaCanalEnum = pgEnum("reserva_canal", ["whatsapp", "site", "api", "partner"]);

export const reservas = pgTable("reservas", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: varchar("nome", { length: 120 }).notNull(),
  telefone: varchar("telefone", { length: 30 }).notNull(),
  origem: varchar("origem", { length: 255 }).notNull(),
  destino: varchar("destino", { length: 255 }).notNull(),
  dataHora: varchar("data_hora", { length: 40 }).notNull(),
  passageiros: integer("passageiros").notNull(),
  bagagens: varchar("bagagens", { length: 120 }),
  observacoes: text("observacoes"),
  canal: reservaCanalEnum("canal").default("whatsapp").notNull(),
  status: reservaStatusEnum("status").default("pendente").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});