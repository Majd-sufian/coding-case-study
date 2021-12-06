import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
// import * as parkData from "../data/skateboard-parks.json";
import { getMachines } from "../redux/features/machines/machinesSlice";
import { useSelector } from "react-redux";

function Map() {
  const [selectedMachine, setSelectedMachine] = useState(null);

  const machines = useSelector(getMachines);

  const iconUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyK5bz_mZANA0CbUB-qXQecQA1glV-YyFhLQ&usqp=CAU";

  console.clear();

  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 48.1351, lng: 11.582 }}>
      {machines &&
        machines.map((machine) => (
          <Marker
            key={machine.id}
            position={{
              lat: machine.longitude,
              lng: machine.latitude,
            }}
            onClick={() => {
              setSelectedMachine(machine);
            }}
            icon={{
              url: iconUrl,
              scaledSize: new window.google.maps.Size(50, 50),
            }}
          />
        ))}

      {selectedMachine && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedMachine(null);
          }}
          position={{
            lat: selectedMachine.longitude,
            lng: selectedMachine.latitude,
          }}
        >
          <div>
            <p>some data to display about the machine</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default Map;
