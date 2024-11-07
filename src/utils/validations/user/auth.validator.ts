import { z } from "zod"

export const userRegisterValidator = z.object({
    email: z
        .string({ required_error: 'email is required!' })
        .email({ message: 'email is required' }),
    password: z
        .string({ required_error: 'password is required!' })
        .min(6, 'Password is at least 6 character long!')
        .max(16, 'Please reduce your password strength!')
})

export const userLoginValidator = z.object({
    email: z
        .string({ required_error: 'username is required!' })
        .email({ message: 'email is required' }),
    password: z
        .string({ required_error: 'password is required!' })
        .min(6, 'password is at least 6 character long!')
        .max(16, 'please reduce your password strength!')
});
