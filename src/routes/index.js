import React from "react";

import { Switch, Route } from "react-router-dom";
import Browse from "../pages/browse";

const Routes = () => (
  <Switch>
    <Route exact patch="/" component={Browse} />
  </Switch>
);

export default Routes;
