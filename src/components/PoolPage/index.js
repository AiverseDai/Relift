import React from "react";
import { Col, Row } from "react-bootstrap";
import Cards from "../Cards";
import card_img from "../../assets/images/card.png";

const PoolPage = () => {
  return (
    <div>
      <div className="p-4" style={{ width: "80%", margin: "0 auto" }}>
        <Row>
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Col style={{ padding: "3rem" }} sm={4}>
              <Cards img={card_img} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PoolPage;
