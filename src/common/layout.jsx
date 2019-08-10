import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../home";
import Users from "../users";
import NotFound from "./not-found";

 function Layout() {
    return (
        <div>
            <div>React SSR example</div>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/users" exact component={Users}></Route>
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default Layout;