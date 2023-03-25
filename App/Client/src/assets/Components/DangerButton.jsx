function AlertButton(props) {
  return (
    <button
      className="rounded-full w-24 h-24 bg-black text-white left-5"
      onClick={props.onClick}
    >
      {" "}
      Hey
    </button>
  );
}

export default AlertButton;
