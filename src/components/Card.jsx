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
      className={`card relative h-[330px] w-[330px] ${props.customClass}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="flex flex-col bg-no-repeat bg-cover h-[330px] w-[330px]">
        <img
          src={props.image}
          className={isHovering ? "opacity-10 transition duration-500" : ""}
          alt={props.client}
        />
        <div
          className={
            isHovering
              ? "transition duration-500 card-overlay absolute px-4 pb-2 pt-8 opacity-100 font-light text-sm leading-[17px] text-left"
              : "opacity-0"
          }
        >
          <div className="flex flex-col space-y-2">
            <div>
              <span className="text-secondary font-bold">
                Client:&nbsp;{props.client}
              </span>
              {props.description}
              <span className="text-primary">&nbsp;Pictured&nbsp;</span>
              {props.pictured}
            </div>
            <div>
              {" "}
              <span className="text-secondary font-bold">
                Project Scope&nbsp;
              </span>
              {props.scope}
            </div>
            <div>
              <span className="text-secondary font-bold">Result&nbsp;</span>
              {props.result}
            </div>
            <a href="mailto:marla @dekkerbabian" className="block text-primary">
              Contact us for more information
            </a>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Card;
