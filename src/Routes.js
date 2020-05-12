import React, { Component } from "react";
import  { Router, Switch, Route } from "react-router-dom";

import Home from './component/Home/Home';
import history from './history';
import NewScoreForm from './component/NewScoreForm/NewScoreForm'
import ScoreTable from './component/ScoreTable/ScoreTable'


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/AddScore/:title" exact component={NewScoreForm} />
                    <Route path="/ViewScore" exact component={ScoreTable} />
                </Switch>
            </Router>
        )
    }
}
