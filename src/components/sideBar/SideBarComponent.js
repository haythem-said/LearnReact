import React from "react";
import { Button, Col, Row } from "reactstrap";
import Accordion from "../accordation/Accordition";
import { Link, useLocation, useNavigate, matchPath } from "react-router-dom";
import { accordionData } from "../../utils/AccordionData";

const SideBarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handelClick = () => {
    navigate(`${location.pathname}/what-is-reactJs`);
  };
  const handelClickTwo = () => {
    navigate(`${location.pathname}/what-is-haythem`);
  };
  return (
    <div className="side-bar">
      <Col>
        <div className="side-bar-getStart">
          <h4>Get Start</h4>
          <Row>
            <Accordion
              title="Quick Start"
              contentOne="what is reactJs"
              // {accordionData.map((data, index) => (
              //   <React.Fragment key={index}>
              //     {data.content}
              //     <br />
              //     <br />
              //   </React.Fragment>
              // )) }
              contentTwo="what is haythem"
              handelClick={handelClick}
              handelClickTwo={handelClickTwo}
            />
          </Row>
          <Row>
            <Link to="/installation">
              <Accordion title="Installation" contentOne="haythem said" />
            </Link>
          </Row>
        </div>
        <div className="side-bar-learn">
          <h4>Learn React</h4>
          <Row>
            <Accordion title="Describing the UI" contentOne="haythem said" />
          </Row>{" "}
          <Row>
            <Accordion title="Managent State" contentOne="haythem said" />
          </Row>{" "}
        </div>
      </Col>
    </div>
  );
};

export default SideBarComponent;
