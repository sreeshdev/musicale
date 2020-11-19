import React from "react";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router-dom";
import MainContent from "../components/MainContent";
import Playlist from "../components/Playlist";
const AppRouter = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" history={history} component={MainContent} />
        <Route path="/playlist" history={history} component={Playlist} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
