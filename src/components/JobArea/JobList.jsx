import JobListFilter from "./JobListFilter";

const JobList = () => {
  const jobs = [
    {
      id: 1,
      title: "Staff Product Engineer",
      company: "New LawnStarter",
      location: "São Paulo, Brazil",
      featured: true,
      remote: true,
      jobType: "Fulltime",
      isNew: true,
      logo: "🏢",
      logoBg: "from-blue-500 to-purple-500",
    },
    {
      id: 2,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Remote (Global)",
      featured: false,
      remote: true,
      jobType: "Fulltime",
      isNew: true,
      logo: "💻",
      logoBg: "from-green-500 to-teal-500",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignStudio",
      location: "New York, USA",
      featured: true,
      remote: false,
      jobType: "Contract",
      isNew: false,
      logo: "🎨",
      logoBg: "from-pink-500 to-rose-500",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudSystems",
      location: "London, UK",
      featured: false,
      remote: true,
      jobType: "Fulltime",
      isNew: false,
      logo: "☁️",
      logoBg: "from-indigo-500 to-blue-500",
    },
    {
      id: 5,
      title: "Product Manager",
      company: "InnovateLabs",
      location: "Berlin, Germany",
      featured: true,
      remote: false,
      jobType: "Fulltime",
      isNew: true,
      logo: "📱",
      logoBg: "from-orange-500 to-red-500",
    },
    {
      id: 6,
      title: "Backend Developer",
      company: "DataFlow",
      location: "Remote (EMEA)",
      featured: false,
      remote: true,
      jobType: "Part-time",
      isNew: false,
      logo: "⚙️",
      logoBg: "from-cyan-500 to-blue-500",
    },
    {
      id: 7,
      title: "Staff Product Engineer",
      company: "New LawnStarter",
      location: "São Paulo, Brazil",
      featured: true,
      remote: true,
      jobType: "Fulltime",
      isNew: true,
      logo: "🏢",
      logoBg: "from-blue-500 to-purple-500",
    },
    {
      id: 8,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Remote (Global)",
      featured: false,
      remote: true,
      jobType: "Fulltime",
      isNew: true,
      logo: "💻",
      logoBg: "from-green-500 to-teal-500",
    },
    {
      id: 9,
      title: "UX/UI Designer",
      company: "DesignStudio",
      location: "New York, USA",
      featured: true,
      remote: false,
      jobType: "Contract",
      isNew: false,
      logo: "🎨",
      logoBg: "from-pink-500 to-rose-500",
    },
    {
      id: 10,
      title: "DevOps Engineer",
      company: "CloudSystems",
      location: "London, UK",
      featured: false,
      remote: true,
      jobType: "Fulltime",
      isNew: false,
      logo: "☁️",
      logoBg: "from-indigo-500 to-blue-500",
    },
    {
      id: 11,
      title: "Product Manager",
      company: "InnovateLabs",
      location: "Berlin, Germany",
      featured: true,
      remote: false,
      jobType: "Fulltime",
      isNew: true,
      logo: "📱",
      logoBg: "from-orange-500 to-red-500",
    },
    {
      id: 12,
      title: "Backend Developer",
      company: "DataFlow",
      location: "Remote (EMEA)",
      featured: false,
      remote: true,
      jobType: "Part-time",
      isNew: false,
      logo: "⚙️",
      logoBg: "from-cyan-500 to-blue-500",
    },
  ];
  return (
    <div className="py-4">
      <JobListFilter />
      <ul className="w-full flex flex-col gap-4 p-4">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="w-full bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              {/* Logo/Image */}
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${job.logoBg} rounded-lg flex-shrink-0 flex items-center justify-center`}
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
                    <span>📍 {job.location}</span>
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
        ))}
      </ul>
    </div>
  );
};

export default JobList;
