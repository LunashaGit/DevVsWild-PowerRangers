import SignalCancel from "./SignalsCancel";
import axios from "axios";
function SignalList(props) {
  console.log(props.startCoords);
  const Signals = [
    {
      id: 1,
      title: "AlertOne",
      description: "This is the first alert",
    },
    {
      id: 2,
      title: "AlertTwo",
      description: "This is the second alert",
    },
    {
      id: 3,
      title: "AlertThree",
      description: "This is the third alert",
    },
  ];

  const SignalAPI = async (e) => {
    console.log(e);
    const response = await axios
      .post("http://127.0.0.1:8080/api/signals", {
        type: e.title,
        lon: props.startCoords.lon,
        lat: props.startCoords.lat,
      })
      .then((res) => {
        console.log(res);
      });
  };
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
            onClick={() => SignalAPI(Signal)}
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
