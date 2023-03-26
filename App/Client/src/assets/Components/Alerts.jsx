import { useState, useCallback, useEffect } from "react";
import AlertButton from "./AlertButton";
import AlertsList from "./AlertsList";
function Alerts(props) {
  const [showAlert, setShowAlert] = useState(false);
  const toggleAlert = useCallback(() => {
    setShowAlert((showAlert) => !showAlert), props.onClick();
  }, []);
  console.log(props.unShowAlert);
  useEffect(() => {
    setShowAlert(false);
  }, [props.unShowAlert]);
  return (
    <>
      {!showAlert && <AlertButton onClick={toggleAlert} />}
      {showAlert && (
        <AlertsList
          onClick={toggleAlert}
          startCoords={props.startCoords}
          handleAlertId={props.handleAlertId}
          unShowAlert={props.unShowAlert}
          setUnShowAlert={props.setUnShowAlert}
        />
      )}
    </>
  );
}

export default Alerts;
