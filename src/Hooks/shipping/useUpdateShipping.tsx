import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKey } from "../queryKeys";
import { UpdateShippingServer } from "../../services/authenticated/shippping";

const useUpdateShippingDetails = () => {
  const queryClient = useQueryClient();
  const UpdateCategories = useMutation(
    async ({ shippingData }: any) => {
      await UpdateShippingServer(shippingData);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["authenticated-user"]);
      },
    }
  );

  const updateShipping = async (shippingData: any) => {
    await UpdateCategories.mutateAsync({ shippingData });
  };
  return {
    updateShipping,
    status: UpdateCategories.status,
    isLoadingShipping: UpdateCategories.isLoading,
    data: UpdateCategories.data,
  };
};

export default useUpdateShippingDetails;
