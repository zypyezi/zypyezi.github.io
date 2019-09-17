
import React, { Component } from 'react'
import { Route, HashRouter, Switch, Redirect, IndexRoute } from 'react-router-dom'
import Home from '../pages/Home'
import VuePage from '../pages/Vue'
import ReactPage from '../pages/React'

const Routes = () => {
    return <HashRouter>
        <Switch>
            <Route path='/' component={Home} exact></Route>
        </Switch>
    </HashRouter>
}

export default Routes