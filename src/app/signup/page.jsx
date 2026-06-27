"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const [showPassword, setShowPassword] =
    useState(false);

  const handleSignup = () => {
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      username,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "loggedIn",
      "true"
    );

    alert("Account Created Successfully ✅");

    router.push("/");
  };

  return (
    <main
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('/signup-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full max-w-md bg-black/60 backdrop-blur-lg border border-pink-500 rounded-3xl p-8 text-white">

        <h1 className="text-4xl font-bold text-center text-pink-400">
          CREATE ACCOUNT
        </h1>

        <p className="text-center text-gray-300 mt-2">
          Welcome to AMANNY STORE
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full mt-6 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-pink-500 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full mt-4 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-pink-500 outline-none"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full mt-4 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-pink-500 outline-none"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          className="w-full mt-4 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-pink-500 outline-none"
        />

        <button
          onClick={() =>
            setShowPassword(!showPassword)
          }
          className="text-pink-400 text-sm mt-2"
        >
          {showPassword
            ? "Hide Password"
            : "Show Password"}
        </button>

        <button
          onClick={handleSignup}
          className="w-full mt-6 bg-pink-500 hover:bg-pink-600 py-3 rounded-xl font-bold transition"
        >
          Create Account
        </button>

        <p className="text-center mt-6 text-gray-300">
          Already have an account?
          <Link
            href="/login"
            className="text-pink-400 ml-2 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </main>
  );
        }
