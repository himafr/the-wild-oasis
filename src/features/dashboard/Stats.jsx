/* eslint-disable react/prop-types */
import {  HiOutlineBriefcase } from "react-icons/hi"
import Stat from "./Stat"
import { HiOutlineBanknotes, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2"
import { formatCurrency } from "../../utils/helpers";
function Stats({bookings,confirmedStays,cabinCount,numDays}) {
    const numBooking=bookings.length;
    const sales=bookings.reduce((acc,cur)=>acc+cur.totalPrice,0);
    const checkIns=confirmedStays.length;
    const occupation=confirmedStays.reduce((acc,cur)=>acc+cur.numNights,0)/(cabinCount*numDays);
    
    return (
      <>
        <Stat title="Bookings" color="blue" icon={<HiOutlineBriefcase/>} value={numBooking}/>
        <Stat title="Sales" color="green" icon={<HiOutlineBanknotes/>} value={formatCurrency(sales)}/>
        <Stat title="Check ins" color="indigo" icon={<HiOutlineCalendarDays/>} value={checkIns}/>
        <Stat title="Occupancy rate" color="yellow" icon={<HiOutlineChartBar/>} value={(occupation*100).toFixed(1)+"%"}/>
      </>
    )
}

export default Stats
