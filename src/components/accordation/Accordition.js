import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
const Accordion = ({ title, contentOne, contentTwo ,handelClick,handelClickTwo}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <button className="button-accordation">
        <div className="accordion-header" onClick={toggleAccordion}>
          {title}
          <IoIosArrowDropdown />
        </div>
      </button>
      {isOpen && (
        <div className="accordion-content-div">
          <button className="accordion-content" onClick={handelClick}>{contentOne}</button>
          <button className="accordion-content" onClick={handelClickTwo}>{contentTwo}</button>
        </div>
      )}
    </div>
  );
};

export default Accordion;
