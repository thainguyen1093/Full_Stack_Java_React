import React from 'react';
import {
  Switch,
  Route, Redirect
} from "react-router-dom";

import Home from "./Home";
import Search from "./Search";

import PropertyViewContainer from "../../containers/home/PropertyViewContainer";
import PropertyCreateContainer from "../../containers/home/PropertyCreateContainer";
import PropertyUpdateContainer from "../../containers/home/PropertyUpdateContainer";

const RootRouter = ({auth, isAuth}) => (
    <Switch>
      <Route path="/search">
        <Search/>
      </Route>
      <Route path="/view/:productId">
        <PropertyViewContainer/>
      </Route>
      <Route path="/create">
        <PropertyCreateContainer/>
      </Route>
      <Route path="/edit/:productId">
        <PropertyUpdateContainer/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>
)

export default RootRouter;