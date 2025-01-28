import { JWT_User_Props } from "../utils/interfaces/common_interface";

export { };

declare global {
    namespace Express {
        export interface Request {
            user: JWT_User_Props
        }
    }
}