import { render } from '@react-email/components';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { Email } from "./Email";


const mailerSend: MailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY || '',
});

const emailHtml = await render(<Email name="Jennifer Hodge" email="jenniferehodge1@gmail.com" message="Hello, this is a test email." />);

const sentFrom = new Sender("jenniferehodge1@gmail.com", "Jennifer Hodge");

const recipients = [
    new Recipient("jenniferehodge1@gmail.com", "Jennifer Hodge"),
];


const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setSubject("This is a Subject")
  .setHtml(emailHtml)

await mailerSend.email.send(emailParams);