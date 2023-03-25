import { useState, useCallback } from "react";
import DangerButton from "./DangerButton";
import DangersList from "./DangerList";
function Danger(props) {
  const [showDanger, setShowDanger] = useState(false);
  const toggleDanger = useCallback(() => {
    setShowDanger((showDanger) => !showDanger), props.onClick();
  }, []);
  return (
    <>
      {!showDanger && <DangerButton onClick={toggleDanger} />}
      {showDanger && <DangersList onClick={toggleDanger} />}
    </>
  );
}

export default Danger;
