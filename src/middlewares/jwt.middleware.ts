import { NextFunction, Request, Response } from "express"
import { } from ''
import { throwError } from "../utils/common"
import AppString from "../utils/common/AppString"


const JwtAuth = () => async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get("Authorization")
    if (!authHeader) {
        return throwError(AppString.AUTH.token_not_found, 401)
    }

    const token = authHeader.split(" ")[1]
    let decodedToken

    try {
        decodedToken = verify(token, config.get("JWT_ACCESS_SECRET"))
    } catch (error: any) {
        throwError(appString.INVALID_ACCESS_TOKEN, 401)
    }

    if (!decodedToken) {
        throwError(appString.AUTH_TOKEN_MISSING, 401)
    }

    const user = await User.findOne({ _id: decodedToken.id }).lean().select('-password -updatedAt -__v')

    if (!user) {
        throwError(appString.AUTH_USER_MISSING, 401)
    }

    const role = user.role
    const authorized = expectedRole.includes(role)

    if (!authorized) {
        throwError(appString.AUTH_USER_PERMISSION_DENIED, 401)
    }

    req.user = user;
    next()
}

export {
    JwtAuth
}
