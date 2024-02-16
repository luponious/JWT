import { Router } from "express";
import { postOrderController } from "../controllers/order.controller";

export const ordersRouter = Router();

ordersRouter.post("/", postOrderController);
