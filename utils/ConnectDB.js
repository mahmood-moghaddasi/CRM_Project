import mongoose from "mongoose";
async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("DB Not Connected");
  }
}
export default connectDB;
