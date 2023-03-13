import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="nav-list">
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
    </div>
  );
};

export default NavBar;
