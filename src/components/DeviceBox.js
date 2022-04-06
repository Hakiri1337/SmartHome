import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import DeviceModal from "./DeviceModal";

const DeviceBox = ({ updateModals, data, slide, toggle }) => {
  const [power, setPower] = useState(toggle);
  const { icon, name } = data;
  const switchPower = () => {
    setPower(!power);
    slide(data);
  };
  return (
    <div className="DeviceBox" onClick={() => updateModals(data)}>
      <FontAwesomeIcon
        icon={icon}
        style={power ? { color: "#EFDD2A" } : { color: "black" }}
        size="2x"
      />
      <h2>{name}</h2>
      <div className="switch" onClick={() => switchPower()}>
        <div className={power ? "ball slide" : "ball"}></div>
      </div>
    </div>
  );
};
export default DeviceBox;
