import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="flex flex-col text-center h-[100vh] justify-center gap-4 structure">
      <h1 className="text-3xl">Oops!</h1>
      <h2 className="text-gray-300 italic">404 - Page not found</h2>
      <Link to="/" className="text-blue-300 hover:text-blue-400">
        {" "}
        Go back to the homepage
      </Link>
    </div>
  );
}

export default Error404;
