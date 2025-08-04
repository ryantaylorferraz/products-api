import type { NextFunction, Request, Response } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || "Erro interno do servidor.";
    const stack = process.env.NODE_ENV === "development" ? err.stack : undefined;
    return res.status(status).json({error: message, stack})
}