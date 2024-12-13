import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import loginLottieData from "../../assets/Lottie/Login.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const SignIn = () => {
  const { signInUser, createGoogleUser } = useContext(AuthContext);
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

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    //   sign in user
    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome to Job Portal",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
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
        <Lottie animationData={loginLottieData}></Lottie>
      </div>
      <div>
        <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
          <h1 className="text-2xl lg:text-5xl font-extrabold text-primary">
            Login
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
              <motion.button
                whileHover={{ scale: 1.02 }}
                // whileTap={{ scale: 0.8 }}
                type="submit"
                className="btn bg-primary text-white font-bold hover:bg-blue-950"
              >
                Login
              </motion.button>
            </div>
          </form>
          <div className="divider"></div>

          <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mb-6">
            <div className="flex flex-col justify-center">
              <p>Already have an account ?</p>
              <Link to="/register" className="btn">
                <button>Register</button>
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

export default SignIn;
