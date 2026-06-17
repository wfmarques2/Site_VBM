import { boolean, pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const adminRoleEnum = pgEnum("admin_role", ["owner", "editor"]);

export const admins = pgTable("admins", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: varchar("nome", { length: 120 }).notNull(),
  email: varchar("email", { length: 160 }).notNull().unique(),
  senhaHash: varchar("senha_hash", { length: 255 }).notNull(),
  role: adminRoleEnum("role").default("editor").notNull(),
  ativo: boolean("ativo").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});