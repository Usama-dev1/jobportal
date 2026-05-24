const Footer = () => {
  return (
    <div className="w-full bg-secondary">
      <div className="container-main mx-auto">
        {/* Footer top */}
        <div className="w-full py-10 gap-8 grid grid-cols-1 sm:grid-cols-3  px-4">
          {/* Column 1 - RemoteJobs */}
          <div className="flex flex-col items-start justify-start gap-3 w-full">
            <h2 className="text-primary font-bold text-lg">RemoteJobs</h2>
            <ul className="flex flex-col space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Remotive Affiliate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Program Reviews & Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Sponsorship
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Press About Terms of Use & Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Find Remote Jobs */}
          <div className="flex flex-col items-start justify-start gap-3 w-full">
            <h2 className="text-primary font-bold text-lg">Find Remote Jobs</h2>
            <ul className="flex flex-col space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Join Remotive
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Remote Job Search Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Remote Work Statistics Hiring Trends
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Remote Jobs Index
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Hiring Remotely */}
          <div className="flex flex-col items-start justify-start gap-3 w-full">
            <h2 className="text-primary font-bold text-lg">Hiring Remotely</h2>
            <ul className="flex flex-col space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Why Remotive?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Post a Remote Job
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Remote Hiring Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Help Center for Recruiters
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="w-full border-t border-gray-200 py-4">
          <ul className="w-full flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
