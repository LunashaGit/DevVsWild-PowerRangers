import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RoutingMachine from "./RoutingMachine";
import {useState, useCallback, useEffect} from "react";
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
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <RoutingMachine
          startCoords={props.startCoords}
      />
    </MapContainer>
  );
}

export default Map;
