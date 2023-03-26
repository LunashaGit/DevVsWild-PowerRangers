import {useEffect, useState} from "react";
import AlertPopUp from "../Components/AlertPopUp.jsx";

function Testing() {
  const [userLon, setUserLon] = useState(null);
  const [userLat, setUserLat] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setUserLon(position.coords.longitude);
      setUserLat(position.coords.latitude);
    });
  });


  return (
      <>
        <AlertPopUp />
      </>
  )
}

export default Testing;
