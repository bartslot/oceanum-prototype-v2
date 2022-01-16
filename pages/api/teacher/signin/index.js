import teacherModel from "../../../../models/teacher";
import { comparePasswords, dbConnect, generateJwt } from "../../../../utils";

export default async function index(req, res) {
  //Connecting DATABASE
  await dbConnect();

  // Defining API request here.
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          error: true,
          message: "Cannot authorize user.",
        });
      }

      //1. Find if any account with that email exists in DB
      const user = await teacherModel.findOne({ email: email });

      // NOT FOUND - Throw error
      if (!user) {
        return res.status(404).json({
          error: true,
          message: "Account not found",
        });
      }

      //3. Verify the password is valid
      const isValid = await comparePasswords(password, user.password);

      if (!isValid) {
        return res.status(400).json({
          error: true,
          message: "Invalid credentials",
        });
      }

      //Generate Access token

      const { error, token } = await generateJwt(user.email, user.userId);
      console.log("err", error);
      if (error) {
        return res.status(500).json({
          error: true,
          message: "Couldn't create access token. Please try again later",
        });
      }
      user.accessToken = token;
      await user.save();

      //Success
      return res.send({
        success: true,
        message: "User logged in successfully",
        accessToken: token,
      });
    } catch (err) {
      console.error("Login error", err);
      return res.status(500).json({
        error: true,
        message: "Couldn't login. Please try again later.",
      });
    }
  }
}
