import React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import User from "./User";
import UserDashboard from "./UserDashboard";

const UserLayoutRouter = () => {
  let { path, url } = useRouteMatch();
  return (
      <Switch>
        <Route path={`${path}/dashboard`}>
          <UserDashboard/>
        </Route>
        <Route path={`${path}/:id`}>
          <User/>
        </Route>
        <Route path={path}>
          <Redirect to={`${path}/dashboard`}/>
        </Route>
      </Switch>
  );
}

export default UserLayoutRouter;