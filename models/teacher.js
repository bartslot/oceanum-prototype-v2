import mongoose from "mongoose";

//Teacher Model
const teacherSchema = new mongoose.Schema(
  {
    userId: { type: String, unique: true, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    schoolname: { type: String },
    classId: { type: String },
    //Used for SignIn
    accessToken: { type: String, default: null },
  },
  {
    //TimeStamp is used to track record date & time
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

//Exporting Teacher Model
export default mongoose.models.teacher ||
  mongoose.model("teacher", teacherSchema);
