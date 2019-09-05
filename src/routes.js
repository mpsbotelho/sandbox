import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route to="/" exact component={Main} />
    </Switch>
  );
}
