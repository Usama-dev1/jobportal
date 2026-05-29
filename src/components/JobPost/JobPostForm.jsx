import { useState } from "react";

const JobPostForm = () => {
  const formInitialState = {
    title: "",
    company: "",
    country: "",
    featured: false,
    salary: "1k-10k",
    skills: "", // Keep this as a string while the user types
    jobTypeRemote: false,
    jobTypeHybrid: false,
    jobTypeContract: false,
    isNew: false,
    logo: "",
    description: "",
    link: "",
    logoBg: "",
  };

  const [formData, setFormData] = useState(formInitialState);

  // Unified change handler for all strings, selects, and checkboxes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Convert the job type checkboxes into a clean string array
    const selectedJobTypes = [];
    if (formData.jobTypeRemote) selectedJobTypes.push("Remote");
    if (formData.jobTypeHybrid) selectedJobTypes.push("Hybrid");
    if (formData.jobTypeContract) selectedJobTypes.push("Contract");

    // 2. FIXED & OPTIMIZED: Convert comma-separated skills string into a clean array
    // .split(',') cuts it into an array
    // .map(s => s.trim()) removes accidental spaces (e.g., " React " -> "React")
    // .filter(Boolean) safely removes empty strings if they leave a trailing comma
    const skillsArray = formData.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

    // 3. Construct your final payload for your backend API
    const submissionData = {
      ...formData,
      skills: skillsArray, // Now safely formatted as ["React", "Node.js"]
      jobTypes: selectedJobTypes, // E.g., ["Remote", "Hybrid"]
    };

    // Clean up unnecessary UI checkbox states before logging/sending if desired:
    delete submissionData.jobTypeRemote;
    delete submissionData.jobTypeHybrid;
    delete submissionData.jobTypeContract;

    console.log("Form Ready for API Submission:", submissionData);
  };

  const handleClear = () => {
    setFormData(formInitialState);
  };

  return (
    <div className="bg-background w-full py-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col py-1 justify-center items-center px-4 space-y-1 max-w-xl mx-auto rounded-lg shadow-sm"
      >
        {/* Form Header */}
        <div className="*:w-full flex items-center transition-all duration-300 flex-col justify-center py-2 space-y-3 text-center">
          <button
            type="button"
            className="text-[clamp(14px,2vw,16px)] whitespace-nowrap font-semibold text-gray-800 hover:text-orange-500 transition-colors focus:outline-none"
          >
            Post remote jobs
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="text-[clamp(12px,1.5vw,14px)] whitespace-nowrap py-1 md:px-1.5 primary-btn rounded-2xl border border-gray-300 hover:bg-gray-500 transition-colors"
          >
            Clear Form
          </button>
        </div>

        {/* Form Inputs Container */}
        <div className="w-full flex flex-col justify-center items-center space-y-2 animate-fadeIn">
          {/* Job Title */}
          <div className="w-full flex flex-col items-start">
            <label
              htmlFor="title"
              className="text-sm font-semibold text-gray-700"
            >
              Job Title
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full h-7 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              placeholder="Filter by title, companies, expertise..."
            />
          </div>

          {/* Job Types */}
          <div className="w-full flex flex-col items-start space-y-1">
            <span className="text-sm font-semibold text-gray-700">
              Job Type
            </span>
            <label className="flex items-center text-sm cursor-pointer">
              <input
                className="me-3 border-gray-300 rounded focus:ring-orange-500"
                name="jobTypeRemote"
                checked={formData.jobTypeRemote}
                onChange={handleInputChange}
                type="checkbox"
              />
              Remote
            </label>
            <label className="flex items-center text-sm cursor-pointer">
              <input
                className="me-3 border-gray-300 rounded focus:ring-orange-500"
                name="jobTypeHybrid"
                checked={formData.jobTypeHybrid}
                onChange={handleInputChange}
                type="checkbox"
              />
              Hybrid
            </label>
            <label className="flex items-center text-sm cursor-pointer">
              <input
                className="me-3 border-gray-300 rounded focus:ring-orange-500"
                name="jobTypeContract"
                checked={formData.jobTypeContract}
                onChange={handleInputChange}
                type="checkbox"
              />
              Contract
            </label>
          </div>

          {/* Country */}
          <div className="w-full flex flex-col items-start space-y-1">
            <label
              htmlFor="country"
              className="text-sm font-semibold text-gray-700"
            >
              Country
            </label>
            <input
              className="w-full h-7 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              name="country"
              type="text"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="e.g. United States, Remote"
            />
          </div>

          {/* Salary */}
          <div className="w-full flex flex-col items-start space-y-1">
            <label
              htmlFor="salary"
              className="text-sm font-semibold text-gray-700"
            >
              Salary
            </label>
            <select
              className="w-full h-7 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
            >
              <option value="1k-10k">1k-10k</option>
              <option value="10k-30k">10k-30k</option>
              <option value="30k-50k">30k-50k</option>
              <option value="50k-80k">50k-80k</option>
              <option value="80k-110k">80k-110k</option>
              <option value="110k-150k">110k-150k</option>
              <option value="150k-200k">150k-200k</option>
              <option value="200k+">200k+</option>
            </select>
          </div>

          {/* Skills Input (Points directly to handleInputChange) */}
          <div className="w-full flex flex-col items-start space-y-1">
            <label
              htmlFor="skills"
              className="text-sm font-semibold text-gray-700"
            >
              Skills
            </label>
            <input
              className="w-full h-7 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              type="text"
              placeholder="e.g. React, Node.js"
            />
          </div>

          {/* Description */}
          <div className="w-full flex flex-col items-start space-y-1">
            <label
              htmlFor="description"
              className="text-sm font-semibold text-gray-700"
            >
              Description
            </label>
            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe the job and duties..."
            />
          </div>

          {/* Job Link */}
          <div className="w-full flex flex-col items-start space-y-1">
            <label
              htmlFor="link"
              className="text-sm font-semibold text-gray-700"
            >
              Job Link
            </label>
            <input
              className="w-full h-7 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              type="text"
              placeholder="https://company.com/careers/job"
            />
          </div>

          {/* Submit Button */}
          <div className="py-3 w-full text-center">
            <button
              type="submit"
              className="w-[50%] px-4 py-1 bg-orange-500 text-white font-light text-sm rounded-md hover:bg-orange-600 transition-colors"
            >
              Post Job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobPostForm;
