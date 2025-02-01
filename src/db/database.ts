import mongoose from "mongoose"

export default mongoose.connect("mongodb://127.0.0.1:27017/test-db")
    .then(() => console.log("DB CONNECTION ESTABLISHED"))
    .catch(() => console.log("Failed to connect to database"))
