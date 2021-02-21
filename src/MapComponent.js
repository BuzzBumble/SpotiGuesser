import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapData from './data/countries.json'

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function MapComponent(props) {
  let url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`
  const bounds = new L.LatLngBounds(new L.LatLng(-90,-180), new L.LatLng(90,180));

  const state = {
    center: [51.505, -0.091],
    zoom: 3
  };

  const countryStyle = {
    fillColor: "white",
    fillOpacity: 0.1,
    weight: 0
  }

  let currentCountry = null;

  const highlightCountry = (event, countryProperties) => {
    props.onCountryChange(countryProperties);

    if (currentCountry != null) {
      currentCountry.setStyle({
        fillColor: "white",
        fillOpacity: 0.1,
      });
    }
    event.target.setStyle({
      fillColor: "green",
      fillOpacity: 0.5,
    });
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;

    layer.bindPopup(`${countryName}`);
    layer.on({
      click: (event) => {
        highlightCountry(event, country.properties);
        currentCountry = layer;
      },
    });
  };

  return (
    <MapContainer
      doubleClickZoom={false}
      attributionControl={false}
      center={state.center}
      zoom={state.zoom}
      id={"map"}
      maxBounds={bounds}
      minZoom={2}
    >
      <TileLayer
        attribution='&copy; <a href="https://apps.mapbox.com/feedback/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url= {url}
      />
      <GeoJSON 
        style={countryStyle} 
        data={mapData.features} 
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
}
