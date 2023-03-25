import { useState, useCallback, useEffect } from "react";

import SearchBarButton from "../Components/SearchBarButton";
import SearchBarForm from "../Components/SearchBarForm";
import Map from "../Components/Map";

export default function Homepage() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [valueForm, setValueForm] = useState([]);
  const toggleSearchBar = useCallback(
    () => setShowSearchBar((showSearchBar) => !showSearchBar),
    []
  );

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setValueForm([]);
    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].value) {
        setValueForm((valueForm) => [...valueForm, e.target[i].value]);
      }
    }
  }, []);

  console.log(valueForm);
  return (
    <div className="Homepage relative">
      <div className="absolute top-5 flex justify-center left-1/4 right-1/4 z-[5000]">
        {!showSearchBar && <SearchBarButton onClick={toggleSearchBar} />}
        {showSearchBar && <SearchBarForm onSubmit={handleSubmit} />}
      </div>
      <Map />
    </div>
  );
}
