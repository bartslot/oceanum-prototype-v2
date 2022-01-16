import mongoose from "mongoose";

//Student Model
const studentSchema = new mongoose.Schema(
  {
    userId: { type: String, unique: true, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    schoolname: { type: String },
    teachername: { type: String },
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

//Exporting Student Model
export default mongoose.models.student ||
  mongoose.model("student", studentSchema);
