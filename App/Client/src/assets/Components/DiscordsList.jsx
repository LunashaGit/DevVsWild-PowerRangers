import DiscordCancel from "./DiscordCancel";
import axios from "axios";
function DiscordList(props) {
  const Discords = [
    {
      id: 1,
      title: "Poisonous",
    },
    {
      id: 2,
      title: "Slippery",
    },
    {
      id: 3,
      title: "Block",
    },
    {
      id: 4,
      title: "Snow",
    },
    {
      id: 5,
      title: "Insect",
    },
  ];

  // const DiscordAPI = async (e) => {
  //   console.log(e);
  //   const response = await axios
  //     .post("http://127.0.0.1:8080/api/Discords", {
  //       type: e.title,
  //       lon: props.startCoords.lon,
  //       lat: props.startCoords.lat,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
      className="alert alert-Discord"
      role="alert"
    >
      <ul className="list-group flex flex-wrap gap-4 justify-center left-1/4 right-1/4 absolute top-[100px]">
        {Discords.map((Discord) => (
          <li
            className="list-group-item w-16 h-16 text-center text-white bg-black rounded-full"
            key={Discord.id}
            // onClick={() => DiscordAPI(Discord)}
          >
            <h3>{Discord.title}</h3>
          </li>
        ))}
      </ul>
      <DiscordCancel onClick={props.onClick} />
    </div>
  );
}

export default DiscordList;
