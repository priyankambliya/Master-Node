import express, { Express } from 'express'
import AppString from './utils/common/AppString'
import { ENV } from './utils/envConfig'
import errorHandler from "./utils/errorHandler";
import cors from 'cors'
import morgan from 'morgan'
import corsOptions from "./utils/corsOptions";
import { createDirectoryIfNotExists } from "./utils/common";
import { join } from "path";
import routes from "./routes"

export const app: Express = express()

// Handling uncaught exceptions and unhandled rejections
process.on("uncaughtException", errorHandler.uncaughtExceptionHandler);
process.on("unhandledRejection", errorHandler.unhandledRejectionHandler);

// Cors Options
app.use(cors(corsOptions))

// Morgan for logging
app.use(morgan("dev"))

// Manage JSON data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.set('view engine', 'ejs');

createDirectoryIfNotExists(join(__dirname, "../uploads/"))
app.use("/uploads", express.static(join(__dirname, "../uploads/")));

// handle routes
app.use("/api", routes)

// handle errors
app.use(errorHandler.errorHandler)

app.listen(() => {
    console.log(AppString.APP.connection_established + ENV.PORT)
})
