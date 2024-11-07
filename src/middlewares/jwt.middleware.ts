import { NextFunction, Request, Response } from "express"
import { throwError } from "../utils/common"
import AppString from "../utils/common/AppString"
import { verify } from "jsonwebtoken"
import { ENV } from "../utils/envConfig"

const JwtAuth = () => async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get("Authorization")
    if (!authHeader) {
        return throwError(AppString.AUTH.token_not_found, 401)
    }

    const token = authHeader.split(" ")[1]
    let decodedToken

    try {
        // verify token here
        decodedToken = verify(token, ENV.JWT_ACCESS_SECRET as string)
    } catch (error: any) {
        return throwError(AppString.AUTH.token_miss_match, 401)
    }

    if (!decodedToken) {
        return throwError(AppString.AUTH.token_miss_match, 401)
    }

    // req.user = user;
    next()
}

export default JwtAuth