import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Clubs from "./Clubs/Clubs";
import ClubHome from "./Clubs/ClubHome";
import Events from "./Events/Events";
import CupInfo from "./Events/CupInfo"
import Applications from "./Applications/Applications";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import history from './history';
import EventPage from "./Events/EventPage";

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
                    <Route path="/ClubHome" component={ClubHome} />
                    <Route path="/Profile" component={Profile} />
                    <Route path="/EventPage" component={EventPage} />
                </Switch>
            </Router>
        )
    }
}
