import { Router } from "express"
import authController from "../../controllers/user/auth.controller"
import apiRouteHandler from "../../utils/routeHandler"
import { validation } from "../../utils/validations/validateRequest"
import JwtAuth from "../../middlewares/jwt.middleware"

// =============================== USER AUTH ROUTES =============================== //

const authRoutesArray = [
    {
        method: 'get',
        path: '/ping',
        handler: authController.ping,
    },
    {
        method: 'post',
        path: '/register',
        handler: authController.registerUser,
        validation: validation('userRegisterValidator'),
        middleware: [JwtAuth]
    },
    {
        method: 'post',
        path: '/login',
        handler: authController.loginUser,
        validation: validation('userLoginValidator'),
        middleware: []
    }
]

const router = Router()
export default apiRouteHandler(authRoutesArray, router, true)