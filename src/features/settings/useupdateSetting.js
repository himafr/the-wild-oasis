import {  useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

function useUpdateSetting() {
 const queryClient = useQueryClient();

    const { isPending:isUpdating, mutate:updateSetting } = useMutation({

    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("settings updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      toast.error(`Failed to update settings: ${err.message}`);
    },
  });
  return {isUpdating,updateSetting }
}

export default useUpdateSetting
