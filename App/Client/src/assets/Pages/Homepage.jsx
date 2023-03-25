import { useState, useCallback, useEffect } from "react";

import SearchBarButton from "../Components/SearchBarButton";
import SearchBarForm from "../Components/SearchBarForm";
import Map from "../Components/Map";

export default function Homepage() {
  const [startCoords, setStartCoords] = useState({
    lat: 0,
    lon: 0
  });
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setStartCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  }, []);

  console.log(valueForm);
  return (
    <div className="Homepage">
      <div>
        <SearchBarButton onClick={toggleSearchBar} />
        {showSearchBar && <SearchBarForm onSubmit={handleSubmit} />}
      </div>
      <Map
          startCoords={startCoords}
          endCoords={null}
      />
    </div>
  );
}
