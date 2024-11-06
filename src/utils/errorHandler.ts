import { prepareErrorResponse } from "./responseHandler"

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

const errorHandler = (error: any, req: any, res: any, next: any) => {
    console.log("+ ============================== ERROR OCCURS ================================ +");
    const status = error.statusCode || 500
    const message = error.message
    return res.status(status).json(prepareErrorResponse(message))
}

export default { uncaughtExceptionHandler, unhandledRejectionHandler, errorHandler };