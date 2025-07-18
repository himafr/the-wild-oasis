import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins"
import toast from "react-hot-toast"

export function useDeleteCabin(name) {
    const queryClient=useQueryClient()
  const {mutate:deleteCabin,isPending:isDeleting}=useMutation({
    mutationFn:deleteCabinApi,
    onSuccess:()=>{
      toast.success(`Cabin "${name}" deleted successfully!`)
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      })
    },
    onError:(err)=>{
      toast.error(`Failed to delete cabin "${name}": ${err.message}`)
    }
  })
    return {deleteCabin,isDeleting}
}


