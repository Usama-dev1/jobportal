import JobList from "./JobList";
import JobFilter from "./JobFilter";
import { data } from "../../util/data";
import { useJobFilter } from "../../hooks/useJobFilter";
const jobs = data.jobs;
const JobSection = () => {
  const { filteredJobs, setFilterData, sortBy, setSortBy } = useJobFilter(jobs);
  return (
    <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-[70%_30%]">
      <JobList jobs={filteredJobs} setSortBy={setSortBy} sortBy={sortBy} />
      <JobFilter setFilterData={setFilterData} />
    </div>
  );
};

export default JobSection;
