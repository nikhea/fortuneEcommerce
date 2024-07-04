import Head from "next/head";
import { useFetchOrders } from "../../src/Hooks/useOrder/useFetchOrders";
import PageLoading from "../../src/components/UI/Loading/PageLoading";
import OrderEmpty from "../../src/components/orders/emptyOrder/orderEmpty";

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
  return (
    <div>
      <Head>
        <title>Orders | Hekto commerce</title>
      </Head>
      {orders.length <= 0 && <OrderEmpty />}
      {/* {orders && <>{displayOrder}</>} */}
    </div>
  );
};

export default Orders;
