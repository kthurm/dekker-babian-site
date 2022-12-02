import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import Logo from "../images/DekkerBabianNavBar.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <div className="nav-bar fixed w-full shadow-xl z-50">
        <div className="max-w-screen-xl mx-auto md:py-2.5 pl-7 sm:px-5 xl:px-1 grid grid-cols-2 md:grid-cols-4 items-center h-[75px] md:h-[100px]">
          <div className="md:col-span-3 flex items-center space-x-3">
            <button
              onClick={() => setNavbarOpen((prev) => !prev)}
              className="p-1"
            >
              <div className="flex flex-col space-y-[5px] md:space-y-2.5 py-4">
                <div className="w-7 md:w-12 h-0.5 bg-primary"></div>
                <div className="w-7 md:w-12 h-0.5 bg-primary"></div>
                <div className="w-7 md:w-12 h-0.5 bg-primary"></div>
              </div>
            </button>
            <Link to="/" className="" onClick={() => setNavbarOpen(false)}>
              <img
                src={Logo}
                alt="DekkerBabian Logo"
                className="w-[180px] md:w-[200px]"
              />
            </Link>
          </div>
          <div className="hidden sm:flex justify-end text-sm md:leading-[17px]">
            <a
              type="button"
              href="mailto:marla@dekkerbabian.com"
              className="block text-primary underline font-light"
            >
              Contact Us
            </a>
          </div>
          <nav
            className={
              navbarOpen
                ? "absolute left-0 top-[75px] md:top-[101px] transition transform duration-200 opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full h-0"
            }
          >
            <ul className="bg-primary bg-opacity-80 flex flex-col py-4 px-6 md:px-5 xl:pl-[65px] space-y-4 font-light text-sm">
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
              <li>
                <a href="mailto:marla.dekker@dekkerbabian.com">Inquiries</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
