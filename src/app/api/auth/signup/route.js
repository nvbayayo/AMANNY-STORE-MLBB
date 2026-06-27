import bcrypt from "bcryptjs";

import User from "@/models/User";

import {
  connectDB,
} from "@/lib/mongodb";

export async function POST(req) {

  try {

    await connectDB();

    const {
      username,
      email,
      password,
    } = await req.json();

    const exists =
      await User.findOne({
        email,
      });

    if (exists) {

      return Response.json(
        {
          error:
            "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    await User.create({
      username,
      email,
      password:
        hashedPassword,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    return Response.json(
      {
        error:
          "Signup failed",
      },
      {
        status: 500,
      }
    );
  }
}
