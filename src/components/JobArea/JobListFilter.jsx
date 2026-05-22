import React from "react";

const JobListFilter = () => {
  return (
    <div className="px-4 space-y-4">
      {/* Header with timestamp */}
      <div>
        <h3 className="text-sm text-gray-500 font-medium">
          Latest post 4 hours ago
        </h3>
      </div>

      <hr className="w-full border-gray-200" />

      {/* Stats and Filter Row */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-700">Jobs 358</span>
        <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="newest">Newest</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* Section Title */}
      <div>
        <h2 className="text-[clamp(14px,2vw,16px)] font-bold text-gray-800">
          All Other Remote Jobs
          <span className="ms-5 inline-block text-[clamp(12px,1vw,16px)] font-normal text-gray-500">
            Latest post 17 minutes ago
          </span>
        </h2>
      </div>
    </div>
  );
};

export default JobListFilter;
