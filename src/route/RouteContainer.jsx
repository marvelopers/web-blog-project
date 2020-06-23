import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { routes } from "./route";
import { WriteBlog } from "../component/blog";

export const RouteContainer = () => {
  return (
    <Switch>
      {routes.map(r => {
        return (
          <Route path={r.path} exact={r.exact}>
            {r.component}
          </Route>
        )
      })}
      <Route exact path={'/update/:id'} component={WriteBlog} />
    </Switch>
  )
}