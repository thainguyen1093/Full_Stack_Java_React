import React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";

import FindYourAccountContainer from "../../../containers/new/forgotPassword/FindYourAccountContainer";
import RecoverMethodContainer from "../../../containers/new/forgotPassword/RecoverMethodContainer";
import EnterSecurityCodeContainer from "../../../containers/new/forgotPassword/EnterSecurityCodeContainer";
import NewPasswordContainer from "../../../containers/new/forgotPassword/NewPasswordContainer";

const ForgotPasswordLayoutRouter = () => {
  let {path, url} = useRouteMatch();
  return (
      <Switch>
        <Route path={`${path}/find-your-account`}>
          <FindYourAccountContainer/>
        </Route>
        <Route path={`${path}/recover-method`}>
          <RecoverMethodContainer/>
        </Route>
        <Route path={`${path}/enter-security-code`}>
          <EnterSecurityCodeContainer/>
        </Route>
        <Route path={`${path}/new-password`}>
          <NewPasswordContainer/>
        </Route>
        <Route path={`${path}`}>
          <Redirect to={`${path}/find-your-account`}/>
        </Route>
      </Switch>
  );
}

export default ForgotPasswordLayoutRouter;