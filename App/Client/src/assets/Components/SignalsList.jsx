import SignalCancel from "./SignalsCancel";

function SignalList(props) {
  const Signals = [
    {
      id: 1,
      title: "Alert 1",
      description: "This is the first alert",
    },
    {
      id: 2,
      title: "Alert 2",
      description: "This is the second alert",
    },
    {
      id: 3,
      title: "Alert 3",
      description: "This is the third alert",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
      className="alert alert-Signal"
      role="alert"
    >
      <ul className="list-group flex flex-wrap gap-4 justify-center left-1/4 right-1/4 absolute top-[100px]">
        {Signals.map((Signal) => (
          <li
            className="list-group-item w-16 h-16 text-center text-white bg-black rounded-full"
            key={Signal.id}
          >
            <h3>{Signal.title}</h3>
          </li>
        ))}
      </ul>
      <SignalCancel onClick={props.onClick} />
    </div>
  );
}

export default SignalList;
