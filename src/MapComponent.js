import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet-css";
import { Icon } from "leaflet";

const markerIcon = new Icon({
  iconUrl:
    "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
  iconSize: [25, 25]
});

export default function MapComponent() {
  const state = {
    center: [51.505, -0.091],
    zoom: 5
  };

  const [markerPos, setMarkerPos] = useState([51.505, -0.091]);
  return (
    <MapContainer
      doubleClickZoom={false}
      attributionControl={false}
      center={state.center}
      zoom={state.zoom}
      id={"map"}
      whenReady={(map) => {
        map.target.on("click", function (e) {
          setMarkerPos(e.latlng);
        });
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPos} icon={markerIcon} />
    </MapContainer>
  );
}
