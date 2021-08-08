import React from "react";
import "./Alert.css";

const Alert = ({ message }) => {
  return <div className="AlertWrapper">{message}</div>;
};

export default Alert;