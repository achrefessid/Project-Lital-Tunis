import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackComponentProduct = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/product"> {/*ki n5ali to far5a ki ninzil a3lih irja3ni lil page home*/}
          <Button color="dark">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponentProduct;
