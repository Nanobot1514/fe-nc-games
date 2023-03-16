import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="Header">
      <h2>Welcome to NC Games!</h2>

      <ul>
        <h4 className="home-category-header">
          Looking for something specific?
        </h4>
        <li>
          <Link to={"/reviews/dexterity"}>Dexterity</Link>
        </li>
        <li>
          <Link to={"/reviews/strategy"}>Strategy</Link>
        </li>
        <li>
          <Link to={"/reviews/hidden-roles"}>Hidden Roles</Link>
        </li>
        <li>
          <Link to={"/reviews/push-your-luck"}>Push your luck</Link>
        </li>
        <li>
          <Link to={"/reviews/roll-and-write"}>Roll and write</Link>
        </li>
        <li>
          <Link to={"/reviews/deck-building"}>Deck Building</Link>
        </li>
        <li>
          <Link to={"/reviews/engine-building"}>Engine Building</Link>
        </li>
      </ul>
    </div>
  );
};
export default HomePage;
