import { ZodSchema } from "zod";
import validators from "./validators";
import { NextFunction, Request, Response } from "express";

type ValidatorKeys = keyof typeof validators;

export const validation = (validatorName: ValidatorKeys) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const validatorSchema: ZodSchema = validators[validatorName]
        validatorSchema.parse(req.body);
        next();
    }
}