import { Router } from "express";

export const authRouter = Router();

authRouter.get('/', register);
authRouter.get('/', login);

