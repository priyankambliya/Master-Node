import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import { Types } from "mongoose"
import { User } from "../models/user.model"
import { throwError } from "../utils/common"
import AppString from "../utils/common/AppString"

const JwtAuth = (role: number) => async (req: Request, res: Response, next: NextFunction) => {

    const token = getTokenFromBearerToken(req)
    if (!token) return throwError(AppString.COMMON.something_went_wrong, 401)

    let decodedToken: any
    try {
        decodedToken = verify(token, "ENV.JWT_ACCESS_SECRET" as string)
    } catch (error) {
        return throwError(AppString.COMMON.something_went_wrong, 401)
    }

    if (!decodedToken) {
        return throwError(AppString.COMMON.something_went_wrong, 401)
    }

    const user = await User.findOne({ _id: decodedToken?.id, isDeleted: false })
    if (!Types.ObjectId.isValid(user?._id)) return throwError(AppString.COMMON.something_went_wrong, 401)

    // req.user = user
    next()
}

function getTokenFromBearerToken(req: Request): string | null {
    const authHeader: string = req.get("Authorization")
    if (!authHeader) {
        return throwError(AppString.COMMON.something_went_wrong, 401)
    }
    let token = authHeader.split(" ")[1]
    if (typeof token === 'string') return token
    return null
}

export default JwtAuth