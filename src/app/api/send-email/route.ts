import { sendMail } from '@/utlis/mail';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, firstName, lastName, message } = await req.json();
  try {
    await sendMail({
      from: email,
      firstName: firstName,
      lastName: lastName,
      body: message,
    });
    return new NextResponse(JSON.stringify({ message: 'Mail sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}