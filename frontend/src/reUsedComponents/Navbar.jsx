import React from "react";
import logo from "../../public/CompanyLogo.png"; // Adjust the path as necessary
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center py-4 px-8 bg-green-900 shadow-md relative">
      {/* Left Section */}
      <div className="flex items-center h-full">
        <div className="flex items-center mr-4 h-full">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <ul className="hidden md:flex items-center gap-4 list-none m-0 p-0 h-full">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `no-underline flex items-center h-full py-2 transition-colors duration-300 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="px-6 py-2 rounded-[12px] border border-white/20 border-b-4 font-medium text-white bg-transparent hover:bg-[#0d9161] transition-colors duration-300 cursor-pointer text-center">
          Join
        </button>
        <NavLink to="/contact" className="w-full">
          <button className="px-6 py-2 rounded-[12px] border-t-[1.5px] border-r-[1.5px] border-l-[1.5px] border-b-[4px] border-[#0d9161] bg-[#11B67A] text-white font-medium hover:bg-[#0d9161] transition-colors duration-300 flex items-center cursor-pointer justify-center ">
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </NavLink>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-green-900 shadow-lg z-50">
          <div className="flex flex-col px-8 py-4">
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-2 no-underline transition-colors duration-300 ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-slate-300 hover:text-white"
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 mt-4">
              <button className="w-full px-6 py-2 rounded-[12px] border border-white/20 border-b-4 font-medium text-white bg-transparent hover:bg-[#0d9161] transition-colors duration-300 text-center">
                Join
              </button>
              <NavLink to="/contact" className="w-full" onClick={toggleMenu}>
                <button className="w-full px-6 py-2 rounded-[12px] border-t-[1.5px] border-r-[1.5px] border-l-[1.5px] border-b-[4px] border-[#0d9161] bg-[#11B67A] text-white font-medium hover:bg-[#0d9161] transition-colors duration-300 flex items-center justify-center">
                  Contact
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
