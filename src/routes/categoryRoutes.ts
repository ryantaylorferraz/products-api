import { Router } from "express";
import { isNameCategoryRequired } from "../middleware/isNameRequired.middleware";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../controller/categoryController";

export const categoryRouter = Router();

categoryRouter.get("/", getCategories);
categoryRouter.post("/", isNameCategoryRequired, createCategory);
categoryRouter.patch("/:id", isNameCategoryRequired, updateCategory);
categoryRouter.delete("/:id", deleteCategory);
