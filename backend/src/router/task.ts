import { Router } from "express";

export const taskRouter = Router();

taskRouter.get('/', getAllTask)