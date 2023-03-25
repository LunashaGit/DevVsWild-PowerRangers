import {useEffect, useState} from "react";
import ResultsList from "./ResultsList.jsx";

function SearchBarForm(props) {

    useEffect(() => {
        console.log(props.results);
    }, [props.results]);

    return (
        <div className="absolute flex flex-col top-0 left-0 w-full h-full min-h-full bg-white z-[6000]">
          <form
            className="flex mx-auto justify-between w-[90%] p-4 mt-[1.25rem] h-fit items-center bg-white shadow-2xl rounded-3xl flex-col gap-4 mb-10"
            onSubmit={props.onSubmit}
          >
              <div className="flex w-full">
                <input
                  className="flex items-center rounded-full w-full bg-white outline-0 text-[#E65728]"
                  type="text"
                  defaultValue={props.startPoint}
                />
              </div>

              <hr
                className="w-full text-black"
              />

              <div className="flex w-full">
                <input
                  className="rounded-full w-full bg-white outline-0"
                  type="text"
                  placeholder="Destination"
                />
              </div>
              <button type="submit" className="hidden"></button>
          </form>
            <ResultsList
                startCoords={props.startCoords}
                results={props.results}
                setEndCoords={props.setEndCoords}
                setShowSearchBar={props.setShowSearchBar}
            />
            <div className="flex justify-center absolute bottom-10 w-full">
                <div
                    className="bg-[#E65728] text-white p-2 rounded-full shadow-2xl"
                    onClick={() => props.setShowSearchBar(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default SearchBarForm;
