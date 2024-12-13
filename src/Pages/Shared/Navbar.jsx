import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import logo from "../../assets/Images/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // handle sign out
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successfully sign out");
      })
      .catch((err) => console.log(err.message));
  };

  // sign in and sign buttons
  const buttons = (
    <>
      {user ? (
        <>
          <button onClick={handleSignOut} className="btn">
            Sign out
          </button>
        </>
      ) : (
        <div className="flex justify-center items-center gap-5">
          <Link to="register">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="underline hover:text-primary"
            >
              Register
            </motion.button>
          </Link>
          <Link to="signIn">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="btn min-h-0 h-auto bg-primary text-white px-6 py-2 hover:bg-blue-950"
            >
              Sign In
            </motion.button>
          </Link>
        </div>
      )}
    </>
  );

  // navlinks
  const links = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div className="navbar px-6 sticky top-0 container z-50 bg-transparent backdrop-blur-lg flex justify-between items-center">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
            {buttons}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost flex justify-center items-center text-xl"
        >
          <span>
            <img className="w-10" src={logo} alt="" />
          </span>
          <span className="text-2xl font-bold">Job Portal</span>
        </Link>
      </div>
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="hidden md:block">
        {buttons}
        {/* {user ? (
          <>
            <button onClick={handleSignOut} className="btn">
              Sign out
            </button>
          </>
        ) : (
          <div className="flex justify-center items-center gap-5">
            <Link to="register">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="underline hover:text-primary"
              >
                Register
              </motion.button>
            </Link>
            <Link to="signIn">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="btn min-h-0 h-auto bg-primary text-white px-6 py-2 hover:bg-blue-950"
              >
                Sign In
              </motion.button>
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
