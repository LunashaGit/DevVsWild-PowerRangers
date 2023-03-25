import DangerCancel from "./DangerCancel";

function DangerList(props) {
  const Dangers = [
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
      className="alert alert-danger"
      role="alert"
    >
      <ul className="list-group flex flex-wrap gap-4 justify-center left-1/4 right-1/4 absolute top-[100px]">
        {Dangers.map((Danger) => (
          <li
            className="list-group-item w-16 h-16 text-center text-white bg-black rounded-full"
            key={Danger.id}
          >
            <h3>{Danger.title}</h3>
          </li>
        ))}
      </ul>
      <DangerCancel onClick={props.onClick} />
    </div>
  );
}

export default DangerList;
