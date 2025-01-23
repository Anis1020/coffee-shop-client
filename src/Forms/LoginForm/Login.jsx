import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-amber-200 ">
      <form onSubmit={handleLogin} className="border w-1/2 mx-auto">
        {/* row section */}
        <div className="">
          <div>
            <label htmlFor="name">Quantity</label>
            <input className="border w-full" type="text" name="quantity" />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="">
          <div>
            <label htmlFor="name">Test</label>
            <input className="border w-full" type="text" name="test" />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="">
          <div>
            <label htmlFor="name">Details</label>
            <input className="border w-full" type="text" name="details" />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="">
          <div>
            <label htmlFor="name">Photo</label>
            <input className="border w-full" type="text" name="photo" />
          </div>{" "}
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
