import React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";

import RegisterContainer from "../../containers/new/RegisterContainer";
import LogoutContainer from "../../containers/new/LogoutContainer";
import ForgotPasswordLayout from "./forgotPassword/ForgotPasswordLayout";
import LoginLayout from "./login/LoginLayout";

const NewLayoutRouter = () => {
  let {path, url} = useRouteMatch();
  return (
      <Switch>
        <Route path={`${path}/login`}>
          <LoginLayout/>
        </Route>
        <Route path={`${path}/register`}>
          <RegisterContainer/>
        </Route>
        <Route path={`${path}/forgot-password`}>
          <ForgotPasswordLayout/>
        </Route>
        <Route path={`${path}/logout`}>
          <LogoutContainer/>
        </Route>
        <Route path={`${path}`}>
          <Redirect to={`${path}/login`}/>
        </Route>
      </Switch>
  );
}

export default NewLayoutRouter;