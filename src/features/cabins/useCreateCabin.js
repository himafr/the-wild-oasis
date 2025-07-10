import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useCreateCabin() {
 const queryClient = useQueryClient();

     const { isPending:isCreating, mutate:createCabin } = useMutation({
       mutationFn: createUpdateCabin,
       onSuccess: () => {
         toast.success("Cabin created successfully!");
         queryClient.invalidateQueries({ queryKey: ["cabins"] });
       },
       onError: (err) => {
         toast.error(`Failed to create cabin: ${err.message}`);
       },
     });
   
    return {isCreating, createCabin}
}

export default useCreateCabin
