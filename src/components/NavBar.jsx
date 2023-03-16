import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-list">
      <h1>NC Games</h1>
      <div className="link-container">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/reviews" className="nav-link">
          Reviews
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
