import connectMongo from "@/lib/mongodb";
import Reviews from "@/models/reviews";
import { NextRequest, NextResponse } from 'next/server';

export const DELETE = async (req: NextRequest) => {
  const reviewId = req.nextUrl.pathname.split('/').pop();
  if (!reviewId) {
    return new NextResponse(JSON.stringify({ message: "Review ID is required" }), { status: 400 });
  }

  try {
    await connectMongo();
    const deletedReview = await Reviews.findByIdAndDelete(reviewId);
    if (!deletedReview) {
      return new NextResponse(JSON.stringify({ message: "Review not found" }), { status: 404 });
    }

    return new NextResponse(JSON.stringify({ message: "Review deleted successfully", reviewId }), { status: 200 });
  } catch (error) {
    console.error("Error in deleting review:", error);
    return new NextResponse(JSON.stringify({ message: "Error deleting review", error }), { status: 500 });
  }
};

export const PUT = async (req: NextRequest) => {
  const reviewId = req.nextUrl.pathname.split('/').pop();
  if (!reviewId) {
    return new NextResponse(JSON.stringify({ message: "Review ID is required" }), { status: 400 });
  }
  
  const { message } = await req.json();
  await connectMongo();

  try {
    const updatedReview = await Reviews.findByIdAndUpdate(
      reviewId,
      { message },
      { new: true }
    );
    if (!updatedReview) {
      return new NextResponse(JSON.stringify({ message: "Review not found" }), { status: 404 });
    }
    return new NextResponse(JSON.stringify(updatedReview), { status: 200 });
  } catch (error) {
    console.error("Error updating review:", error);
    return new NextResponse(JSON.stringify({ message: "Error updating review", error }), { status: 500 });
  }
};