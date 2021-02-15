import { Link } from "react-router-dom";
import './navbar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Poems.</h1>
      <Link to="/" className="navbar_link">
        HOME      
      </Link>
      {' '}|{' '}
      <Link to="/about" className="navbar_link">
        ABOUT      
      </Link>
    <hr></hr>
    </div>
  );
}

export default NavBar;
