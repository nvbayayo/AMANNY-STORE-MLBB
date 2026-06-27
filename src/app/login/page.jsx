"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const login = () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      user &&
      user.username === username &&
      user.password === password
    ) {
      localStorage.setItem(
        "loggedIn",
        "true"
      );

      alert("Login Successful!");

      router.push("/");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <main
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage:
          "url('/login-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-black/60 backdrop-blur-lg border border-cyan-500 rounded-3xl p-8 text-white shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-cyan-400">
          LOGIN
        </h1>

        <p className="text-center text-gray-300 mt-2">
          Welcome Back To AMANNY STORE
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full mt-8 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-cyan-500 outline-none"
        />

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full mt-4 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-cyan-500 outline-none"
        />

        <button
          onClick={() =>
            setShowPassword(
              !showPassword
            )
          }
          className="text-cyan-400 text-sm mt-2"
        >
          {showPassword
            ? "Hide Password"
            : "Show Password"}
        </button>

        <button
          onClick={login}
          className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 transition py-3 rounded-xl font-bold"
        >
          Login
        </button>

        <p className="text-center mt-6 text-gray-300">
          Don't have an account?
          <Link
            href="/signup"
            className="text-cyan-400 ml-2 font-semibold"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </main>
  );
}
