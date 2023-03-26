import DiscordCancel from "./DiscordCancel";
import axios from "axios";
function DiscordList(props) {
  const Discords = [
    {
      id: 1,
      title: "Animal Attack",
      displayTitle:
      "I'm being attack by a wild animal",
      url: '../src/assets/images/animal-attack.png',
    },
    {
      id: 2,
      title: "No ressources",
      displayTitle:
      "I don't have any ressources left",
      url: '../src/assets/images/no-ressources.png',
    },
    {
      id: 3,
      title: "Lost",
      displayTitle:
      "I'm lost",
      url: '../src/assets/images/lost.png',
    },
    {
      id: 4,
      title: "Unsafe",
      displayTitle:
      'Feeling unsafe with someone',
      url: '../src/assets/images/unsafe.png',
    },
    {
      id: 5,
      title: "Injured",
      displayTitle:
      "I'm injured",
      url: '../src/assets/images/injured.png',
    },
    {
      id: 6,
      title: "Stucked",
      displayTitle:
      "I'm stuck somewhere",
      url: '../src/assets/images/stucked.png',
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
      className="alert alert-danger w-screen h-screen bg-white dark:bg-greyNight z-[1] flex flex-col justify-items-center fixed inset-0 px-5"
      role="alert"
    >
      <h2 className="text-blackNero dark:text-white text-xl font-thin text-center m-14">
        Need help ?
      </h2>
      <div className="flex flex-col gap-16">
        <ul className="list-group flex flex-wrap gap-x-4 gap-y-16 justify-center">
          {Discords.map((Discord) => (
            <li
              className="list-group-item w-20 h-20 text-center text-white bg-black rounded-full"
              key={Discord.id}
              onClick={() => DiscordAPI(Discord.title)}
            >
              <img src={Discord.url} />
              <p className="text-[10px] pt-2">{Discord.displayTitle}</p>
            </li>
          ))}
        </ul>
      </div>

      <DiscordCancel onClick={props.onClick} />
    </div>
  );
}

export default DiscordList;
