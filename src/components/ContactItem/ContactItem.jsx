import React from 'react';
import style from "./ContactItem.module.css";

const ContactItem = ({ name, number, handleClick }) => {

  return (
    <li className={style.item}>
      <span className={style.span}></span>
      {name}: {number}
      <button
        type="button"
        className={style.btnList}
        onClick={handleClick}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;