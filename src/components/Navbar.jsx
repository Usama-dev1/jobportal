import { useState, useEffect } from "react";
import { SquareMenu, X } from "lucide-react";
import { NavLink } from "react-router";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 ${isScrolled ? "shadow-bottom bg-white" : "bg-secondary"}  bottom-0 z-50 px-2 container-main flex justify-between items-center py-2`}
    >
      <div className="text-3xl text-primary font-extrabold font-sans">
        <NavLink to="/">RemoteJobs</NavLink>
      </div>
      <div className="hidden md:flex space-x-4">
        <button className="hidden md:flex secondary-btn">
          Unlock All Jobs
        </button>
        <button className="hidden md:flex primary-btn">Login</button>
        <button className="hidden md:flex primary-btn">For Employers</button>
      </div>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? (
          <SquareMenu className="text-primary text-9xl" />
        ) : (
          <X className="text-5xl" />
        )}
      </button>
      {menuOpen && (
        <div className="md:hidden fixed h-screen border-t border-primary top-12 left-0 right-0 bg-white z-50 flex flex-col items-center justify-start pt-6 space-y-4 px-6">
          <button className="md:hidden w-full secondary-btn">
            Unlock All Jobs
          </button>
          <button className="md:hidden w-full primary-btn">Login</button>
          <button className="md:hidden  w-full primary-btn">
            For Employers
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
