function AlertButton(props) {
  return (
    <button
      className="rounded-full w-14 h-14 bg-orangeFox text-white"
      onClick={props.onClick}
    >
      SOS
    </button>
  );
}

export default AlertButton;
