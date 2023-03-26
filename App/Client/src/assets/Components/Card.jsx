import axios from "axios";

function Card(props) {
  console.log(props.valueAlert);

  let imgName;
  let Name;

  switch (props.valueAlert.type || props.valueAlert.title) {
    case "Dangerous Animals":
      imgName = "./src/assets/images/bear.png";
      Name = "Dangerous Animals";
      break;
    case "Poisonous plant":
      imgName = "./src/assets/images/poison.png";
      Name = "Poisonous plant";
      break;
    case "Challenging Path":
      imgName = "./src/assets/images/challenging.png";
      Name = "Challenging Path";
      break;
    case "Blocked Path":
      imgName = "./src/assets/images/blocked.png";
      Name = "Blocked Path";
      break;
    case "Slippery Path":
      imgName = "./src/assets/images/slippery.png";
      Name = "Slippery Path";
      break;
    case "Dangerous Insects":
      imgName = "./src/assets/images/wasp.png";
      Name = "Dangerous Insects";
      break;
    case "Wild fires":
      imgName = "./src/assets/images/fire.png";
      Name = "Wild fires";
      break;
    case "Zombie invasion  ":
      imgName = "./src/assets/images/zombi.png";
      Name = "Zombie invasion";
      break;
    default:
      break;
  }

  const handleAlertRemove = async () => {
    const id = props.valueAlert._id;
    const res = await axios.delete(
      `http://localhost:8080/api/${
        props.valueAlert.type ? "signals" : "alerts"
      }/${id}`
    );
  };

  return (
    <div className="flex items-center justify-between h-20 text-center z-[2] rounded-xl w-[90vw] bg-zinc-800 bg-opacity-60">
      <img src={imgName} />
      <div className="text-white">
        <h1 className="font-bold">{Name}</h1>
        <p className="font-thin">Still relevant ?</p>
      </div>
      <div className="flex flex-col justify-between text-black h-20 font-bold">
        <button
          className="bg-orangeFox rounded-2xl w-14 h-7"
          onClick={props.handleAlertRemove}
        >
          Yes
        </button>
        <button
          className="bg-lightGray rounded-2xl w-14 h-7"
          onClick={(e) => {
            handleAlertRemove(e);
            props.handleAlertId(props.valueAlert._id);
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Card;
