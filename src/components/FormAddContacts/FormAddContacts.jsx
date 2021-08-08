import React from "react";
import style from "./FormAddContacts.module.css";
import Alert from "../../shared/Alert/Alert";
import { CSSTransition } from "react-transition-group";

export default function FormAddContacts({
  name,
  number,
  isAdded,
  message,
  handlesubmit,
  handleChangeName,
  handleChangeNumber,
}) {
  return (
      <>
        <form className={style.form} onSubmit={handlesubmit}>
          <label className="lable">
            <span className={style.span}>Name</span>
            <input
              className={style.input}
              type="text"
              placeholder="Name Surname"
              value={name}
              onChange={(e) => handleChangeName(e.target.value)}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            />
          </label>
          <label className="lable">
            <span className={style.span}>Number</span>
            <input
              className={style.input}
              type="tel"
              placeholder="Phone"
              value={number}
              onChange={(e) => handleChangeNumber(e.target.value)}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            />
          </label>
          <button className={style.button} type="submit">
            Add Contact
          </button>
        </form>
        <CSSTransition in={isAdded} timeout={500} classNames="fade-alert" unmountOnExit>
          <Alert message={message} />
        </CSSTransition>
      </>
    );
  }