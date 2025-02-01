import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

let zodValidationErrorHandler = (error: any, res: Response) => {
    return res.status(409).json({
        error: error.errors.reduce((acc: Record<string, string>, err: any) => {
            const path = err.path.join('.');
            acc[path] = err.message;
            return acc;
        }, {})
    })
}

let commonErrorHandlers = (error: any, res: Response) => {
    const status = error?.statusCode || 409
    const message = error.message
    return res.status(status).json({ error: message })
}

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {

    // Handle Zod validation errors
    if (error instanceof ZodError) zodValidationErrorHandler(error, res)
    // Thrown errors 
    if (error instanceof Error) commonErrorHandlers(error, res)
}

export default { errorHandler };