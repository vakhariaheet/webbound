import ConfirmationEmail from '@/components/ConfirmationEmail';
import QueryNotification from '@/components/QueryNotificationEmail';
import { Resend } from 'resend';
import {format} from 'date-fns'
const resend = new Resend(process.env.RESEND_API_KEY);
const changeTimezone = (date:Date, ianatz:string) =>  {
    return new Date(date.toLocaleString('en-US', {
      timeZone: ianatz
    }));
  }
export async function POST(request: Request) {
    const { name,
        email,
        phone,
        message,
        service } = await request.json();
    try {
        const resp  = await Promise.all([
            await resend.emails.send({
                from: 'Webbound <no-reply@updates.webbound.in>',
                to: [ email ],
                subject: `Thank you for your query about ${service}, ${name} - Webbound`,
                react: ConfirmationEmail({ name, email, phone, message, service }),
                replyTo: "support@webbound.in",
            
            }),
            await resend.emails.send({
                from: 'Webbound <no-reply@mail.webbound.in>',
                to: [ 'support@webbound.in' ],
                replyTo: email,
                subject: `New Client Inquiry: ${service} - from ${name}`,
                react:QueryNotification({ name, email, phone, message, service,submissionTime:format(changeTimezone(new Date(),Intl.DateTimeFormat().resolvedOptions().timeZone),"PP - p ") }),
            })
        ])
        console.log(resp)
        return Response.json({
            message: 'Emails sent successfully',
            resp,
        });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}