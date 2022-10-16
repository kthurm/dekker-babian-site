import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { project, links } from "../data";
import Logo from "../images/DekkerBabianNavBar.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <div className="nav-bar fixed w-full shadow-xl z-50">
        <div className="max-w-screen-xl mx-auto py-2.5 px-5">
          <div className="flex items-center space-x-3">
            <button
              className="flex flex-col space-y-2.5"
              onClick={() => setNavbarOpen((prev) => !prev)}
            >
              <div className="w-12 h-0.5 bg-primary"></div>
              <div className="w-12 h-0.5 bg-primary"></div>
              <div className="w-12 h-0.5 bg-primary"></div>
            </button>
            <Link to="/" className="" onClick={() => setNavbarOpen(false)}>
              <img src={Logo} alt="DekkerBabian Logo" className="w-[200px]" />
            </Link>
          </div>
          <nav
            className={
              navbarOpen
                ? "absolute left-0 top-[102px] transition transform duration-500 opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full h-0"
            }
          >
            <ul className="bg-primary bg-opacity-80 flex flex-col pl-[78px] p-4 space-y-4 font-light text-sm">
              {links.map(({ name, path }, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      className="text-white"
                      to={path}
                      onClick={() => setNavbarOpen((prev) => !prev)}
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className="space h-[102px]"></div>
    </div>
  );
};

export default Navbar;
