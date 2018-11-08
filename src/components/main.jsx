import React from "react";
import Gallery from "./gallery";
import { Switch, Route } from "react-router-dom";
import Project from "./project";
import Aboutme from "./aboutme";
import Counter from "./counter";
import LandingPage from "./landingpage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/aboutme" component={Aboutme} />
    <Route exact path="/counter" component={Counter} />
  </Switch>
);
export default Main;
