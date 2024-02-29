import { useFetchOrders } from "../../src/Hooks/useOrder/useFetchOrders";
import PageLoading from "../../src/components/UI/Loading/PageLoading";

interface Props {
  initialData: {
    wishlist: any;
  };
}
const Orders = (props: Props) => {
  const { orders, isLoading } = useFetchOrders(props);
  console.log(orders);
  if (isLoading) {
    return <PageLoading />;
  }
  const displayOrder = orders.map((order: any) => (
    <div key={order._id} className="my-10">
      {JSON.stringify(order.user.email)}
    </div>
  ));
  return <div>{displayOrder}</div>;
};

export default Orders;
