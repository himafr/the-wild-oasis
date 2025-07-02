import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [cab, setCab] = useState({});
  useEffect(() => {
    async function fetchCabins() {
      try {
        const cab = await getCabins();
        setCab(cab[0]);
      } catch (error) {
        console.error("Error fetching cabins:", error);
      }
    }
    fetchCabins();}
  ,[])
  if (!Object.keys(cab).length) {
    return <p>Loading...</p>;
  }

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src={cab.image} alt="Cabin" />
    </Row>
  );
}

export default Cabins;
