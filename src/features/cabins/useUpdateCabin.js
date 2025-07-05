import {  useMutation, useQueryClient } from "@tanstack/react-query";
import {  createUpdateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useUpdateCabin() {
 const queryClient = useQueryClient();
    const { isPending:isUpdating, mutate:updateCabin } = useMutation({
    mutationFn:({cabinData,id})=> createUpdateCabin(cabinData,id),
    onSuccess: () => {
      toast.success("Cabin updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      toast.error(`Failed to update cabin: ${err.message}`);
    },
  });
  return {isUpdating,updateCabin }
}

export default useUpdateCabin
