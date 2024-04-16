import connectMongo from "@/lib/mongodb";
import Reviews from "@/models/reviews";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { message, createdAt, user: auth0Id, name, email, image } = await req.json();
  await connectMongo();

  if (!message || !auth0Id) {
    return new NextResponse(JSON.stringify({
      message: "Missing required fields: user, message",
    }), { status: 400 });
  }

  try {
    const user = await User.findOneAndUpdate(
      { auth0Id },
      { auth0Id, name, email, image },
      { new: true, upsert: true }
    );

    const existingReview = await Reviews.findOne({ user: user._id });
    if (existingReview) {
      return new NextResponse(JSON.stringify({
        message: "You have already submitted a review."
      }), { status: 403 });
    }

    const newReview = new Reviews({
      user: user._id,
      message,
      createdAt,
    });    
    const savedReview = await newReview.save();
    return new NextResponse(JSON.stringify(savedReview), { status: 201 });
  } catch (err) {
    console.error("Error in saving review:", err);
    return new NextResponse(JSON.stringify({
      message: "Error creating review", error: err
    }), { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  await connectMongo();

  try {
    const reviews = await Reviews.find({}).populate("user", "auth0Id email name image");
    return NextResponse.json(reviews, { status: 200 });
  } catch (err) {
    console.error("Error retrieving reviews:", err);
    return NextResponse.json({
      message: "Failed to retrieve reviews", error: err
    }, { status: 500 });
  }
};

