import { useState } from "react";
import { MapContainer, TileLayer, Marker, GeoJSON } from "react-leaflet";
import "leaflet-css";
import { Icon } from "leaflet";
import mapData from './data/countries.json'

const markerIcon = new Icon({
  iconUrl:
    "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
  iconSize: [25, 25]
});

export default function MapComponent() {
  const state = {
    center: [51.505, -0.091],
    zoom: 3
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);
  
    layer.on({
      click: (event) => {
        event.target.setStyle({
          fillColor: "green"
        })
      }
    });
  };
  
  const countryStyle = {
    fillColor: "white",
    fillOpacity: 0.1,
    weight: 0
  }
  
  const [markerPos, setMarkerPos] = useState([51.505, -0.091]);
  return (
    <MapContainer
      doubleClickZoom={false}
      attributionControl={false}
      center={state.center}
      zoom={state.zoom}
      id={"map"}
      // whenReady={(map) => {
      //   map.target.on("click", function (e) {
      //     setMarkerPos(e.latlng);
      //   });
      // }}
    >
      <GeoJSON style={countryStyle} data={mapData.features} onEachFeature={onEachCountry}/>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={markerPos} icon={markerIcon} /> */}
    </MapContainer>
  );
}
