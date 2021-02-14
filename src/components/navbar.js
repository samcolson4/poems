import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/" className="navbar_link">
        HOME      
      </Link>
      {' '}|{' '}
      <Link to="/about" className="navbar_link">
        ABOUT      
      </Link>

    </div>
  );
}

export default NavBar;
