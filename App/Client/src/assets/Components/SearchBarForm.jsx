function SearchBarForm(props) {
  return (
    <>
      <form onSubmit={props.onSubmit} className="flex flex-col">
        <input
          className="rounded-full"
          type="text"
          placeholder="Search City 1"
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
