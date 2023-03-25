import {useEffect, useState} from "react";

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
      <div>
        lala
      </div>
  )
}

export default Testing;
