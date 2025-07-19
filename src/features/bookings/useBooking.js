import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"


export function useBookings() {
  const [searchParams,setSearchParams]=useSearchParams();
  const filteredValue=searchParams.get("status");
  const filter =(!filteredValue||filteredValue=="all")?null:{field:"status",value:filteredValue,method:"eq"}

  //sorting 
  const sortByRow=searchParams.get("sortBy")||"startDate-desc";
  const [field,direction]=sortByRow.split("-");
  const sortBy={field,direction};

  //pagination
    const page=!searchParams.get("page")?1:Number(searchParams.get("page"));


const {data:{data:bookings,count}={},isLoading,error}=useQuery({
    queryKey:["bookings",filteredValue,sortBy,page],
    queryFn:()=>getBookings({filter,sortBy,page}),
  })
return {bookings,count,isLoading,error}
}