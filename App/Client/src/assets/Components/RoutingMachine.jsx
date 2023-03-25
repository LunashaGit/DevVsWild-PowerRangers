import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: ("http://localhost:5173/src/assets/images/startpoint.png"),
  iconSize: [40, 40]
});

export default function RoutingMachine(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    let routingControl = L.Routing.control({
      waypoints: [L.latLng(props.startCoords.lat, props.startCoords.lon)],
      routeWhileDragging: true,
      // if the waypoints move, change the startCoords
      createMarker: function (i, wp, nWps) {
        const marker = L.marker(wp.latLng, {
          draggable: true,
        });
        marker.on("dragend", function (e) {
          props.onChange({
            lat: e.target._latlng.lat,
            lon: e.target._latlng.lng,
          });
        });
        return marker;
      },
    }).addTo(map);

    if (props.endCoords) {
      routingControl = L.Routing.control({
        waypoints: [
          L.latLng(props.startCoords.lat, props.startCoords.lon),
          L.latLng(props.endCoords.lat, props.endCoords.lon),
        ],
        routeWhileDragging: true,
        createMarker : (i, wp, n) => {
          if(i == n-1)
          return L.marker (wp.latLng, {
            icon: L.icon ({
              iconUrl: 'http://localhost:5173/src/assets/images/endpoint.png',
              iconSize: [40, 40],
            })
          })
      }
      }).addTo(map);
    }

    map.setView([props.startCoords.lat, props.startCoords.lon], 20);

    document.getElementsByClassName("leaflet-right")[0].style.display = "none";
    document.getElementsByClassName("leaflet-control-zoom")[0].style.display = "none";
    document.getElementsByClassName("leaflet-control-attribution")[0].style.display = "none";

    return () => map.removeControl(routingControl);
  }, [map, props.endCoords]);

  return null;
}
