import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"
import { PAGE_SIZE } from "../../utils/constant";


export function useBookings() {
  const [searchParams,setSearchParams]=useSearchParams();
  const queryClient=useQueryClient();
  const filteredValue=searchParams.get("status");
  const filter =(!filteredValue||filteredValue=="all")?null:{field:"status",value:filteredValue,method:"eq"}

  //sorting 
  const sortByRow=searchParams.get("sortBy")||"startDate-desc";
  const [field,direction]=sortByRow.split("-");
  const sortBy={field,direction};

  //pagination
    const page=!searchParams.get("page")?1:Number(searchParams.get("page"));

    //Query
    
    const {data:{data:bookings,count}={},isLoading,error}=useQuery({
      queryKey:["bookings",filteredValue,sortBy,page],
      queryFn:()=>getBookings({filter,sortBy,page}),
    })
    //PRE-Fecting
    const pageCount=Math.ceil(count/PAGE_SIZE)
  if(page<pageCount){
    queryClient.prefetchQuery({
      queryKey:["bookings",filteredValue,sortBy,page+1],
      queryFn:()=>getBookings({filter,sortBy,page:page+1}),
    }
    
  )
}
  if(page>1){
    queryClient.prefetchQuery({
      queryKey:["bookings",filteredValue,sortBy,page-1],
      queryFn:()=>getBookings({filter,sortBy,page:page-1}),
    }
    
  )
}
return {bookings,count,isLoading,error}
}