
import React, { Component } from 'react'
import { Route, HashRouter, Switch, Redirect, IndexRoute } from 'react-router-dom'
import Home from '../component/Home'

const Routes = () => {
    return <HashRouter>
        <Switch>
            <Route path='/' component={Home} ></Route>
        </Switch>
    </HashRouter>
}

export default Routes