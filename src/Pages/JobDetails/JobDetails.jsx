import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const { title, company } = job;
  return (
    <div>
      <h2>Job details for : {job.title}</h2>
      <p></p>
    </div>
  );
};

export default JobDetails;
