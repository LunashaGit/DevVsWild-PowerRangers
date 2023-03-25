import AlertCancel from "./AlertCancel";
import axios from "axios";
function AlertsList(props) {
  const Alerts = [
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

  const AlertAPI = async (e) => {
    console.log(e);
    const response = await axios
      .post("http://127.0.0.1:8080/api/alerts", {
        title: e.title,
        description: e.description,
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
      className="alert alert-danger"
      role="alert"
    >
      <ul className="list-group flex flex-wrap gap-4 justify-center left-1/4 right-1/4 absolute top-[100px]">
        {Alerts.map((alert) => (
          <li
            className="list-group-item w-16 h-16 text-center text-white bg-black rounded-full"
            key={alert.id}
            onClick={() => AlertAPI(alert)}
          >
            <h3>{alert.title}</h3>
          </li>
        ))}
      </ul>
      <AlertCancel onClick={props.onClick} />
    </div>
  );
}

export default AlertsList;
