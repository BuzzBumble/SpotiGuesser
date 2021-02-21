import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapData from './data/countries.json'

export default function MapComponent() {
  const state = {
    center: [51.505, -0.091],
    zoom: 3
  };

  const highlightCountry = (event) => {
    event.target.setStyle({
      fillColor: "green",
      fillOpacity: 0.5,
    });
  };
  
  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(`${countryName}`);
    
    layer.on({
      click: highlightCountry,
    });
  };
  
  const countryStyle = {
    fillColor: "white",
    fillOpacity: 0.1,
    weight: 1
  }
  
  return (
    <MapContainer
      doubleClickZoom={false}
      attributionControl={false}
      center={state.center}
      zoom={state.zoom}
      id={"map"}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON style={countryStyle} data={mapData.features} onEachFeature={onEachCountry}/>
    </MapContainer>
  );
}
