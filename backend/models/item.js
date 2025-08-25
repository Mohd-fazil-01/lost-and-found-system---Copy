import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["lost", "found"], default: "lost" },
  location: { type: String },
  contact: { type: String },
}, { timestamps: true });

export default mongoose.model("Item", ItemSchema);
