import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner"
import Stats from "./stats";
import {useCabins} from "../cabins/useCabins"
import SalesChart from "./SalesChart";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  const {bookings,isPending:isLoading1}=useRecentBookings();
  const {confirmedStays,isPending:isLoading2,stays,numDays}=useRecentStays();
  const {cabins,isLoading:isLoading3}=useCabins()
  if(isLoading1||isLoading2||isLoading3)return <Spinner />
  console.log(bookings,confirmedStays)
  return (
    <StyledDashboardLayout >
     <Stats bookings={bookings} confirmedStays={confirmedStays} cabinCount={cabins.length} numDays={numDays} />
      <div>b</div>
      <div>c</div>
     <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
