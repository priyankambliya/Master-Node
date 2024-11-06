import { createServer } from "http";
import { config } from "dotenv";
// Summon Env variables
config()
import { app } from "./app";
import AppString from "./utils/common/AppString";
import MongoDbClient from "./db/mongoDbClient";

import { ENV } from "./utils/envConfig";

// Create main App server
const server = createServer(app)

server.listen(ENV.PORT, () => {
    MongoDbClient.on('connection', () => {
        console.log(AppString.DB.connection)
    })
    console.log(AppString.SERVER.connection_established)
})