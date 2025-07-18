import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import CabinTableOperations from "../ui/CabinTableOperations";

function Bookings() {
  return (
    <>

    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
     <CabinTableOperations />
    </Row>
  <BookingTable/>
    </>
  );
}

export default Bookings;
