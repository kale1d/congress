import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import CongressList from "./containers/CongressList/CongressList";
import CongressPersonDetail from "./containers/CongressPersonDetail/CongressPersonDetail";

export const routes = [
  {
    path: "/",
    component: CongressList
  },
  {
    path: "/detail",
    component: CongressPersonDetail
  }
];

const App: FC = () => {
  const rendeRoutes = () => {
    return routes.map((route, index) => <Route key={index} exact {...route} />);
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <div className="wrapper">
          <Switch>{rendeRoutes()}</Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
