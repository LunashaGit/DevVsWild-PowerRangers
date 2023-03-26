import { useState, useCallback, useEffect } from "react";

import SearchBarButton from "../Components/SearchBarButton";
import SearchBarForm from "../Components/SearchBarForm";
import Alerts from "../Components/Alerts";
import Discord from "../Components/Discord";
import Map from "../Components/Map";
import Loading from "../Components/Loading.jsx";
import Card from "../Components/Card";
import AlertPopUp from "../Components/AlertPopUp.jsx";

export default function Homepage() {
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const [startPoint, setStartPoint] = useState(null);
  const [startCoords, setStartCoords] = useState(null);
  const [endCoords, setEndCoords] = useState(null);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [valueForm, setValueForm] = useState([]);
  const [valueAlert, setValueAlert] = useState({});
  const [valueAlertShow, setValueAlertShow] = useState(false);
  const [idAlert, setIdAlert] = useState(null);
  const [unShowAlert, setUnShowAlert] = useState(false);
  const toggleSearchBar = useCallback(
    () => setShowSearchBar((showSearchBar) => !showSearchBar),
    []
  );
  const [results, setResults] = useState([]);

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
      .then((data) => setResults(data.features));
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

  const handleAlert = useCallback((e) => {
    setValueAlert(e);
    setValueAlertShow(true);
  }, []);

  const handleAlertRemove = useCallback(() => {
    setValueAlertShow(false);
  }, []);

  const handleAlertId = useCallback((e) => {
    setIdAlert(e);
    setValueAlertShow(false);
    setUnShowAlert(!unShowAlert);
  }, []);

  const handleAlertIdAdd = useCallback((e) => {
    setIdAlert(e);
    setValueAlertShow(false);
  }, []);

  if (!startCoords) {
    return (
      <>
        <Loading />
      </>
    );
  }

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
        <section className="bg-orangeFox dark:bg-dimGray w-96 rounded-lg shadow text-center p-11">
          <h1 className="text-center text-2xl font-bold text-white">
            Work in progress
          </h1>
          <h2 className="text-xl text-center text-white">
            The computer version is still in production. Nonetheless, the team
            wish you good luck on your survival journey without your phone, may
            the odds be in your favour !
          </h2>
        </section>
      </div>
    );
  }

  return (
    <div className="Homepage relative flex items-center justify-center">
      <div className="absolute top-5 flex justify-center w-full px-8 z-[5000]">
        {!showSearchBar && <SearchBarButton onClick={toggleSearchBar} />}
      </div>
      {showSearchBar && (
        <SearchBarForm
          onSubmit={handleSubmit}
          startPoint={startPoint}
          startCoords={startCoords}
          setShowSearchBar={setShowSearchBar}
          results={results}
          setEndCoords={setEndCoords}
        />
      )}
      {valueAlertShow && (
        <div className="absolute top-5 right-5 z-[5000]">
          <Card
            valueAlert={valueAlert}
            handleAlertRemove={handleAlertRemove}
            handleAlertId={handleAlertIdAdd}
          />
        </div>
      )}
      <div className="absolute bottom-5 z-[5000] w-[95%] mx-[20px] flex justify-between">
        <Discord onClick={handlePopup} startCoords={startCoords} />
        <Alerts
          onClick={handlePopup}
          startCoords={startCoords}
          handleAlertId={handleAlertId}
          unShowAlert={unShowAlert}
          setUnShowAlert={setUnShowAlert}
        />
      </div>
      {startCoords && (
        <Map
          onChange={handleCoords}
          startCoords={startCoords}
          endCoords={endCoords}
          handleAlert={handleAlert}
          idAlert={idAlert}
        />
      )}
    </div>
  );
}
