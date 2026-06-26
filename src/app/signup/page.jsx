"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (res.ok) {
      window.location.href = "/login";
    } else {
      alert("Signup failed");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#030712] px-4">

      <div className="w-full max-w-md bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8">

        <h1 className="text-4xl font-black text-center text-cyan-400">
          💎 AMANNY STORE
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Create Your Account
        </p>

        <form onSubmit={handleSignup}>

          <input
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-6 p-4 rounded-xl bg-black"
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-4 p-4 rounded-xl bg-black"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-4 p-4 rounded-xl bg-black"
          />

          <button
            type="submit"
            className="w-full mt-5 bg-cyan-500 text-black py-4 rounded-xl font-bold"
          >
            Sign Up
          </button>

        </form>

        <Link
          href="/login"
          className="block text-center text-cyan-400 mt-5"
        >
          Already have an account?
        </Link>

      </div>

    </main>
  );
}
