import express, { Express } from 'express'
import AppString from './utils/common/AppString'
import { ENV } from './utils/envConfig'

export const app: Express = express()

app.listen(() => {
    console.log(AppString.APP.connection_established + ENV.PORT)
})
