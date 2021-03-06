import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Club from "./components/club/Club";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <Main />
        </Route>
        <Route exact path="/club/:id">
          <Club />
        </Route>
      </BrowserRouter>
    </>
  );
};

export default App;
