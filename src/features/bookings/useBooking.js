import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getBooking } from "../../services/apiBookings"

export function useBooking() {
  const {id}=useParams()
const {data:booking,isLoading,error}=useQuery({
    queryKey:["booking",id],
    queryFn:()=>getBooking(id),
    retry:false,
  })
return {booking,isLoading,error}
}