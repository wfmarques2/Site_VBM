import { Router } from "express";
import { listAvaliacoes } from "./avaliacao.controller.js";

export const avaliacaoRoutes = Router();
avaliacaoRoutes.get("/", listAvaliacoes);