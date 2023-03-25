import { useState, useCallback } from "react";
import DiscordButton from "./DiscordButton";
import DiscordList from "./DiscordsList";
function Discord(props) {
  const [showDiscord, setShowDiscord] = useState(false);
  const toggleDiscord = useCallback(() => {
    setShowDiscord((showDiscord) => !showDiscord), props.onClick();
  }, []);
  return (
    <>
      {!showDiscord && <DiscordButton onClick={toggleDiscord} />}
      {showDiscord && (
        <DiscordList onClick={toggleDiscord} startCoords={props.startCoords} />
      )}
    </>
  );
}

export default Discord;
