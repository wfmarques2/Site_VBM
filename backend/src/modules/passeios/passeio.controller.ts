import type { Request, Response } from "express";
import { ok } from "../../utils/api-response.js";

export function listPasseios(_req: Request, res: Response) { return res.json(ok([])); }