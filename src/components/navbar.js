import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">
      <button variant="outlined">
        HOME      
      </button>
      </Link>
      
      <Link to="/about">
      <button variant="outlined">
        ABOUT      
      </button>
      </Link>

    </div>
  );
}

export default NavBar;
