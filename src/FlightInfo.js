import { useState, useEffect, useRef } from "react";

function FlightInfo (props) {
  const { code, airline, origin, destination, plane, seats, passengers } = props.flight;
  /* console.log("PROPS.FLIGHT", props.flight); */
  return (
    <div className="flightCard">
      <h3>Flight {code}</h3>
      <p>{airline}</p>
      <p>Origin: ({origin[0]}; {origin[1]})</p>
      <p>Destination: ({destination[0]}; {destination[1]})</p>
      <p>Plane: {plane}</p>
      <p>Seats: {seats}</p>
      <p>Passengers: {passengers.map((passenger)=>(<>{passenger.name} | </>))}</p>
    </div>
  )
}

export default FlightInfo;
