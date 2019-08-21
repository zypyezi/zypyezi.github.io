
import React, { Component } from 'react'
import { Route, HashRouter, Switch, Redirect, IndexRoute } from 'react-router-dom'
import Home from '../component/Home'
import Articles from '../component/Articles'

const Routes = () => {
    return <HashRouter>
        <Switch>
            <Route path='/' component={Home} exact></Route>
            <Route path='/articles/:month/:id' component={Articles}></Route>
        </Switch>
    </HashRouter>
}

export default Routes