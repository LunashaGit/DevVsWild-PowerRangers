import {useEffect, useState} from "react";

function SearchBarForm(props) {

    return (
    <>
      <form
        className="flex justify-center items-center flex-col gap-4"
        onSubmit={props.onSubmit}
      >
        <input
          className="rounded-full"
          type="text"
          defaultValue={props.startPoint}
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
