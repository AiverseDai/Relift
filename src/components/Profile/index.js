import React, { useState } from "react";
import Tabs, { Tab } from "react-best-tabs";
import Image from "react-bootstrap/Image";
import "react-best-tabs/dist/index.css";
import "./style.css";
import Donation from "../common/Donation";

let text = window.ethereum.selectedAddress;
let y = text.slice(0, 20);
let x = y + "....";

const Profile = () => {

  const [key,setKey] = useState(1);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          // width: "60%",
          borderBottom: "1px solid black",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingTop: "2rem",
            width: "70%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {[
            { id: 1, name: "Money Donations" },
            { id: 2, name: "Requests Polls" },
          ].map((item) => (
            <div
              className={`profile_tab ${
                item.id === key && "active_profileTab"
              }`}
              onClick={() => setKey(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "30%",
            // height: "50vw",
            // borderRight: "1px solid #000000",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                padding: "2rem 1rem",
                width: "195px",
                height: "200px",
                margin: "0 auto",
              }}
            >
              <Image
                src="https://cf.ltkcdn.net/family/images/orig/283268-2120x1414-women-on-wheel-chair-holding-mens-hand.jpg"
                alt="profile"
                fluid
                roundedCircle
                style={{
                  marginTop: "4rem",
                  width: "195px",
                  margin: "0 auto ",
                  height: "100%",
                }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "30px",
                  textAlign: "center",
                  color: "#073695",
                }}
              >
                {x}
              </p>
              <p className="profile_text">Thanyou for being on this platform</p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "70%",
            borderLeft: "1px solid #000000",
            margin: "0",
          }}
        >
          {[1, 2, 3, 4, 5].map(() => (
            <Donation />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
