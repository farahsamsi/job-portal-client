import React from "react";
import { useLoaderData } from "react-router-dom";
// import SectionHeading from "../Shared/SectionHeading";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMoneyBillAlt,
} from "react-icons/fa";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
    total_applicants,
  } = job;
  const sectionTitle = title;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      {/* Job Header */}
      <div className="flex items-center mb-6">
        <img
          src={company_logo}
          alt={`${company} Logo`}
          className="w-20 h-20 object-cover mr-4 rounded-md"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>

      {/* Job Information */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center text-gray-700">
          <FaMapMarkerAlt className="text-blue-500 mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <FaBriefcase className="text-blue-500 mr-2" />
          <span>{jobType}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <FaCalendarAlt className="text-blue-500 mr-2" />
          <span>Deadline: {applicationDeadline}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <FaMoneyBillAlt className="text-blue-500 mr-2" />
          <span>
            Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </span>
        </div>
      </div>

      {/* Job Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
          {requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* HR Contact */}
      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <h3 className="text-lg font-semibold mb-2">HR Contact</h3>
        <p className="text-gray-700">
          <strong>Name:</strong> {hr_name || "N/A"}
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong>{" "}
          <a
            // href={`mailto:${hr_email}`}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            {hr_email || "N/A"}
          </a>
        </p>
      </div>

      {/* Apply and Shortlist Buttons */}
      <div className="flex flex-wrap gap-4 items-center justify-between space-x-4">
        <div>
          <p>Total Applicants: {total_applicants || 0}</p>
        </div>
        <div className="flex space-x-4">
          <button className="btn text-white font-bold bg-primary hover:bg-blue-950">
            Apply Now
          </button>
          <button className="btn btn-outline btn-primary">Shortlist</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
