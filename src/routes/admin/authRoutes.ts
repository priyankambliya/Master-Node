import { Router } from "express"
import authController from "../../controllers/admin/auth.controller"
import apiRouteHandler from "../../utils/routeHandler"

// =============================== ADMIN AUTH ROUTES =============================== //

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
        // validation: validation('registerValidator'),
    },
    {
        method: 'post',
        path: '/login',
        handler: authController.loginUser,
        // validation: validation('loginValidator'),
    }
]

const router = Router()
export default apiRouteHandler(authRoutesArray, router, true)