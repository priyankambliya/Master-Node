import { config } from "dotenv";
config();

import { createServer } from "http";
import { app } from "./app";
import AppString from "./utils/common/AppString";

const server = createServer(app)

server.listen(1001, () => {
    import('./db/database')
    console.log(AppString.SERVER.connection_established)
})