import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";
import SectionHeading from "../Shared/SectionHeading";

const HotJobs = () => {
  // loading data
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs?limit=8")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  // section heading
  const title = "Hot Jobs: Your Next Big Opportunity Awaits!";
  const subtitle =
    "Explore trending roles in top industries. Don’t miss out on the most sought-after opportunities—apply now and elevate your career!";
  return (
    <div className="my-10">
      <SectionHeading title={title} subtitle={subtitle}></SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 px-1">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
