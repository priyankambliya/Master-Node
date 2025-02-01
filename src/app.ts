import express, { Express, NextFunction, Request, Response } from 'express'
import AppString from './utils/common/AppString'
import errorHandler from "./utils/errorHandler";
import cors from 'cors'
import morgan from 'morgan'
import corsOptions from "./utils/corsOptions";
import { createDirectoryIfNotExists } from "./utils/common";
import { join } from "path";
import routes from "./routes"

export const app: Express = express()

app.use(cors(corsOptions))
app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

createDirectoryIfNotExists(join(__dirname, "../uploads/"))
app.use("/uploads", express.static(join(__dirname, "../uploads/")));

app.use("/api", routes)

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    errorHandler.errorHandler(error, req, res, next);
})

app.listen(() => {
    console.log(AppString.APP.connection_established + 1001)
})
