import React from "react";
import SideBarComponent from "../../components/sideBar/SideBarComponent";
import Header from "../../components/header/Header";

const GeneralConcept = () => {
  return (
    <>
      <SideBarComponent />
      <Header />

      <div className=" general-concept">
        <img src="https://pbs.twimg.com/media/FMIRYHOWUAQPdTr.jpg" />
      </div>
    </>
  );
};

export default GeneralConcept;
