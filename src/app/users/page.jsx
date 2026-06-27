"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    setUsers(savedUsers);
  }, []);

  const deleteUser = (index) => {
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
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-5xl font-bold text-center text-cyan-400 mb-10">
        Users Management
      </h1>

      {users.length === 0 ? (
        <p className="text-center text-gray-400">
          No Users Found
        </p>
      ) : (
        <div className="space-y-5">

          {users.map((user, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-cyan-500 rounded-2xl p-5"
            >
              <h2 className="text-xl font-bold">
                {user.username}
              </h2>

              <p className="text-gray-400 mt-2">
                {user.email}
              </p>

              <button
                onClick={() =>
                  deleteUser(index)
                }
                className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
              >
                Delete User 🗑️
              </button>

            </div>
          ))}

        </div>
      )}

    </main>
  );
}
