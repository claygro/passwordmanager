import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl cursor-pointer">
          <span className="text-green-500">&lt;</span>
          {/* &lt is < */}
          <span className="text-white">Pass</span>
          <span className="text-green-500">Op/&gt;</span>
          {/* &gt is > */}
        </div>
        {/* Links (visible on medium and larger screens) */}
        <div className=" flex space-x-6">
          <NavLink
            to="/passwordmanager/"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition duration-200 ${
                isActive ? "text-yellow-300" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/passwordmanager//about"
            className={({ isActive }) =>
              `hover:text-yellow-300 transition duration-200 ${
                isActive ? "text-yellow-300" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Mobile menu icon placeholder (optional for future) */}
        <div className="md:hidden">
          {/* You can add a hamburger icon here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
