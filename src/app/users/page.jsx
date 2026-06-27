"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      const savedUsers =
        JSON.parse(localStorage.getItem("users")) || [];

      setUsers(savedUsers);
    } catch (error) {
      console.error(error);
      setUsers([]);
    }
  }, []);

  const deleteUser = (index) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    const updatedUsers = users.filter(
      (_, i) => i !== index
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center text-white p-6"
      style={{
        backgroundImage: "url('/users-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-cyan-400 mb-4">
          Users Management
        </h1>

        <p className="text-center text-gray-300 mb-10">
          Total Users: {users.length}
        </p>

        {users.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-2xl text-gray-400">
              No Users Found
            </h2>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">

            {users.map((user, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-md border border-cyan-500 rounded-2xl p-5"
              >
                <h2 className="text-2xl font-bold text-cyan-400">
                  {user.username || "Unknown User"}
                </h2>

                <p className="text-gray-300 mt-2 break-all">
                  {user.email || "No Email"}
                </p>

                <button
                  onClick={() =>
                    deleteUser(index)
                  }
                  className="mt-5 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-bold"
                >
                  Delete User 🗑️
                </button>
              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}
