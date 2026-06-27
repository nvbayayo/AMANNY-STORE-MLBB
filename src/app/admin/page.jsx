"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const savedOrders =
        JSON.parse(localStorage.getItem("orders")) || [];

      setOrders(savedOrders);
    } catch (error) {
      console.error("Error loading orders:", error);
      setOrders([]);
    }
  }, []);

  return (
    <main
      className="min-h-screen text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/admin-bg.jpg')",
      }}
    >
      <div className="min-h-screen bg-black/70 p-6">
        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-8">
          Admin Orders
        </h1>

        {orders.length === 0 ? (
          <p className="text-center text-xl">
            No Orders Found
          </p>
        ) : (
          <div className="grid gap-5">
            {orders.map((order, index) => (
              <div
                key={index}
                className="bg-gray-900/90 border border-cyan-500 rounded-2xl p-5"
              >
                <h2 className="text-xl font-bold text-cyan-400">
                  Order #{index + 1}
                </h2>

                <p className="mt-2">
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
                  🧾 Transaction ID: {order.transactionId || "N/A"}
                </p>

                <p className="text-green-400 mt-2 font-bold">
                  Payment Completed ✅
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
