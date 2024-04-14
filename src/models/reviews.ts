import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: {
    type: String,
  },
});

const Reviews = mongoose.models.Reviews || mongoose.model('Reviews', reviewsSchema);
export default Reviews;
