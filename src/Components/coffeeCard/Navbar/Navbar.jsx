import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  console.log(user);
  const logout = () => {
    userLogout();
  };
  return (
    <div className="navbar bg-red-200">
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/addCoffee"}>Add Coffee</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
      <div>
        <p>{user?.displayName}</p>
        <span onClick={logout}>
          <NavLink to={"/login"}>Logout</NavLink>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
