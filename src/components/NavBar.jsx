import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user } = useContext(UserContext);
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
      {!user.username ? (
        <Link to="/sign-in" className="sign-in-link">
          Sign In
        </Link>
      ) : (
        <div>
          <Link to="/sign-in" className="sign-into-other-account-link">
            Sign into another account
          </Link>
          <p className="signed-in-alert">Signed in as: {user.username}</p>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
