import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const PasswordModel = mongoose.model("password", passwordSchema);
export default PasswordModel;
