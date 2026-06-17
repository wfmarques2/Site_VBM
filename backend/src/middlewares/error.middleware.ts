import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { fail } from "../utils/api-response.js";

export function errorMiddleware(error: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (error instanceof ZodError) {
    return res.status(400).json(fail("VALIDATION_ERROR", "Dados invalidos", error.flatten()));
  }
  return res.status(500).json(fail("INTERNAL_ERROR", "Erro interno no servidor"));
}