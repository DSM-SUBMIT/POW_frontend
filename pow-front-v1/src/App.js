/* eslint-disable */
import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact>
          <Header />
          <Main />
        </Route>
        <Route exact path="/club">
          <Club />
        </Route>
      </BrowserRouter>
    </>
  );
};

export default App;
