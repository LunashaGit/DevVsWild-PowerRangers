function AlertButton(props) {
  return (
    <button
    className="rounded-full w-14 h-14 bg-orangeFox font-bold text-white text-xl shadow-lg"
      onClick={props.onClick}
    >SOS
    </button>
  );
}

export default AlertButton;
