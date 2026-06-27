"use client";

import { useEffect, useState } from "react";

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const savedOrders =
        JSON.parse(localStorage.getItem("orders")) || [];

      setOrders(savedOrders);
    } catch (error) {
      console.error(error);
      setOrders([]);
    }
  }, []);

  const updateStatus = (index, status) => {
    const updated = [...orders];

    updated[index].status = status;

    setOrders(updated);

    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );
  };

  const deleteOrder = (index) => {
    const updated = orders.filter(
      (_, i) => i !== index
    );

    setOrders(updated);

    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center text-white p-6"
      style={{
        backgroundImage:
          "url('/admin-bg.jpg')",
      }}
    >
      <div className="fixed inset-0 bg-black/70"></div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-center text-cyan-400 mb-10">
          Manage Orders
        </h1>

        {orders.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-2xl text-gray-300">
              No Orders Found
            </h2>
          </div>
        ) : (
          <div className="space-y-5">
            {orders.map((order, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-md border border-cyan-500 rounded-2xl p-5"
              >
                <p>
                  🎮 User ID: {order.userId || "N/A"}
                </p>

                <p>
                  🖥️ Server ID: {order.serverId || "N/A"}
                </p>

                <p>
                  💎 Package: {order.packageName || "N/A"}
                </p>

                <p>
                  💰 Amount: {order.price || "N/A"}
                </p>

                <p>
                  🧾 Transaction ID:
                  {" "}
                  {order.transactionId || "N/A"}
                </p>

                <p className="mt-3">
                  Status:
                  <span
                    className={`ml-2 font-bold ${
                      order.status === "Approved"
                        ? "text-green-400"
                        : order.status === "Rejected"
                        ? "text-red-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {order.status || "Pending"}
                  </span>
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    onClick={() =>
                      updateStatus(
                        index,
                        "Approved"
                      )
                    }
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl"
                  >
                    Approve ✅
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        index,
                        "Rejected"
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
                  >
                    Reject ❌
                  </button>

                  <button
                    onClick={() =>
                      deleteOrder(index)
                    }
                    className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-xl"
                  >
                    Delete 🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
