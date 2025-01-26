import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  // console.log(user);
  const logout = () => {
    userLogout();
  };
  return (
    <div className="navbar bg-red-300 p-5">
      <div className="space-x-7">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/addCoffee"}>Add Coffee</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/allUsers"}>User</NavLink>
      </div>
      <div className="flex gap-3">
        <p className="bg-pink-400">{user?.displayName}</p>
        <span className="bg-red-500" onClick={logout}>
          <NavLink to={"/login"}>Logout</NavLink>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
