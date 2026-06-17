import { Router } from "express";
import { listPasseios } from "./passeio.controller.js";

export const passeioRoutes = Router();
passeioRoutes.get("/", listPasseios);