import { NextFunction, Request, Response } from "express";
import { prepareErrorResponse } from "./responseHandler"
import { ZodError } from "zod";

const uncaughtExceptionHandler = (error: any, origin: any) => {
    console.log("----- Uncaught exception -----");
    console.log(error);
    console.log("----- Exception origin -----");
    console.log(origin);
}

const unhandledRejectionHandler = (reason: any, promise: any) => {
    console.log("----- Unhandled Rejection at -----");
    console.log(promise);
    console.log("----- Reason -----");
    console.log(reason);
}

let zodValidationErrorHandler = (error: any, res: Response) => {
    return res.status(401).json({
        error: error.errors.reduce((acc: Record<string, string>, err: any) => {
            const path = err.path.join('.');
            acc[path] = err.message;
            return acc;
        }, {})
    })
}

let commonErrorHandlers = (error: any, res: Response) => {
    const status = error?.statusCode || 401
    const message = error.message
    return res.status(status).json(prepareErrorResponse(message))
}

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {

    // Handle Zod validation errors
    if (error instanceof ZodError) zodValidationErrorHandler(error, res)
    // Thrown errors 
    if (error instanceof Error) commonErrorHandlers(error, res)
}

export default { uncaughtExceptionHandler, unhandledRejectionHandler, errorHandler };