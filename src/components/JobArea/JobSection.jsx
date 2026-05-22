import { useState } from "react";
import JobList from "./JobList";
import JobFilter from "./JobFilter";
import {data} from "../../util/data"
const jobs=data.jobs;
const JobSection = () => {
  const [filterData, setFilterData] = useState({
    title: "",
    category: "",
    country: "",
    salary: "",
    skills: "",
  });
const normalize = (str) => (str || "").toLowerCase().trim();

const filteredJobs = jobs.filter((job) => {
  const hasFilter = Object.values(filterData).some((val) => val.trim() !== "");
  if (!hasFilter) return true;

  return (
    (!filterData.title    || normalize(job.title).includes(normalize(filterData.title))) &&
    (!filterData.category || normalize(job.category).includes(normalize(filterData.category))) &&
    (!filterData.country  || normalize(job.country).includes(normalize(filterData.country))) &&
    (!filterData.salary   || normalize(job.salary).includes(normalize(filterData.salary))) &&
    (!filterData.skills   || normalize(job.skills).includes(normalize(filterData.skills)))
  );
});
  return (
    <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-[70%_30%]">
      <JobList jobs={filteredJobs} />
      <JobFilter setFilterData={setFilterData} />
    </div>
  );
};

export default JobSection;
