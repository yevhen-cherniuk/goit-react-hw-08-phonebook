import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import UserMenu from "../../components/UserMenu/UserMenuContainer";
import authSelectors from "../../redux/auth/authSelectors";
import UserSign from "../../components/UserSign/UserSign";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { CSSTransition } from "react-transition-group";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "30px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 3,
    border: 0,
    borderRadius: 5,
    fontWeight: 700,
    backgroundColor: "#bdc4c7",
    color: "#2A363B",
  },
}));

const Header = ({ isAuth }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {isAuth && (
              <NavLink className={classes.link} to="/contacts">
                Contacts
              </NavLink>
            )}
          </Typography>
          {isAuth ? <UserMenu /> : <UserSign />}
        </Toolbar>
      </AppBar>
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade-logo" unmountOnExit>
        <h2 className="logo">Phonebook</h2>
      </CSSTransition>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(Header);