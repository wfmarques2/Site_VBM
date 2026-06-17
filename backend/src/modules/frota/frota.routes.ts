import { Router } from "express";
import { listFrota } from "./frota.controller.js";

export const frotaRoutes = Router();
frotaRoutes.get("/", listFrota);