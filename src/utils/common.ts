import { Request, Response } from "express";
import { existsSync, mkdirSync } from "fs";

// FUNCTION FOR CREATE DIRECTORY:
const createDirectoryIfNotExists = (directoryPath: any) => {
    if (!existsSync(directoryPath)) {
        mkdirSync(directoryPath, { recursive: true })
    }
}

// ERROR HANDLER MIDDLEWARE:
const throwError = (message: string, statusCode: number = 500) => {
    const error = new Error(message);
    (error as any).statusCode = statusCode;
    throw error;
};

const use = (fn: any) => (req: Request, res: Response, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next)
}

export { createDirectoryIfNotExists, throwError, use };

