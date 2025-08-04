import type { NextFunction, Request, Response } from "express";
import { createAppError } from "../errors/AppError";

export const validateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { name, price, categoryId } = req.body;

  if (!name || typeof name !== "string") {
    return next(createAppError(400, "Nome do produto obrigatório e deve ser string."));
  }

  if (typeof price !== "number" || price <= 0) {
    return next(createAppError(400, "Preço do produto inválido."));
  }

  if (!categoryId || typeof categoryId !== "number") {
    return next(createAppError(400, "categoryId obrigatório e deve ser number."));
  }

  next();
};
