"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {

  const searchParams =
    useSearchParams();

  const server =
    searchParams.get("server");

  const product =
    searchParams.get("product");

  const price =
    searchParams.get("price");

  const [gameId, setGameId] =
    useState("");

  const [serverId, setServerId] =
    useState("");

  const [transactionId,
    setTransactionId] =
    useState("");

  const [screenshot,
    setScreenshot] =
    useState(null);

  function sendOrder() {

    const message =
`🔥 AMANNY STORE ORDER

Server: ${server}

Package: ${product}

Price: ${price}

Game ID: ${gameId}

Server ID: ${serverId}

Transaction ID: ${transactionId}`;

    window.open(
      `https://wa.me/917629970920?text=${encodeURIComponent(
        message
      )}`
    );
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">

      <div className="max-w-3xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black">
          Checkout
        </h1>

        <div className="glow-card rounded-3xl p-8 mt-8">

          <h2 className="text-2xl font-bold">
            Order Details
          </h2>

          <div className="mt-5 space-y-3">

            <p>
              <strong>Server:</strong>
              {" "}
              {server}
            </p>

            <p>
              <strong>Package:</strong>
              {" "}
              {product}
            </p>

            <p>
              <strong>Price:</strong>
              {" "}
              {price}
            </p>

          </div>

        </div>

        <div className="glow-card rounded-3xl p-8 mt-8">

          <h2 className="text-2xl font-bold">
            Player Information
          </h2>

          <input
            placeholder="MLBB ID"
            value={gameId}
            onChange={(e)=>
              setGameId(
                e.target.value
              )
            }
            className="w-full mt-5 p-4 rounded-xl bg-black"
          />

          <input
            placeholder="Server ID"
            value={serverId}
            onChange={(e)=>
              setServerId(
                e.target.value
              )
            }
            className="w-full mt-4 p-4 rounded-xl bg-black"
          />

        </div>

        <div className="glow-card rounded-3xl p-8 mt-8">

          <h2 className="text-2xl font-bold">
            Payment
          </h2>

          <img
            src="/payment-qr.png"
            alt="QR"
            className="w-64 mx-auto mt-5 rounded-2xl"
          />

          <p className="text-center text-3xl font-black text-green-400 mt-5">
            7629970920
          </p>

          <input
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e)=>
              setTransactionId(
                e.target.value
              )
            }
            className="w-full mt-5 p-4 rounded-xl bg-black"
          />

          <input
            type="file"
            onChange={(e)=>
              setScreenshot(
                e.target.files[0]
              )
            }
            className="w-full mt-4"
          />

          <button
            onClick={sendOrder}
            className="w-full mt-6 bg-green-500 py-4 rounded-xl font-bold"
          >
            Send Order To WhatsApp
          </button>

        </div>

      </div>

    </main>
  );
          }
