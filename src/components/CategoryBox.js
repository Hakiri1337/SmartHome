import React from "react";
import { useState } from "react";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CategoryBox = ({ icon, category, update }) => {
  return (
    <button onClick={(e) => update(category)} className="CategoryBox">
      <FontAwesomeIcon icon={icon} size="2x" />
      <h2>{category}</h2>
    </button>
  );
};

export default CategoryBox;
