import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import Logo from "../images/DekkerBabianNavBar.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <div className="nav-bar fixed w-full shadow-xl z-50">
        <div className="max-w-screen-xl mx-auto py-2.5 px-5 xl:px-1 grid grid-cols-2 md:grid-cols-4 items-center h-[101px]">
          <div className="md:col-span-3 flex items-center space-x-3">
            <button onClick={() => setNavbarOpen((prev) => !prev)}>
              <div className="flex flex-col space-y-2.5 py-4">
                <div className="w-8 md:w-12 h-0.5 bg-primary"></div>
                <div className="w-8 md:w-12 h-0.5 bg-primary"></div>
                <div className="w-8 md:w-12 h-0.5 bg-primary"></div>
              </div>
            </button>
            <Link to="/" className="" onClick={() => setNavbarOpen(false)}>
              <img src={Logo} alt="DekkerBabian Logo" className="w-[200px]" />
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
                ? "absolute left-0 top-[102px] transition transform duration-200 opacity-100 translate-x-0"
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
              <li>
                <a href="mailto:marla.dekker@dekkerbabian.com">Inquiries</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <div className="space h-[73px] md:h-[102px]"></div> */}
    </div>
  );
};

export default Navbar;
