import {z} from "zod"; 

export const signinSchema = z.object(
    {
        identifier: z.string().email({message: "Inavlid email format"}), //email
        password: z.string()
    }
)