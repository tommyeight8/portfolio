import { TypeOf, z } from 'zod'

export const EmailSchema = z.object({
    senderEmail: z.string().min(1, 'Please enter your email.'),
    message: z.string()
        .min(10, 'Message must be 10 characters.')
        .max(300, 'Maximun of 300 characters.')
})

export type EmailType = z.infer<typeof EmailSchema>