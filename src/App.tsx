import React, { FC } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { routes } from "./utils/routes";

const App: FC = () => {
  const renderRoutes = () => {
    return routes.map((route, index) => <Route key={index} exact {...route} />);
  };
  return (
    <Router>
      <div className="App">
        <header className="App__header">
          <h1 className="App__header-title">Congress List</h1>
        </header>
        <div className="App__wrapper">
          <Switch>{renderRoutes()}</Switch>
        </div>
        <footer className="App__footer">
          <p className="App__footer-text">A simple react app</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
