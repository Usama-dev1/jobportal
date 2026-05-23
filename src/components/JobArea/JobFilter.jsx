import { useState } from "react";

const JobFilter = ({ setFilterData }) => {
  const formInitialState = {
    title: "",
    jobType: "",
    country: "",
    salary: "",
    skills: "",
  };
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [formData, setFormData] = useState(formInitialState);
  const [filtered, setFiltered] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
    setFilterData(formData);
    setFiltered(true);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setFormData(formInitialState);
    setFilterData(formInitialState);
    setFiltered(false);
  };
  return (
    <div className="relative container-main bg-background w-full py-2">
      <form
        onSubmit={handleSubmit}
        className="sticky top-15 overflow-y-auto bg-white flex flex-col py-1 justify-center items-center px-4 space-y-1 max-w-xl mx-auto rounded-lg shadow-sm"
      >
        {/* Form Header */}
        <div
          className={`w-full flex items-center transition-all duration-300 ${
            isFilterOpen
              ? "flex-row justify-between py-2"
              : "flex-col justify-center py-2 space-y-3 text-center"
          }`}
        >
          {/* Main heading acts as an interactive toggle button */}
          <button
            type="button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="text-[clamp(14px,2vw,16px)] whitespace-nowrap font-semibold text-gray-800 hover:text-orange-500 transition-colors focus:outline-none"
          >
            Search remote jobs
          </button>

          <button
            type="button"
            onClick={handleClear}
            className={`${!isFilterOpen ? "hidden" : ""} text-[clamp(12px,1.5vw,14px)] whitespace-nowrap py-1 md:px-1.5 primary-btn rounded-2xl border border-gray-300 hover:bg-gray-500 transition-colors`}
          >
            Clear Filter
          </button>
        </div>

        {/* Toggled Form Inputs Container */}
        {isFilterOpen && (
          <div className="w-full flex flex-col justify-center items-center space-y-6 animate-fadeIn">
            {/* Title Filter (No Label) */}
            <div className="w-full flex flex-col items-start">
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
              <label
                htmlFor="jobType"
                className="text-sm font-semibold text-gray-700"
              >
                Job Type
              </label>
              <input
                className="w-full h-7 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
                type="text"
                placeholder="e.g. Design, Development"
              />
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

            {/* Salary Range */}
            <div className="w-full flex flex-col items-start space-y-2">
              {/* Label and Dynamic Value */}
              <div className="w-full flex justify-between items-center">
                <label
                  htmlFor="salary"
                  className="text-sm font-semibold text-gray-700"
                >
                  Min Salary
                </label>
                <span className="text-sm font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-md">
                  ${formData.salary || 1000}
                </span>
              </div>

              {/* The Range Input */}
              <input
                id="salary" // Added to link with htmlFor="salary"
                name="salary"
                type="range"
                min="1000"
                max="200000"
                step="1000"
                value={formData.salary || 1000} // IMPORTANT: Makes this a controlled component
                onChange={handleInputChange}
                // Replaced text-input classes with range-specific classes
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary-orange focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              />

              {/* Min/Max Labels */}
              <div className="w-full flex justify-between text-xs text-gray-400 font-medium">
                <span>$1k</span>
                <span>$200k+</span>
              </div>
            </div>

            {/* Skills */}
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

            {/* Submit Button */}
            <div className="py-3  w-full text-center">
              <button
                type="submit"
                onClick={() =>
                  filtered ? alert("Clear the filter after for new search") : ""
                }
                className="secondary-btn w-[50%] px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
              >
                {filtered ? "Filter Applied" : "Apply Filters"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default JobFilter;
