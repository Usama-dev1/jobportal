import { useState } from "react";

const JobFilter = () => {
  // 1. Manage the open/hidden state of the filter form
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  return (
    <div className="relative container-main bg-background w-full py-2">
      <form className="sticky top-15 overflow-y-auto bg-white flex flex-col py-1 justify-center items-center px-4 space-y-1 max-w-xl mx-auto rounded-lg shadow-sm">
        {/* Form Header */}
        <div
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`w-full flex items-center transition-all duration-300 ${
            isFilterOpen
              ? "flex-row justify-between py-2"
              : "flex-col justify-center py-2 space-y-3 text-center"
          }`}
        >
          {/* Main heading acts as an interactive toggle button */}
          <button
            type="button"
            className="text-[clamp(14px,2vw,16px)] whitespace-nowrap font-semibold text-gray-800 hover:text-orange-500 transition-colors focus:outline-none"
          >
            Search remote jobs
          </button>

          <button
            type="button"
            className={`${!isFilterOpen ? "hidden" : ""} text-[clamp(12px,1.5vw,14px)] whitespace-nowrap py-1 md:px-1.5 primary-btn rounded-2xl border border-gray-300 hover:bg-gray-50 transition-colors`}
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
                className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="Filter by title, companies, expertise..."
              />
            </div>

            {/* Job Categories */}
            <div className="w-full flex flex-col items-start space-y-1">
              <label
                htmlFor="category"
                className="text-sm font-semibold text-gray-700"
              >
                Job Categories
              </label>
              <input
                className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                name="category"
                type="text"
                placeholder="e.g. Design, Development"
              />
            </div>

            {/* Countries */}
            <div className="w-full flex flex-col items-start space-y-1">
              <label
                htmlFor="country"
                className="text-sm font-semibold text-gray-700"
              >
                Countries
              </label>
              <input
                className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                name="country"
                type="text"
                placeholder="e.g. United States, Remote"
              />
            </div>

            {/* Salary Range */}
            <div className="w-full flex flex-col items-start space-y-1">
              <label
                htmlFor="salary"
                className="text-sm font-semibold text-gray-700"
              >
                Salary Range
              </label>
              <input
                className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                name="salary"
                type="text"
                placeholder="e.g. $50k - $100k"
              />
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
                className="w-full h-9 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                name="skills"
                type="text"
                placeholder="e.g. React, Node.js"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 w-full text-center">
              <button className="secondary-btn w-[50%] px-6 py-1 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default JobFilter;
