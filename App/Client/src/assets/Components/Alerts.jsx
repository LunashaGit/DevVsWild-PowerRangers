import { useState, useCallback } from "react";
import AlertButton from "./AlertButton";
function Alerts() {
  const [showAlert, setShowAlert] = useState(false);
  const toggleAlert = useCallback(
    () => setShowAlert((showAlert) => !showAlert),
    []
  );
  return (
    <>
      <AlertButton onClick={toggleAlert} />
    </>
  );
}

export default Alerts;
