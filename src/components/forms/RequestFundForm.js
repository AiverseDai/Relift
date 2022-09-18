import React from "react";
import "./style.css";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import SubmitDoc from "../SubmitDoc/index";

const RequestFundForm = ({ handleSubmit, submitForm }) => {
  const [resetImage, setResetImage] = React.useState(false);
  const [imageData, setImageData] = React.useState();

  const imagHandler = (img) => {
    setImageData(img);
  };
  return (
    <div>
      {!submitForm ? (
        <form className="form">
          <div className="fund_input_wrapper">
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              className="fund_input"
            />
            <FaRegUserCircle style={{ fontSize: "2rem" }} />
          </div>
          <div className="fund_input_wrapper">
            <input
              type="text"
              name="poolName"
              placeholder="Pool Name"
              className="fund_input"
            />
            <AiOutlineMail style={{ fontSize: "2rem" }} />
          </div>
          <div className="fund_input_wrapper">
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              className="fund_input"
            />
            <AiOutlinePhone style={{ fontSize: "2rem" }} />
          </div>
          <div className="fund_input_wrapper">
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="fund_input"
            />
            <GoLocation style={{ fontSize: "2rem" }} />
          </div>
          <div className="fund_textare_wrapper">
            <textarea
              className="fund_textarea"
              maxLength="5000"
              placeholder="Describe in detail about your purpose"
              rows={5}
              style={{ width: "100%" }}
            />
          </div>
          <p style={{ textAlign: "right", fontSize: "12px" }}>0/5000</p>
          <div>
            <button className="fund_btn" onClick={handleSubmit}>
              Next
            </button>
          </div>
        </form>
      ) : (
        <SubmitDoc
          imagHandler={imagHandler}
          resetImage={resetImage}
          imageData={imageData}
        />
      )}
    </div>
  );
};

export default RequestFundForm;
