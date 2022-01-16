import { compare, genSalt, hash } from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

import mongoose from "mongoose";

export const JWT_secretyKey = "secretKey##$$$";

export async function dbConnect() {
  console.log("Connection triggered");
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      dbName: "oceanumDB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    throw err;
  }
}

//Hashing Password to make it secure

export const hashPassword = async (password) => {
  try {
    const salt = await genSalt(10);
    return await hash(password, salt);
  } catch (error) {
    throw new Error("Hashing failed", error);
  }
};

const options = {
  expiresIn: "100000h",
};

export async function generateJwt(email, userId) {
  try {
    const payload = { email: email, id: userId };
    const token = await jsonwebtoken.sign(payload, JWT_secretyKey, options);
    return { error: false, token: token };
  } catch (error) {
    return { error: true };
  }
}

///Comparing password for authentication purpose.

export const comparePasswords = async (inputPassword, hashedPassword) => {
  try {
    return await compare(inputPassword, hashedPassword);
  } catch (error) {
    throw new Error("Comparison failed", error);
  }
};
