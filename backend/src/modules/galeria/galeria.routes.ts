import { Router } from "express";
import { listGaleria } from "./galeria.controller.js";

export const galeriaRoutes = Router();
galeriaRoutes.get("/", listGaleria);