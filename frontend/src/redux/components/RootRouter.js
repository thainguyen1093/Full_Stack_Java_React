import React from 'react';
import {
  Switch,
  Route, Redirect
} from "react-router-dom";

import Home from "./home/Home";
import UserLayout from "./user/UserLayout";

import NewLayout from "./new/NewLayout";
import NoMatch from "./NoMatch";
import Search from "./home/Search";
import PropertyCreate from "./home/PropertyCreate";
import PropertyUpdate from "./home/PropertyUpdate";
import HomeLayout from "./home/HomeLayout";

const RootRouter = ({auth, isAuth}) => (
    <Switch>
      <Route path="/new">
        <NewLayout/>
      </Route>
      <Route path="/user">
        <UserLayout/>
      </Route>
      <Route path="/">
        <HomeLayout/>
      </Route>
      <Route path="*">
        <NoMatch/>
      </Route>
    </Switch>
)

export default RootRouter;