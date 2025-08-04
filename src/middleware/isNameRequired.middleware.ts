import type { NextFunction, Request, Response } from "express";
import { createAppError } from "../errors/AppError";

export const isNameCategoryRequired = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    if (!name || name.trim() === "") {
      return next(createAppError(400, "Nome da categoria é obrigatório."));
    }
    return next();
  } catch (error) {
    next(error);
  }
};
