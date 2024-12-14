import React, { useState } from "react";
import SectionHeading from "../Shared/SectionHeading";
import { useLoaderData } from "react-router-dom";
import HotJobCard from "../Home/HotJobCard";
import { MdSearchOff } from "react-icons/md";

const AllJobs = () => {
  const jobsLoaded = useLoaderData();
  const [jobs, setJobs] = useState(jobsLoaded);
  const [error, setError] = useState("");
  const sectTitle = "Explore All Job Opportunities";
  const subtitle =
    "Find your perfect role from a wide range of opportunities tailored for you. Start your career journey today!";

  // search by title functionality
  const handleSearchTitle = (event) => {
    const input = event.target.value.toLowerCase(); // Convert to lowercase for case-insensitive

    // Filter jobs based on the search input
    const filtered = jobsLoaded.filter(
      (job) => job.title.toLowerCase().includes(input) // Match job title with the input
    );
    if (filtered.length === 0) {
      setError("Sorry, no jobs found matching your search.");
    } else {
      setJobs(filtered);
    }
  };
  return (
    <div>
      <SectionHeading title={sectTitle} subtitle={subtitle}></SectionHeading>

      {/* filter functionalities */}
      <div className="mb-6 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Search by job title */}
        <div className="w-full flex items-center justify-center">
          <input
            onChange={handleSearchTitle}
            name="searchTitle"
            type="text"
            placeholder="Search Jobs By Title Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

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
      {error ? (
        <p className="text-red-500 flex flex-col lg:flex-row text-center items-center justify-center text-4xl">
          <MdSearchOff className="text-8xl" />
          {error}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 px-1">
          {jobs.map((job) => (
            <HotJobCard key={job._id} job={job}></HotJobCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllJobs;
