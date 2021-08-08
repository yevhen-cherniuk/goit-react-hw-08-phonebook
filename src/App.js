import React, { Suspense } from "react";
import routers from "./routers";
import "./App.css";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import PrivatePage from "./components/PrivatePage/PrivatePage";
import PublicPage from "./components/PublicPage/PublicPage";
import { CSSTransition } from "react-transition-group";
import Header from "./shared/Header/Header";
import Alert from "./shared/Alert/Alert";
import Loder from "./shared/Loader/Loader";
import ErrorBoundry from "./shared/ErrorBoundry/ErrorBoundry";

export default function App({ contacts,onIncrement,counterValue, error }) {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundry>
        <Suspense fallback={<Loder />}>
          <Switch>
            {routers.map((route) =>
              route.privat ? <PrivatePage key={route.path} {...route} /> : <PublicPage key={route.path} {...route} />
            )}
            <Redirect path="/" to="/login" />
          </Switch>
        </Suspense>
      </ErrorBoundry>
      <CSSTransition in={error} timeout={1000} classNames="fade-error" unmountOnExit>
        <Alert message={"Oops, something went wrong!"} />
      </CSSTransition>
    </BrowserRouter>
    );
  }
