import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        const user = { email };
        axios
          .post("http://localhost:3000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (result.data.success) {
              navigate(location?.state ? location.state : "/");
            }
          });
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  return (
    <div className="bg-amber-200 ">
      <form onSubmit={handleLogin} className="border w-1/2 mx-auto">
        {/* row section */}
        <div className="">
          <div>
            <label htmlFor="name">Email</label>
            <input className="border w-full" type="text" name="email" />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="">
          <div>
            <label htmlFor="name">Password</label>
            <input className="border w-full" type="text" name="password" />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="">
          <div>
            <input className="border w-full" type="submit" value="Login" />
          </div>
        </div>
      </form>
      <div>
        <p className="flex gap-10 text-3xl justify-center my-4">
          <span>
            <FaGoogle />
          </span>
          <span>
            <FaGithub />
          </span>
        </p>
        <p className="text-center">
          {" "}
          Are you new? please <Link to={"/register"}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
