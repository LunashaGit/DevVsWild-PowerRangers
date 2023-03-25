function SearchBarButton(props) {
  return (
    <>
      <button
          onClick={props.onClick}
          className="flex justify-between items-center text-[#D9D9D9] bg-opacity-90 shadow-2xl px-5 w-full h-[40px] rounded-3xl bg-white"
      >
          Destination
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#E65728] w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
      </button>
    </>
  );
}

export default SearchBarButton;

