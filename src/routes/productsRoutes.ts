import { Router } from "express";
import { createProduct, getAllProducts } from "../controller/productController";
import { validateProduct } from "../middleware/validateProduct.middleware";

export const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", validateProduct, createProduct);