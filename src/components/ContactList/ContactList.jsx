import React from "react";
import ContactItemContainers from "../ContactItem/ContactItemContainers";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ContactList.module.css";

const ContactList = ({ visibleContacts }) => {
  return (
    <TransitionGroup component="ul" className="contact-list">
      {visibleContacts.map((el) => {
        return (
          <CSSTransition key={el.id} timeout={500} classNames="item">
            <ContactItemContainers id={el.id} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default ContactList;