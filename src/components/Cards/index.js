import React from "react";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import unVerify from "../../assets/images/unverify.png";
import verify from "../../assets/images/verify.png";
import "./style.css";

const Cards = ({ img }) => {
  const location = useLocation();
  const backgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 9.27%, #000000 100%), 
url(${img})`,
    backgroundSize: "cover",
    width: "100%",
    position: "relative",
    borderRadius: "10px",
    height: "500px",
  };
  return (
    <div>
      {/* <Card> */}
      <div>
        <div
          // src={Card_img}
          style={backgroundStyle}
        >
          {location.pathname === "/" && (
            <div
              style={{
                position: "absolute",
                top: "0px",
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <img src={unVerify} alt="unverify" className="unVerifyImage" />
              <p
                className="unVerified"
                style={{
                  color: "#F20404",
                }}
              >
                Under Verification
              </p>
            </div>
          )}
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              color: "white",
              padding: "0 2rem",
            }}
          >
            <div className="verifySection">
              <img src={verify} alt="verify" className="unVerifyImage" />
              <p
                className="unVerified"
                style={{
                  color: "#fff",
                }}
              >
                Under Verification
              </p>
            </div>
            <p className="title">Landslides in Himachal</p>
          </div>
        </div>
        {/* </Card> */}
      </div>
      {location.pathname === "/" && (
        <div className="donateBtn_box">
          <button type="button" className="donate_btn">
            Donate
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
