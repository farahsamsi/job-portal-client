import { FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
    jobType,
  } = job;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <div className="flex gap-2 px-4 pt-4">
        <figure>
          <img className="w-16" src={company_logo} alt={company} />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex gap-1 items-center">
            <FaLocationDot /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex gap-1 items-center">
          <FaBriefcase />
          <span className="text-sm">{jobType}</span>
        </div>
        <p>
          {description}
          <div className="flex gap-2 flex-wrap mt-2">
            {requirements.map((req, i) => (
              <p
                key={i}
                className="border rounded-md px-2 py-1 max-w-fit hover:bg-blue-950 hover:text-white text-sm"
              >
                {req}
              </p>
            ))}
          </div>
        </p>
        <div className="card-actions justify-end items-center mt-2">
          <p>
            Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary hover:bg-blue-950 ">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
