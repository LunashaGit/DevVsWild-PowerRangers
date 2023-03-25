import {useEffect, useState} from "react";

function SearchBarForm(props) {
    const [startPoint, setStartPoint] = useState('');

    useEffect(() => {
        fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${props.startCoords.lat}&lon=${props.startCoords.lon}&apiKey=a203d55a7a1f46cda1aef5ce6655c14c`)
            .then(response => response.json())
            .then(data => setStartPoint(data.features[0].properties.address_line1));

    }, []);

    return (
    <>
      <form
        className="flex justify-center items-center flex-col gap-4"
        onSubmit={props.onSubmit}
      >
        <input
          className="rounded-full"
          type="text"
          defaultValue={startPoint}
        />
        <input
          className="rounded-full"
          type="text"
          placeholder="Search City 2"
        />
        <button type="submit">Search</button>
      </form>
    </>
    );
}

export default SearchBarForm;
