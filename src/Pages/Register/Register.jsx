import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import registerLottieData from "../../assets/Lottie/Register.json";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Register = () => {
  const { createUser, createGoogleUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // user with google
  const handleGoogleLogin = () => {
    createGoogleUser()
      .then(() => {
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome to Job Portal",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  // form submission to create user using email and pw
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters long, with at least one uppercase letter and one lowercase letter.",
      });
      return;
    }

    //   creating user
    createUser(email, password)
      .then((result) => {
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome to Job Portal",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-10 flex justify-center items-center">
        <Lottie animationData={registerLottieData}></Lottie>
      </div>
      <div>
        <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
          <h1 className="text-2xl lg:text-5xl font-extrabold text-primary">
            Register Now
          </h1>
          <p className="font-medium text-black/80">
            Access endless opportunities by logging in or creating an account.
            Join us to unlock your path to success and connect with the career
            of your dreams!
          </p>
        </div>

        <div className="card bg-base-100 w-11/12 mx-auto lg:max-w-screen-md shrink-0 shadow-2xl border relative">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter your display photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {/* {error && <p className="text-red-600">{error}</p>} */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-primary text-white font-bold hover:bg-blue-950"
              >
                Register
              </button>
            </div>
          </form>
          <div className="divider"></div>

          <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mb-6">
            <div className="flex flex-col justify-center">
              <p>Already have an account ?</p>
              <Link to="/signIn" className="btn">
                <button>Login</button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>Or</p>
              <button onClick={handleGoogleLogin} className="btn">
                Continue with Google
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
