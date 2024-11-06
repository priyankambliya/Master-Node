import { MongoClient } from "mongodb";
import { ENV } from "../utils/envConfig";

const mongodbLocalConnectionString = ENV.DATABASE_URL
const MongoDbClient = new MongoClient(mongodbLocalConnectionString, { ssl: true })

export default MongoDbClient