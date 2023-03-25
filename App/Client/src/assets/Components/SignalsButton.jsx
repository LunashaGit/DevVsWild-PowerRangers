function SignalsButton(props) {
  return (
    <button
      className="rounded-full w-14 h-14 bg-orangeFox font-bold text-xl shadow-lg"
      onClick={props.onClick}
    >
      <img
        src="../src/assets/images/warning.png"
        className="w-9 ml-2.5 mb-1.5 shadow-lg"
      />
    </button>
  );
}

export default SignalsButton;
