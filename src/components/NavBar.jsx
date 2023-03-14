import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-list">
      <ul>
        <li>
          <Link to="/" className="home-link">
            Back to Home
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="reviews-link">
            All Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;