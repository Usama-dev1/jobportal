import JobList from "./JobList";
import JobFilter from "./JobFilter";
const JobSection = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-[70%_30%]">
      <JobList />
      <JobFilter />
    </div>
  );
};

export default JobSection;
