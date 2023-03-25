function DiscordButton(props) {
  return (
    <button
      className="rounded-full w-14 h-14 bg-orangeFox font-bold text-xl shadow-lg text-white"
      onClick={props.onClick}
    >
      SOS
    </button>
  );
}

export default DiscordButton;
