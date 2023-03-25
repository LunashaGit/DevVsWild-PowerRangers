function SignalCancel(props) {
  return (
    <>
      <button
        className="absolute bottom-[25px] left-1/4 right-1/4"
        onClick={props.onClick}
      >
        X
      </button>
    </>
  );
}

export default SignalCancel;
