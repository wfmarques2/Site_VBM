import { Router, type Request, type Response } from "express";
import { ok } from "../../utils/api-response.js";

export const trackingRoutes = Router();
trackingRoutes.post("/reserva-click", (_req: Request, res: Response) => res.status(201).json(ok({ tracked: true })));