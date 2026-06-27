export const saveOrder = (order) => {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    ...order,
    status: "Pending",
    createdAt: new Date().toISOString(),
  });

  localStorage.setItem(
    "orders",
    JSON.stringify(orders)
  );
};

export const getOrders = () => {
  return (
    JSON.parse(localStorage.getItem("orders")) || []
  );
};

export const getRevenue = () => {
  const orders = getOrders();

  return orders.reduce(
    (total, order) =>
      total +
      Number(
        String(order.price).replace(/[^\d]/g, "")
      ),
    0
  );
};
