import React from "react";
import style from "./Filter.module.css";

const Filter = ({ filterState, handleChange }) => {

  return (
    <label className={style.label}>
      <span className={style.span}>Find contacts</span>
      <input
        className={style.input}
        type="text"
        placeholder="name"
        value={filterState}
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  );
};

export default Filter;