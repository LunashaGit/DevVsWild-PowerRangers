import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RoutingMachine from "./RoutingMachine";
import { useState, useCallback, useEffect } from "react";
import SearchBarButton from "./SearchBarButton";
import SearchBarForm from "./SearchBarForm";

function Map(props) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [valueForm, setValueForm] = useState([]);
  const toggleSearchBar = useCallback(
    () => setShowSearchBar((showSearchBar) => !showSearchBar),
    []
  );

  const [latitude, setLatitude] = useState(props.startCoords.lat);
  const [longitude, setLongitude] = useState(props.startCoords.lon);

  useEffect(() => {
    setLatitude(props.startCoords.lat);
    setLongitude(props.startCoords.lon);
  }, [props.startCoords]);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        className="dark:grayscale dark:brightness-50"
      />
      <RoutingMachine
        onChange={props.onChange}
        startCoords={props.startCoords}
        endCoords={props.endCoords}
        handleAlert={props.handleAlert}
        idAlert={props.idAlert}
        setIdAlertNull={props.setIdAlertNull}
      />
    </MapContainer>
  );
}

export default Map;
