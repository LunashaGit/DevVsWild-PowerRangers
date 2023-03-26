import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import AlertPopUp from "./AlertPopUp.jsx";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "./src/assets/images/startpoint.png",
  iconSize: [40, 40],
});

export default function RoutingMachine(props) {
  const [Alerts, setAlerts] = useState([]);
  const [Signals, setSignals] = useState([]);
  const [showAlertPopUp, setShowAlertPopUp] = useState(true);

  console.log(props.idAlert);
  useEffect(() => {
    fetch("http://localhost:8080/api/signals")
      .then((res) => res.json())
      .then((data) => {
        setSignals(data);
      });

    fetch("http://localhost:8080/api/alerts")
      .then((res) => res.json())
      .then((data) => {
        setAlerts(data);
      });
  }, [props.idAlert]);

  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Foreach Markers Signals and Alerts -> delete them
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });
    for (let i = 0; i < Signals.length; i++) {
      L.marker([Signals[i].lat, Signals[i].lon], {
        icon: L.icon({
          iconUrl: `./src/assets/images/${Signals[i].type}Map.png`,
          iconSize: [40, 40],
        }),
      })
        .addTo(map)
        .on("click", () => {
          props.handleAlert(Signals[i]);
        });
    }

    for (let i = 0; i < Alerts.length; i++) {
      L.marker([Alerts[i].lat, Alerts[i].lon], {
        icon: L.icon({
          iconUrl: `./src/assets/images/${Alerts[i].title}Map.png`,
          iconSize: [40, 40],
        }),
      })
        .addTo(map)
        .on("click", () => {
          props.handleAlert(Alerts[i]);
        });
    }

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
        createMarker: (i, wp, n) => {
          if (i == n - 1)
            return L.marker(wp.latLng, {
              icon: L.icon({
                iconUrl: "./src/assets/images/endpoint.png",
                iconSize: [40, 40],
              }),
            });
        },
      }).addTo(map);
    }

    map.setView([props.startCoords.lat, props.startCoords.lon], 20);

    document.getElementsByClassName("leaflet-right")[0].style.display = "none";
    document.getElementsByClassName("leaflet-control-zoom")[0].style.display =
      "none";
    document.getElementsByClassName(
      "leaflet-control-attribution"
    )[0].style.display = "none";

    return () => map.removeControl(routingControl);
  }, [map, props.endCoords, Signals, Alerts, props.idAlert]);

  console.log(Alerts)

  return (
    <>
      {showAlertPopUp && <AlertPopUp setShowAlertPopUp={setShowAlertPopUp} />}
    </>
  )
}
