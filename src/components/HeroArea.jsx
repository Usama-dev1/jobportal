import { Flame } from "lucide-react";
import { data } from "../util/data";
import { Link } from "react-router";
const HeroArea = () => {
  const jobsCount = data.jobs.length; // Example job count, you can replace it with dynamic data if needed
  return (
    <div className="container-main flex flex-col items-center justify-center text-center space-y-6">
      <div className="w-full flex flex-col items-center justify-center space-y-8 bg-secondary p-10">
        <h2 className="w-full text-xl md:text-4xl text-primary flex text-center sm:text-start justify-center sm:justify-start gap-2">
          {" "}
          <Flame className="inline-block text-4xl md:w-10 md:h-10" />{" "}
          {jobsCount.toLocaleString()} jobs posted
        </h2>
        <h1 className="w-full text-3xl md:text-4xl xl:text-6xl font-bold flex justify-center sm:justify-start gap-4 text-primary">
          The largest job board for remote jobs
        </h1>
        <p className="w-full text-sm sm:text-lg text-muted-foreground flex text-center sm:text-start justify-center sm:justify-start gap-4">
          For your future find your dream job #1 site for remote jobs
        </p>
        <div className="w-full flex items-center justify-center  sm:justify-start gap-4">
          <Link to="/jobs">
            <button className="primary-btn self-start text-xs sm:text-lg w-30 text-nowrap sm:w-40 sm:h-12">
              Explore Jobs
            </button>
          </Link>
          <Link to="job/post">
            <button className="secondary-btn btn-outline text-xs self-start w-30  text-nowrap sm:text-lg sm:w-40 sm:h-12 ">
              Post Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
