import { z } from "zod"

export const AuthSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres." })
    .regex(/[A-Za-z]/, { message: "A senha deve conter pelo menos uma letra." })
    .regex(/\d/, { message: "A senha deve conter pelo menos um número." }),
})


export type AuthSchemaType = z.infer<typeof AuthSchema>
