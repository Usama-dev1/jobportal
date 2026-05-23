import { useState } from "react";
const normalize = (str) => (str ? String(str).trim().toLowerCase() : "");

export const useJobFilter = (jobs) => {
  const [sortBy, setSortBy] = useState("latest");
  const [filterData, setFilterData] = useState({
    title: "",
    jobType: "",
    country: "",
    salary: "",
    skills: "",
  });

  if (!jobs || !Array.isArray(jobs)) return { filteredJobs: [], setFilterData };
  const filteredJobs = jobs.filter((job) => {
    const hasFilter = Object.values(filterData).some(
      (val) => String(val).trim() !== "",
    );
    if (!hasFilter) return true;

    return (
      (!filterData.title ||
        normalize(job.title).includes(normalize(filterData.title))) && //if title check left or return right
      (!filterData.jobType ||
        normalize(job.jobType).includes(normalize(filterData.jobType))) &&
      (!filterData.country ||
        normalize(job.country).includes(normalize(filterData.country))) &&
      (!filterData.salary || job.salary <= Number(filterData.salary)) &&
      (!filterData.skills ||
        job.skills.some((s) =>
          normalize(s).includes(normalize(filterData.skills)),
        ))
    );
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === "latest")
      return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortBy === "oldest")
      return new Date(a.createdAt) - new Date(b.createdAt);
    return 0; // "latest" = no sort, original order
  });

  return {
    filteredJobs: sortedJobs,
    filterData,
    setFilterData,
    sortBy,
    setSortBy,
  };
};
