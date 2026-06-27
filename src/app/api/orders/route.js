import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";

export async function POST(req) {

  try {

    await connectDB();

    const body =
      await req.json();

    const order =
      await Order.create(body);

    return Response.json({
      success: true,
      order,
    });

  } catch {

    return Response.json(
      {
        error:
          "Failed",
      },
      {
        status: 500,
      }
    );
  }
}
