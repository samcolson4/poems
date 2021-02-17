import { Link } from "react-router-dom";
import './navbar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="site_header">Poems. </h1>
      </Link>
      {' '}
      <Link to="/" className="navbar_link">
        HOME      
      </Link>
      {' '}|{' '}
      <Link to="/about" className="navbar_link" id="about">
        ABOUT      
      </Link>
    <hr></hr>
    </div>
  );
}

export default NavBar;
