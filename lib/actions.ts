'use server'

import { Resend } from 'resend'
import { getErrorMessage } from './getErrorMessage'
import { EmailSchema, EmailType } from './types'
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('email')
    const message = formData.get('message')

    const parse = EmailSchema.safeParse({
        senderEmail,
        message
    })

    let zodErrors = {}

    if(!parse.success) {
        parse.error.issues.forEach(issue => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message}
        })
    }

    if(!message || !senderEmail) {
        return {
            error: 'invalid email or message'
        }
    }

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'tommyxlanes@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            text: message as string
        })
    } catch (error) {
        return Object.keys(zodErrors).length > 0 
            ? { errors: zodErrors }
            : { success: true } 
    }
    
}