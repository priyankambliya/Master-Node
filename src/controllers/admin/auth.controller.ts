import { Request, Response } from "express";
import { prepareNormalResponse } from "../../utils/responseHandler";
import AppString from "../../utils/common/AppString";

// =============================== ADMIN AUTH CONTROLLER =============================== //

// Auth Ping
function ping(req: Request, res: Response) {
    return res.json(prepareNormalResponse('Auth pong..'))
}

// Register User
function registerUser(req: Request, res: Response) {
    // register logic here
    return res.json(prepareNormalResponse(AppString.AUTH.login))
}

// Login User
function loginUser(req: Request, res: Response) {
    // login logic here
    // jwt token logic generation
    return res.json(prepareNormalResponse(AppString.AUTH.login))
}

export default { ping, registerUser, loginUser }