import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RoutingMachine from "./RoutingMachine";
import { useState, useCallback } from "react";
import SearchBarButton from "./SearchBarButton";
import SearchBarForm from "./SearchBarForm";
function Map() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [valueForm, setValueForm] = useState([]);
  const toggleSearchBar = useCallback(
    () => setShowSearchBar((showSearchBar) => !showSearchBar),
    []
  );

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setValueForm([]);
    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].value) {
        setValueForm((valueForm) => [...valueForm, e.target[i].value]);
      }
    }
  }, []);
  console.log(valueForm);

  const latitude = 50.6327565;
  const longitude = 5.5686243;
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <RoutingMachine />
    </MapContainer>
  );
}

export default Map;
