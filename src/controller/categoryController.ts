import type { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { createAppError } from "../errors/AppError";

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const categories = await prisma.category.create({ data: { name } });
    return res.status(201).json({message: "Categoria criada com sucesso.", data: categories});
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await prisma.category.findMany({ include: { products: true } });
    return res.status(200).json({message: "Categorias listada com sucesso.", data: categories});
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const update = await prisma.category.update({
      where: { id: Number(id) },
      data: { name },
    });

    return res.status(200).json({message: "Categoria atualizada com sucesso.", data: update});
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const hasProducts = await prisma.product.findFirst({ where: { categoryId: Number(id) } });

    if (hasProducts) {
      return next(createAppError(400, "Não é possível remover categoria que ainda possui produtos."));
    }

    await prisma.category.delete({
      where: { id: Number(id) },
    });

    return res.status(204).json({message: "Categoria deletada com sucesso."});
  } catch (error) {
    next(error);
  }
};
