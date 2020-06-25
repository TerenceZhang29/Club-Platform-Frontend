import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Clubs from "./Clubs/Clubs";
import Events from "./Events/Events";
import CupInfo from "./Events/CupInfo"
import Applications from "./Applications/Applications";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Clubs" component={Clubs} />
                    <Route path="/Events" component={Events} />
                    <Route path="/Applications" component={Applications} />
                    <Route path="/cupInfo" component={CupInfo} />
                </Switch>
            </Router>
        )
    }
}
