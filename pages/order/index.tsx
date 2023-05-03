import { useFetchOrders } from "../../src/Hooks/useOrder/useFetchOrders";
import PageLoading from "../../src/components/UI/Loading/PageLoading";

interface Props {
  initialData: {
    wishlist: any;
  };
}
const Orders = (props: Props) => {
  const { orders, isLoading } = useFetchOrders(props);
  if (isLoading) {
    return <PageLoading />;
  }
  return (
    <div>
      Orders
      {JSON.stringify(orders)}
    </div>
  );
};

export default Orders;
