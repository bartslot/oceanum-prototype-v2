import teacherModel from "../../../../models/teacher";
import { hashPassword, dbConnect } from "../../../../utils";
import { teacherVal } from "../../../../utils/validation";
import { v4 as uuid } from "uuid";

//Validating Inputed data in frontend

export default async function index(req, res) {
  //Connecting DATABASE
  await dbConnect();

  // Defining API request here.
  if (req.method === "POST") {
    try {
      const result = teacherVal.validate(req.body);
      if (result.error) {
        console.log(result.error.message);
        return res.json({
          error: true,
          status: 400,
          message: result.error.message,
        });
      }
      //Check if the email has been already registered.
      var student = await teacherModel.findOne({
        email: result.value.email,
      });
      if (student) {
        return res.json({
          error: true,
          message: "Email is already in use",
        });
      }
      const hash = await hashPassword(result.value.password);
      //Generate unique id for the user.
      const id = uuid();
      result.value.userId = id;
      result.value.password = hash;
      const newStudent = new teacherModel(result.value);
      await newStudent.save();
      return res.status(200).json({
        success: true,
        message: "Registration Success",
      });
    } catch (error) {
      console.error("signup-error", error);
      return res.status(500).json({
        error: true,
        message: "Cannot Register",
      });
    }
  } else {
    return res.status("200").send({ Testing: "Hello" });
    // Handle any other HTTP method
  }
}
