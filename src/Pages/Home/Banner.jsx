import { easeOut, motion } from "framer-motion";
import team1 from "../../assets/Images/team1.jpg";
import team2 from "../../assets/Images/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-bgColor min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 hidden lg:block">
          <motion.img
            animate={{
              y: [-10, 40, -10], // start moving from 30px up and goes down to 30px and then returns
            }}
            transition={{
              duration: 8, // Total animation duration
              repeat: Infinity, // Makes the animation loop infinitely
              repeatType: "loop", // Ensures smooth looping
            }}
            src={team1}
            className="w-3/4 mx-auto rounded-t-[2rem] rounded-r-[2rem] border-l-8 border-b-8 border-blue-700   shadow-2xl"
          />
          <motion.img
            animate={{
              x: [110, 150, 100], // start moving from 30px up and goes down to 30px and then returns
            }}
            transition={{
              duration: 8, // Total animation duration
              repeat: Infinity, // Makes the animation loop infinitely
              repeatType: "loop", // Ensures smooth looping
            }}
            src={team2}
            className="w-2/4 mt-3 rounded-t-[2rem] rounded-r-[2rem] border-l-8 border-b-8 border-blue-700   shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold">
            Your <span className="text-primary">Dream Job</span> Awaits – Start
            Your Journey Today!
          </h1>
          <p className="py-6">
            Discover endless career opportunities tailored to your skills and
            ambitions. Connect with top employers, explore diverse industries,
            and take the next step in your professional journey. Whether you're
            a seasoned expert or just starting out, your dream job is just a
            click away. Join today and unlock your potential with a platform
            designed to empower your future!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
