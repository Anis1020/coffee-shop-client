import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Result } from "postcss";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../firebaseConfig/firebaseConfig";

const RegisterForm = () => {
  const { createUserByEmailPass, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const userInfo = {
      name,
      email,
      password,
      photo,
    };

    createUserByEmailPass(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          Swal.fire({
            title: "Registration success",
            text: "You clicked the button!",
            icon: "success",
          });
        }
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        navigate("/");
        // update user profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error.massage);
          });
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.log(error.massage);
      });
  };

  return (
    <div className="bg-amber-200 ">
      <form onSubmit={handleRegister} className="border w-1/2 mx-auto">
        {/* row section */}
        <div>
          <label htmlFor="name">Name</label>
          <input className="border w-full" type="text" name="name" />
        </div>
        <div>
          <label htmlFor="name">Email</label>
          <input className="border w-full" type="text" name="email" />
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input className="border w-full" type="text" name="password" />
        </div>
        <div>
          <label htmlFor="name">Photo</label>
          <input className="border w-full" type="text" name="photo" />
        </div>{" "}
        <div>
          <input className="border w-full" type="submit" value="Register" />
        </div>
      </form>
      <div>
        <p className="flex gap-10 text-3xl justify-center my-4">
          <span onClick={handleGoogleLogin}>
            <FaGoogle />
          </span>
          <span>
            <FaGithub />
          </span>
        </p>
        <p className="text-center">
          {" "}
          Already have an account? please <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
