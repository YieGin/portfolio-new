import nodemailer from 'nodemailer';
import { getEmailTemplate } from './emailTemplate';
import { EmailTemplateParams } from '@/types';

export async function sendMail({
  from,
  firstName,
  lastName,
  body,
}: EmailTemplateParams) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log('Connection to SMTP server verified:', testResult);
  } catch (err) {
    console.error('Error verifying SMTP server connection:', err);
    return;
  }

  try {
    const emailHTML = getEmailTemplate({ from, firstName, lastName, body });
    const sendResult = await transport.sendMail({
      from: from,
      to: process.env.SMTP_EMAIL,
      replyTo: from,
      html: emailHTML
    });
    console.log('Email sent successfully:', sendResult);
  } catch (err) {
    console.error('Error sending email:', err);
  }
}