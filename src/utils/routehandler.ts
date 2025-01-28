import { use } from "./common"

const apiRouteHandler = (routes: any, prefix: any, isAdmin: boolean) => {
    routes.forEach((route: any) => {
        const method = route.method as "get" | "post" | "put" | "delete" | "patch"
        const path = route.path
        const controller = route.handler
        const validation = route.validation ?? []
        let middlewares: any[] = []
        let routeMiddlewares: any[] = route.middleware
        routeMiddlewares?.length > 0 && routeMiddlewares.map((middleware) => middlewares.push(use(middleware)))
        if (validation.length > 0) middlewares.push(use(validation))
        middlewares?.push(use(controller))
        prefix[method] && prefix[method](path, ...middlewares)
    })

    return prefix
}

export default apiRouteHandler