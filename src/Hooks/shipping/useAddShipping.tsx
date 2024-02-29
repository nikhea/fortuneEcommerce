import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addShippingServer } from "../../services/authenticated/shippping";
import { queryKey } from "../queryKeys";

const useAddShippingDetails = () => {
  const queryClient = useQueryClient();

  const addShipping = useMutation(
    async ({ shippingData }: any) => {
      await addShippingServer(shippingData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["authenticated-user"]);
      },
    }
  );

  const addShippingfn = async (shippingData: any) => {
    await addShipping.mutateAsync({ shippingData });
  };
  return {
    addShippingfn,
    status: addShipping.status,
    isLoading: addShipping.isLoading,
    data: addShipping.data,
  };
};
export default useAddShippingDetails;
