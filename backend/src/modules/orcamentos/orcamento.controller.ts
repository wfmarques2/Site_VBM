import type { Request, Response } from "express";
import { ok } from "../../utils/api-response.js";

export function createOrcamento(req: Request, res: Response) {
  return res.status(201).json(ok({ ...req.body, id: "placeholder" }));
}