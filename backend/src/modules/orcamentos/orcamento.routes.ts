import { Router } from "express";
import { createOrcamento } from "./orcamento.controller.js";
import { validateBody } from "../../middlewares/validate.middleware.js";
import { createOrcamentoSchema } from "./orcamento.schema.js";

export const orcamentoRoutes = Router();
orcamentoRoutes.post("/", validateBody(createOrcamentoSchema), createOrcamento);