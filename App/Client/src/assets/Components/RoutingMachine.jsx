import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function RoutingMachine(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(props.startCoords.lat, props.startCoords.lon),
        L.latLng(57.6792, 11.949),
      ],
      routeWhileDragging: true,
    }).addTo(map);

    map.setView([props.startCoords.lat, props.startCoords.lon], 20);

    document.getElementsByClassName("leaflet-right")[0].style.display = "none";

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
