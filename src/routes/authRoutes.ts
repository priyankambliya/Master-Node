import { Router } from "express"
const router = Router()

const authRoutesArray = [
    {
        method: 'post',
        path: '/register',
        // handler: authController.register,
        // validation: validation('registerValidator'),
        middleware: []
    },
    {
        method: 'post',
        path: '/login',
        // handler: authController.login,
        // validation: validation('loginValidator'),
        middleware: []
    }
]

export default router