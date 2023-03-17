import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { getUsers } from "../utils/api";
import { getUsersByUsername } from "../utils/api";

const SignIn = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((users) => {
      setIsLoading(false);
      setUsers(users);
    });
  }, []);

  const handleChange = (event) => {
    getUsersByUsername(event.target.value).then((user) => {
      setUser(user);
    });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="sign-in">
      <h3>Sign in to an account</h3>
      <label htmlFor="username-option">Select User: </label>
      <select
        onChange={handleChange}
        name="user"
        id="username-option"
        className="sign-in-options"
      >
        <option value="" selected="true" disabled="disabled"></option>
        {users.map((user) => (
          <option key={user.username} value={user.username}>
            {user.username}
          </option>
        ))}
      </select>

      {user.username && <p>Signed in as {user.username}</p>}
    </section>
  );
};

export default SignIn;
