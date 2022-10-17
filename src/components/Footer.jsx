import { useState } from "react";

import Logo from "../images/DekkerBabianNavBar.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="w-full shadow-footer z-50">
        <div className="max-w-screen-xl mx-auto py-2.5 px-5 grid grid-cols-2 md:grid-cols-4">
          <div className="flex items-center space-x-3">
            <button className="flex flex-col space-y-2.5">
              <div className="w-8 md:w-12 h-0.5 bg-primary"></div>
              <div className="w-8 md:w-12 h-0.5 bg-primary"></div>
              <div className="w-8 md:w-12 h-0.5 bg-primary"></div>
            </button>
            <img src={Logo} alt="DekkerBabian Logo" className="w-[200px]" />
          </div>
          <div className="hidden md:block"></div>
          <div className="pl-5 md:px-0 md:w-[200px] pt-1 text-[9px] sm:text-sm md:leading-[17px]">
            Would you like information or do you have a question?
            <a
              href="mailto:marla@dekkerbabian.com"
              className="block text-primary"
            >
              Contact Marla Dekker
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
