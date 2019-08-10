import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../home";
import Users from "../users";

 function Layout() {
    return (
        <div>
            <div>React SSR example</div>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/users" exact component={Users}></Route>
            </Switch>
        </div>
    );
}

export default Layout;