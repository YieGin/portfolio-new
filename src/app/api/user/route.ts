import connectMongo from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  const body = await new Response(req.body).json()
  console.log("Received body:", body);
  await connectMongo();

  try {
    const { auth0Id, email, name } = body;

    if (!auth0Id || !email) {
      return new NextResponse(
        JSON.stringify({ message: "Missing required fields: auth0Id, email" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      return NextResponse.json(existingUser, { status: 200 });
    }

    const newUser = new User({ auth0Id, email, name });
    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.log(err);
    NextResponse.json({ msg: "Error creating user!" })
  }
}