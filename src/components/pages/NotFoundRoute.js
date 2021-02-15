import { Link } from "react-router-dom";

const NotFoundRoute = () => {
  return (
    <div>
      <p>Page not found.</p>
      <Link to="/" className="navbar_link">
        GO HOME      
      </Link>
    </div>
  );
}

export default NotFoundRoute;
