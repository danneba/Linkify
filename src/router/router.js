import React from "react";
import { Router, Route } from "react-router";
import { Template1, Template2, Template3 } from "./templates";

const router = () => (
  <Router>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/stat" component={Stat} />
    <Route exact path="/wishlist" component={WishList} />
    <Route exact path="/home" component={Home} />
  </Router>
);

export default router;
