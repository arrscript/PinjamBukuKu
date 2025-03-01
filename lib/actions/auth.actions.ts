"use server";

import { signIn } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

const signInWithCredentials = async (
  params: AuthLoginRequest
): Promise<ApiResponse> => {
  const { email, password } = params;

  // const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  // const { success } = await ratelimit.limit(ip);
  // if (!success) return redirect("/too-fast");

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log("test success:", false);
      return { success: false, error: result.error };
    }
    console.log("test success:", true);

    return { success: true };
  } catch (error) {
    console.log(error, "Signin error");
    return { success: false, error: "Signin error" };
  }
};
const signUp = async (params: AuthCredentials): Promise<ApiResponse> => {
  const { fullName, email, universityId, password, universityCard } = params;

  // const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  // const { success } = await ratelimit.limit(ip);

  // if (!success) return redirect("/too-fast");

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.insert(users).values({
      fullName,
      email,
      universityId,
      password: hashedPassword,
      universityCard,
    });

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.log(error, "Signup error");
    return { success: false, error: "Signup error" };
  }
};

export { signInWithCredentials, signUp };
