import { model, Schema } from "mongoose";
import AppStatic from "../utils/common/AppStatic";

interface UserModelDoc {
    fullName: string;
    email: string;
    password: string;
    status: number;
    isDeleted: boolean;
}

const userModelSchema = new Schema<UserModelDoc>({
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
    status: { type: Number, default: 1, comment: '1 -> Active | 2 -> In-Active' },
    isDeleted: { type: Boolean, default: false }
})

export const User = model(AppStatic.modelConstants.UserModel, userModelSchema, 'user')
