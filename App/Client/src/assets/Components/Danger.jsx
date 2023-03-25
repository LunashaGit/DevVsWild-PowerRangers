import { useState, useCallback } from "react";
import DangerButton from "./DangerButton";
import DangersList from "./DangerList";
function Danger() {
  const [showDanger, setShowDanger] = useState(false);
  const toggleDanger = useCallback(
    () => setShowDanger((showDanger) => !showDanger),
    []
  );
  return (
    <>
      {!showDanger && <DangerButton onClick={toggleDanger} />}
      {showDanger && <DangersList onClick={toggleDanger} />}
    </>
  );
}

export default Danger;
