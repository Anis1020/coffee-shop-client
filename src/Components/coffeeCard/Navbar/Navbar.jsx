import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="navbar bg-red-200">
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/addCoffee"}>Add Coffee</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
      <div>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default Navbar;
