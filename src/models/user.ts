import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  image: { 
    type: String 
  }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
