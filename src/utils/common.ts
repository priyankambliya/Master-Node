import { Request, Response } from "express";
import multer, { FileFilterCallback } from "multer";
import path from "path";

const fs = require("fs")
const currentDate = new Date()
const md5 = require("md5");

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

export const commonFileStorage = (destination: any) =>
    multer.diskStorage({
        destination: (
            request: Request,
            file: any,
            callback: DestinationCallback
        ): void => {
            callback(null, destination);
        },

        filename: (req: Request, file: any, callback: FileNameCallback): void => {
            callback(
                null,
                md5(file.originalname) +
                "-" +
                Date.now() +
                path.extname(file.originalname)
            );
        },
    });

export const fileFilter = (
    request: Request,
    file: any,
    callback: FileFilterCallback
): void => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/webp" ||
        file.mimetype === "image/svg+xml"
    ) {
        callback(null, true);
    } else {
        callback(new Error("Only .png, .jpg and .jpeg .webp .svg format allowed!"));
    }
};



// FUNCTION FOR CREATE DIRECTORY:
const createDirectoryIfNotExists = (directoryPath: any) => {
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true })
    }
}

// ERROR HANDLER MIDDLEWARE:
const throwError = (message: any, code: number) => {
    const error: any = new Error(message)
    error.statusCode = code
    throw error
}

const use = (fn: any) => (req: Request, res: Response, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next)
}

export { createDirectoryIfNotExists, currentDate, throwError, use };
