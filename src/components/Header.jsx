import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/sign-in">Log In</NavLink>
    </div>
  );
};

export default Header;
