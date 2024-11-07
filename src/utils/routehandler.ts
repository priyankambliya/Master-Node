import { use } from "./common"

const apiRouteHandler = (routes: any, prefix: any, flag: boolean) => {
    routes.forEach((route: any) => {
        const method = route.method as "get" | "post" | "put" | "delete" | "patch"
        const path = route.path
        const controller = route.handler
        const validation = route.validation ?? []
        let middlewares = route.middleware ?? []
        if (validation.length > 0) middlewares.push(use(validation))
        middlewares?.push(use(controller))
        prefix[method] && prefix[method](path, ...middlewares)
    })

    return prefix
}

export default apiRouteHandler