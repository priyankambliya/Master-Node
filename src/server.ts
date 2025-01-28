import { config } from "dotenv";
config(); // Summon Env variables

import { createServer } from "http";
import { app } from "./app";
import MongoDbClient from "./db/mongoDbClient";
import AppString from "./utils/common/AppString";
import { ENV } from "./utils/envConfig";

const server = createServer(app)

server.listen(ENV.PORT, () => {
    MongoDbClient.on('connection', () => {
        console.log(AppString.DB.connection)
    })
    console.log(AppString.SERVER.connection_established)
})