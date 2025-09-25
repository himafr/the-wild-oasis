import {  useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUserData } from "../../services/apiAuth";

function useUpdateUser() {
 const queryClient = useQueryClient();
    const { isPending:isUpdating, mutate:updateUser } = useMutation({
    mutationFn:updateUserData,
    onSuccess: ({user}) => {
      toast.success("user account updated successfully ");
      queryClient.setQueryData(["user"],user)
      // queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      toast.error(`Failed to update user account: ${err.message}`);
    },
  });
  return {isUpdating, updateUser }
}

export default useUpdateUser
