"use client";

import { useSearchParams } from "next/navigation";

export default function Checkout() {
  const search = useSearchParams();

  const product =
    search.get("diamond") || "";

  const price =
    search.get("price") || "";

  const sendOrder = () => {
    const gameId =
      document.getElementById("gameId").value;

    const serverId =
      document.getElementById("serverId").value;

    const message = `🔥 AMANNY'S STORE 🔥

MLBB Recharge Order

🎮 User ID: ${gameId}

🖥️ Server ID: ${serverId}

💎 Package: ${product}

💰 Amount: ${price}

Payment Completed ✅

Please check my order.`;

    window.open(
      `https://wa.me/917629970920?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <input
        id="gameId"
        placeholder="User ID"
        className="w-full p-3 mb-4 text-black"
      />

      <input
        id="serverId"
        placeholder="Server ID"
        className="w-full p-3 mb-4 text-black"
      />

      <div className="mb-4">
        Package: {product}
      </div>

      <div className="mb-4">
        Amount: {price}
      </div>

      <button
        onClick={sendOrder}
        className="bg-green-500 px-6 py-3 rounded"
      >
        Order via WhatsApp
      </button>
    </main>
  );
}
          {server.packages.map(
            (item, index) => (
              <Link
                key={index}
                href={`/checkout?server=${server.slug}&product=${encodeURIComponent(
                  item.product
                )}&price=${encodeURIComponent(
                  item.price
                )}`}
                className="glow-card rounded-2xl p-5"
              >
                <h3 className="text-xl font-bold">
                  {item.product}
                </h3>

                <p className="text-cyan-400 text-2xl mt-3">
                  {item.price}
                </p>

                <button className="w-full mt-5 bg-cyan-500 text-black py-3 rounded-xl font-bold">
                  Buy Now
                </button>

              </Link>
            )
          )}

        </div>

      </div>

    </main>
  );
}
