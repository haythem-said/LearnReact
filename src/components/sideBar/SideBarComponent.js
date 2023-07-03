import React from "react";
import { Button, Col, Row } from "reactstrap";
import Accordion from "../accordation/Accordition";
import { Link, useLocation, useNavigate, matchPath } from "react-router-dom";
import { accordionData } from "../../utils/AccordionData";

const SideBarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handelClick = () => {
    navigate(`general-concept`);
  };
  const handelClickTwo = () => {
    navigate(`some-projets`);
  };
  return (
    <div className="side-bar">
      <Col>
        <div className="side-bar-getStart">
          <h4>Learn React</h4>
          <Row>
            <Accordion
              title="Quick Start"
              contentOne="General concept "
              // {accordionData.map((data, index) => (
              //   <React.Fragment key={index}>
              //     {data.content}
              //     <br />
              //     <br />
              //   </React.Fragment>
              // )) }
              contentTwo="Some projects"
              handelClick={handelClick}
              handelClickTwo={handelClickTwo}
            />
            <Accordion
              title="Fundamentals"
              contentOne="what is reactJs"
              contentTwo="what is haythem"
              handelClick={handelClick}
              handelClickTwo={handelClickTwo}
            />
          </Row>
          <Row>
            <Accordion title="Describing the UI" contentOne="haythem said" />
          </Row>
          <Row>
            <Accordion
              title="React Hooks"
              contentOne="Hooks"
              handelClick={handelClick}
            />
          </Row> 
          {/* <Row>
            <Accordion title="Managent State" contentOne="haythem said" />
          </Row>{" "} */}
        </div>
      </Col>
    </div>
  );
};

export default SideBarComponent;
