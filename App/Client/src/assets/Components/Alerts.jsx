import { useState, useCallback } from "react";
import AlertButton from "./AlertButton";
import AlertsList from "./AlertsList";
function Alerts(props) {
  const [showAlert, setShowAlert] = useState(false);
  const toggleAlert = useCallback(() => {
    setShowAlert((showAlert) => !showAlert), props.onClick();
  }, []);
  return (
    <>
      {!showAlert && <AlertButton onClick={toggleAlert} />}
      {showAlert && (
        <AlertsList
          onClick={toggleAlert}
          startCoords={props.startCoords}
          handleAlertId={props.handleAlertId}
        />
      )}
    </>
  );
}

export default Alerts;
