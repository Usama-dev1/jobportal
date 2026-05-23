import JobListFilter from "./JobListFilter";
const JobList = ({ jobs, setSortBy, sortBy }) => {
  const numJobs = jobs.length;

  return (
    <div className="py-4">
      <JobListFilter numJobs={numJobs} sortBy={sortBy} setSortBy={setSortBy} />
      <ul className="w-full flex flex-col gap-4 p-4">
        {numJobs === 0 ? (
          <div>No Jobs Found Search again </div>
        ) : (
          jobs.map((job) => (
            <li
              key={job.id}
              className="w-full border-l-2 border-primary bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                {/* Logo/Image */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br ${job.logoBg} rounded-lg shrink-0 flex items-center justify-center`}
                >
                  <span className="text-white text-2xl">{job.logo}</span>
                </div>

                {/* Main Content */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-gray-800 hover:text-primary cursor-pointer">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                      <span className="font-medium">{job.company}</span>
                      <span>📍 {job.country}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {job.featured && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                      {job.remote && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          Remote
                        </span>
                      )}
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        {job.jobType}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-400/20 text-primary text-xs rounded-full me-2"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side Badges */}
                <div className="flex flex-row sm:flex-col gap-2 items-center">
                  {job.isNew ? (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                      New
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs rounded-full">Days</span>
                  )}
                  <button className="text-gray-400 hover:text-gray-600">
                    📌 Pin
                  </button>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default JobList;
