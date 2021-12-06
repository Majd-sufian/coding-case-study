import React from "react";
import "./PagesStyle/Home.css";
import Map from "../components/Map";
import Card from "../components/Card";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import { getMachines } from "../redux/features/machines/machinesSlice";
import { useSelector } from "react-redux";

const MapWrapped = withScriptjs(withGoogleMap(Map));

function Home() {
  const machines = useSelector(getMachines);
  const url =
    "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places";

  console.clear();

  return (
    <div id="Home">
      {/* Cards 👇👇 */}
      <div className="home__content">
        {machines &&
          machines.map((machine, index) => (
            <Card
              key={machine.id}
              id={machine.id}
              index={index}
              type={machine.machine_type}
              installDate={machine.install_date}
              lastMaintenance={machine.last_maintenance}
              status={machine.status}
              floor={machine.floor}
            />
          ))}
      </div>

      {/* Map 👇👇 */}
      <div
        className="home__sticky__map"
        style={{ height: `${window.innerHeight}px` }}
      >
        <MapWrapped
          className="home__sticky__map"
          style={{ height: `${window.innerHeight}px` }}
          googleMapURL={url}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default Home;
