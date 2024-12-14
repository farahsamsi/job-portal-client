import React from "react";
import SectionHeading from "../Shared/SectionHeading";
import { useLoaderData } from "react-router-dom";
import HotJobCard from "../Home/HotJobCard";

const AllJobs = () => {
  const jobs = useLoaderData();
  const sectTitle = "Explore All Job Opportunities";
  const subtitle =
    "Find your perfect role from a wide range of opportunities tailored for you. Start your career journey today!";
  return (
    <div>
      <SectionHeading title={sectTitle} subtitle={subtitle}></SectionHeading>

      {/* filter functionalities */}
      <div className="mb-6 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Filter Dropdown */}
        <div className="w-full flex items-center justify-center">
          <select
            // onChange={(e) => handleFilter(e.target.value)}
            // value={selectedGenre}
            className="select select-bordered w-8/12"
          >
            <option value="all">All Genres</option>
            {/* {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))} */}
          </select>
        </div>
        {/* Sort Dropdown */}
        <div className="w-full flex items-center justify-center">
          <select
            tabIndex={0}
            role="button"
            // onChange={(e) => handleSort(e.target.value)}
            // value={sortCriteria}
            className="select select-bordered w-8/12 "
          >
            <option disabled value="">
              Sort by...
            </option>
            <option value="rating">Rating</option>
            <option value="year">Year</option>
          </select>
        </div>
      </div>

      {/* cards render */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 px-1">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
