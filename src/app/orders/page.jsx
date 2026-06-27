import { cookies } from "next/headers";
import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";

export default async function Orders() {
  await connectDB();

  const cookieStore = await cookies();

  const email = cookieStore.get("user")?.value;

  if (!email) {
    return (
      <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Please Login First
        </h1>
      </main>
    );
  }

  const orders = await Order.find({
    userEmail: email,
  }).sort({
    createdAt: -1,
  });

  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/orders-bg.jpg')",
      }}
    >
      <div className="min-h-screen bg-black/70">
        <div className="max-w-6xl mx-auto px-6 py-16">

          <h1 className="text-5xl font-black text-cyan-400">
            My Orders
          </h1>

          {orders.length === 0 ? (
            <div className="mt-10 text-center">
              <h2 className="text-2xl text-gray-400">
                No Orders Found
              </h2>
            </div>
          ) : (
            <div className="mt-10 space-y-5">

              {orders.map((order) => (
                <div
                  key={order._id.toString()}
                  className="bg-gray-900/80 backdrop-blur-md border border-cyan-500 p-6 rounded-2xl"
                >
                  <h3 className="text-xl font-bold text-cyan-400">
                    {order.packageName}
                  </h3>

                  <p className="mt-2">
                    💰 Amount: {order.amount}
                  </p>

                  <p>
                    💳 Payment:
                    <span className="text-green-400 ml-2">
                      {order.paymentStatus}
                    </span>
                  </p>

                  <p>
                    ⚡ Recharge:
                    <span className="text-yellow-400 ml-2">
                      {order.rechargeStatus}
                    </span>
                  </p>

                  <p className="text-gray-400 mt-2">
                    {new Date(
                      order.createdAt
                    ).toLocaleString()}
                  </p>
                </div>
              ))}

            </div>
          )}

        </div>
      </div>
    </main>
  );
}
