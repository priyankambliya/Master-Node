import { Request, Response } from "express";
import { prepareNormalResponse } from "../../utils/responseHandler";
import AppString from "../../utils/common/AppString";
import { throwError } from "../../utils/common";

// =============================== USER AUTH CONTROLLER =============================== //

// Auth Ping
function ping(req: Request, res: Response) {
    return res.json(prepareNormalResponse(`Auth pong..${process.pid}`,))
}

// Register User
function registerUser(req: Request, res: Response) {
    // register logic here
    let a = 1
    if (a == 1) return throwError('Not Implemented', 501)
    return res.json(prepareNormalResponse(AppString.AUTH.login))
}

// Login User
function loginUser(req: Request, res: Response) {
    // login logic here
    // jwt token logic generation
    return res.json(prepareNormalResponse(AppString.AUTH.login))
}

export default { ping, registerUser, loginUser }