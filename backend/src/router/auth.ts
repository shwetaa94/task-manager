import { Router } from "express";
import { login, register } from "../controller/auth";

export const authRouter = Router();

authRouter.get('/', register);
authRouter.get('/', login);

