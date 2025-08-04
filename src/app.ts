import express, { json } from "express";
import { productRouter } from "./routes/productsRoutes";
import { categoryRouter } from "./routes/categoryRoutes";
import { errorHandler } from "./middleware/errorHandler";
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.use(errorHandler);
