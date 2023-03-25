import { useState, useCallback } from "react";
import SignalsButton from "./SignalsButton";
import SignalsList from "./SignalsList";
function Signals(props) {
  const [showSignals, setShowSignals] = useState(false);
  const toggleSignals = useCallback(() => {
    setShowSignals((showSignals) => !showSignals), props.onClick();
  }, []);
  return (
    <>
      {!showSignals && <SignalsButton onClick={toggleSignals} />}
      {showSignals && (
        <SignalsList onClick={toggleSignals} startCoords={props.startCoords} />
      )}
    </>
  );
}

export default Signals;
