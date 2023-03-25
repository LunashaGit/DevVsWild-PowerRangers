import { useState, useCallback, useEffect } from "react";

import SearchBarButton from "../Components/SearchBarButton";
import SearchBarForm from "../Components/SearchBarForm";
import Alerts from "../Components/Alerts";
import Danger from "../Components/Danger";
import Map from "../Components/Map";

export default function Homepage() {
  const [startPoint, setStartPoint] = useState(null);
  const [startCoords, setStartCoords] = useState(null);
  const [endCoords, setEndCoords] = useState(null);
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
    fetch(`https://api.geoapify.com/v1/geocode/search?text="${e.target[1].value}"&apiKey=a203d55a7a1f46cda1aef5ce6655c14c`)
        .then(response => response.json())
        .then(data => setEndCoords({
          lat: data.features[0].properties.lat,
          lon: data.features[0].properties.lon
        }));
  }, []);

  useEffect(() => {
      fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=a203d55a7a1f46cda1aef5ce6655c14c`)
          .then(response => response.json())
          .then(data => setStartPoint(data.features[0].properties.address_line1))
    navigator.geolocation.getCurrentPosition(function (position) {
      setStartCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="Homepage relative flex items-center justify-center">
      <div className="absolute top-5 flex justify-center left-1/4 right-1/4 z-[5000]">
        {!showSearchBar && <SearchBarButton onClick={toggleSearchBar} />}
        {showSearchBar && <SearchBarForm onSubmit={handleSubmit} startPoint={startPoint} />}
      </div>
      <div className="absolute bottom-5 z-[5000] flex justify-between gap-24">
        <Danger />
        <Alerts />
      </div>
        {startCoords && <Map
            startCoords={startCoords}
            endCoords={endCoords}
        />}
    </div>
  );
}
