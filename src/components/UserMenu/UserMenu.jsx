import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const UserMenu = ({ isAuth, email, handleLogOut }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isAuth && (
        <>
          <span>email: {email}</span>{" "}
          <Button variant="contained" onClick={handleLogOut}>
            Log Out
          </Button>
        </>
      )}
    </div>
  );
};

export default UserMenu;