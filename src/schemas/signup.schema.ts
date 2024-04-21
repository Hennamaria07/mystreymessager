import {z} from 'zod';

export const usernameValidation = z.string()
.min(2, "Username must be contain atleast 2 characters")
.max(20, "Username cannot exceed more than 20 characters")
.regex(/^[a-zA-Z0-9_]+$/, "Username cannot contain any special characters")

export const signupSchema = z.object(
    {
        username: usernameValidation,
        email: z.string().email({message: "Invalid email address"}),
        password: z.string().min(6, {message: "Password should be atleast 6 characters"})
    }
)