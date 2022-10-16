import { useState } from "react";

const Card = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <button
      className={`card relative h-[320px] w-[320px] ${props.customClass}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="flex flex-col bg-no-repeat bg-cover h-[320px] w-[320px]">
        <img
          src={props.image}
          className={isHovering ? "opacity-10 transition duration-500" : ""}
          alt={props.client}
        />
        <div
          className={
            isHovering
              ? "transition duration-500 card-overlay absolute px-5 pb-2 pt-7 opacity-100 font-light text-sm leading-[17px] text-left"
              : "opacity-0"
          }
        >
          <div className="flex flex-col space-y-2.5">
            <div>
              <span className="inline text-secondary font-bold mr-1">
                Client:{props.client}
              </span>
              <span className="inline">{props.description}</span>

              <span className="text-primary"> Pictured </span>

              {props.pictured}
            </div>
            <div>
              <span className="text-secondary font-bold mr-1">
                Project Scope
              </span>
              {props.scope}
            </div>
            <div>
              <span className="text-secondary font-bold mr-1">Result</span>
              {props.result}
            </div>
            <a
              href="mailto:marla @dekkerbabian"
              className="block font-bold text-primary"
            >
              Contact us for more information
            </a>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Card;
