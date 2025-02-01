import { z } from "zod"

export const userLoginValidator = z.object({
    email: z
        .string({ required_error: 'username is required!' })
        .email({ message: 'email is required' }),
    password: z
        .string({ required_error: 'password is required!' })
        .min(6, 'password is at least 6 character long!')
        .max(16, 'please reduce your password strength!'),
    confirmPassword: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
            path: ['confirmPassword'],
            message: 'password and confirm password should be same!',
            expected: 'string',
            received: typeof data.confirmPassword,
            code: 'invalid_literal'
        })
    }
})
