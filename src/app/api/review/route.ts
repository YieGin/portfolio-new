// POST handler for reviews
import connectMongo from "@/lib/mongodb";
import Reviews from "@/models/reviews";
import User from "@/models/user";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  const body = await new Response(req.body).json();
  await connectMongo();
  const { message, user: auth0Id, name, email, image } = body;

  if (!message || !auth0Id) {
    console.log("Missing fields", { message, auth0Id });
    return NextResponse.json({
      message: "Missing required fields: user, message",
    });
  }

  try {
    const user = await User.findOneAndUpdate(
      { auth0Id },
      { auth0Id, name, email, image },
      { new: true, upsert: true }
    );

    const newReview = new Reviews({
      user: user._id,
      message,
    });

    const savedReview = await newReview.save();
    return NextResponse.json(savedReview, { status: 201 });
  } catch (err) {
    console.error("Error in saving review:", err);
    return NextResponse.json({ message: "Error creating review", error: err });
  }
}

export async function GET(req: NextApiRequest) {
  await connectMongo();

  try {
    const reviews = await Reviews.find({}).populate("user", "email name image");
    return NextResponse.json(reviews, { status: 200 });
  } catch (err) {
    console.error("Error retrieving reviews:", err);
    return NextResponse.json({
      message: "Failed to retrieve reviews",
      error: err,
    });
  }
}

