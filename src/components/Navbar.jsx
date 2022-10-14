import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { project, links } from "../data";
import Logo from "../images/DekkerBabianNavBar.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <div className="nav fixed w-full bg-white shadow-xl py-2 z-50">
        <div className="max-w-screen-xl mx-auto relative flex justify-between lg:items-center py-1.5 px-5 sm:px-10">
          <Link to="/" className="" onClick={() => setNavbarOpen(false)}>
            <img src={Logo} alt="DekkerBabian Logo" className="w-full" />
          </Link>

          <nav
            className={
              navbarOpen
                ? "absolute lg:relative bg-[#FAF6EB] shadow-xl lg:shadow-none right-5 top-8 lg:right-0 lg:top-0 transition duration-1000"
                : "hidden lg:block"
            }
          >
            <ul className="flex flex-col lg:flex-row p-7 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-7 uppercase font-body text-right text-sm font-bold">
              {links.map(({ name, path }, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      className="text-text hover:text-primary"
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
          <button
            className="flex flex-col space-y-4"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            <div className="w-20 h-1 bg-"></div>
          </button>
        </div>
      </div>
      <div className="space h-40"></div>
    </div>
  );
};

export default Navbar;
