function AlertButton(props) {
  return (
    <button
      className="rounded-full w-14 h-14 bg-orangeFox"
      onClick={props.onClick}
    ><img src="../src/assets/images/warning.png" className="w-9 ml-2.5 mb-1.5"/>
    </button>
  );
}

export default AlertButton;
