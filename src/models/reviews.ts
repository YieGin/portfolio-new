import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: {
    type: String,
  },
  rating: {
    type: Number,
  },
  createdAt: { type: Date, default: Date.now },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

reviewsSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toISOString().split('T')[0];
});

const Reviews = mongoose.models.Reviews || mongoose.model('Reviews', reviewsSchema);
export default Reviews;
