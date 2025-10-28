import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../assets/TechIcons/Google Chrome.svg";
import vsCode from "../../assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
