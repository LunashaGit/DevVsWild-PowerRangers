import { useState, useCallback } from "react";
import AlertButton from "./AlertButton";
import AlertsList from "./AlertsList";
function Alerts() {
  const [showAlert, setShowAlert] = useState(false);
  const toggleAlert = useCallback(
    () => setShowAlert((showAlert) => !showAlert),
    []
  );
  return (
    <>
      {!showAlert && <AlertButton onClick={toggleAlert} />}
      {showAlert && <AlertsList onClick={toggleAlert} />}
    </>
  );
}

export default Alerts;
