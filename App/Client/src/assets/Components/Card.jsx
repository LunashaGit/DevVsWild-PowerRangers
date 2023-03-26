import axios from "axios";

function Card(props) {
  console.log(props.valueAlert);

  let imgName;

  let Name;

  switch (props.valueAlert.type || props.valueAlert.title) {
    case "animal":
      imgName = "bear.png";
      Name = "Dangerous Animals";
      break;
    case "poisonous":
      imgName = "poison.png";
      Name = "Poisonous plant";
      break;
    case "snow":
      imgName = "challenging.png";
      Name = "Challenging Path";
      break;
    case "block":
      imgName = "blocked.png";
      Name = "Blocked Path";
      break;
    case "slippery":
      imgName = "slippery.png";
      Name = "Slippery Path";
      break;
    case "insect":
      imgName = "wasp.png";
      Name = "Dangerous Insects";
      break;
    case "Wild fires":
      imgName = "fire.png";
      Name = "Wild fires";
      break;
    case "Zombie invasion  ":
      imgName = "zombi.png";
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
    <div>
      <img src={`./src/assets/images/${imgName}`} />
      <div>
        <h1>{Name}</h1>
        <p>Still relevant ?</p>
      </div>
      <div>
        <button onClick={props.handleAlertRemove}>Yes</button>
        <button
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
