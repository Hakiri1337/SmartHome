import React, { useState, useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeviceModal = ({
  currentItem,
  data,
  toggle,
  deleteModal,
  changeSize,
}) => {
  const { type, id, name, connectionState, icon } = data;
  const [power, setPower] = useState(0);
  const [onOffState, setOnOff] = useState(toggle);
  const [brightnessLevel, setBrightness] = useState(0);
  const [modalSize, setSize] = useState(false);
  const [temperature, setTemperature] = useState(0);
  useEffect(() => {
    if (currentItem.id === id) setOnOff(!onOffState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  return (
    <div className="device-modal">
      <div className="bar">
        <button
          className="exit-button"
          onClick={() => deleteModal(id)}
        ></button>
        <button className="green-button"></button>
        <button className="yellow-button"></button>
        <FontAwesomeIcon icon={icon} size="1x" />
      </div>
      {type === "bulb" ? (
        <p>
          <span>Type: {type}</span>
          <span>Name: {name}</span>
          <span>Connection: {connectionState}</span>
          <span>Power: {onOffState.toString()}</span>
        </p>
      ) : type === "outlet" ? (
        <p>
          <span>Type: {type}</span>
          <span>Name: {name}</span>
          <span>Connection: {connectionState}</span>
          <span>Power: {onOffState.toString()}</span>
          <span>Consumption: {data.powerConsumption}</span>
        </p>
      ) : (
        <p>
          <span>Type: {type}</span>
          <span>Name: {name}</span>
          <span>Connection: {connectionState}</span>
          <span>Power: {onOffState.toString()}</span>
        </p>
      )}
    </div>
  );
};

export default DeviceModal;
