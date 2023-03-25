import { useState, useCallback, useEffect } from "react";

import SearchBarButton from "../Components/SearchBarButton";
import SearchBarForm from "../Components/SearchBarForm";
import Alerts from "../Components/Alerts";
import Discord from "../Components/Discord";
import Map from "../Components/Map";
import Loading from "../Components/Loading.jsx";

export default function Homepage() {
  const [showMobileWarning, setShowMobileWarning] = useState(false);
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
    fetch(
      `https://api.geoapify.com/v1/geocode/search?text="${e.target[1].value}"&apiKey=a203d55a7a1f46cda1aef5ce6655c14c`
    )
      .then((response) => response.json())
      .then((data) =>
        setEndCoords({
          lat: data.features[0].properties.lat,
          lon: data.features[0].properties.lon,
        })
      );
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=a203d55a7a1f46cda1aef5ce6655c14c`
      )
        .then((response) => response.json())
        .then((data) =>
          setStartPoint(data.features[0].properties.address_line1)
        );
      setStartCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  const handlePopup = useCallback(() => {
    setShowSearchBar(false);
  }, []);

  const handleCoords = useCallback((e) => {
    setStartCoords({
      lat: e.lat,
      lon: e.lon,
    });
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 425) {
      console.log(true);
      setShowMobileWarning(true);
    } else {
      setShowMobileWarning(false);
    }
  });

  if (showMobileWarning === true) {
    return (
      <div className="flex flex-col items-center h-[100vh] justify-center gap-4 structure dark:bg-greyNight">
        <section className="bg-orangeFox dark:bg-dimGray w-96 rounded-lg shadowtext-center p-11">
          <h1 className="text-center text-2xl font-bold text-white">
            Work in progress
          </h1>
          <h2 className="text-xl text-center text-white">
            The computer version is still in the making, be patient !
          </h2>
        </section>
      </div>
    );
  }

  return (
    <div className="Homepage relative flex items-center justify-center">
      <div className="absolute top-5 flex justify-center left-1/4 right-1/4 z-[5000]">
        {!showSearchBar && <SearchBarButton onClick={toggleSearchBar} />}
        {showSearchBar && (
          <SearchBarForm onSubmit={handleSubmit} startPoint={startPoint} />
        )}
      </div>
      <div className="absolute bottom-5 z-[5000] flex justify-between gap-48">
        <Alerts onClick={handlePopup} startCoords={startCoords} />
        <Discord onClick={handlePopup} startCoords={startCoords} />
      </div>
      {startCoords && (
        <Map
          onChange={handleCoords}
          startCoords={startCoords}
          endCoords={endCoords}
        />
      )}
    </div>
  );
}
