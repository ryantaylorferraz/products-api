import type { Request, Response } from "express";
import { prisma } from "../database/prisma"

export const getAllProducts = async (req: Request, res: Response) => {
    const products = await prisma.product.findMany({include: {category: true}});
    return res.status(200).json({message: "Produtos listados com sucesso", data: products});
}

export const createProduct = async (req: Request, res: Response) => {
    const {name, price, categoryId} = req.body;
    const product = await prisma.product.create({data: {name, price, categoryId}});
    return res.status(201).json({message: "Produto criado com sucesso.", data:product})
};