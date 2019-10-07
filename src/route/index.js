
import React, { Component } from 'react'
import { Route, HashRouter, Switch, Redirect, IndexRoute } from 'react-router-dom'
import Home from '../pages/Home'
import Wrap from 'SRC/component/Wrap'
import {summary} from './config'



const Routes = () => {
    return <HashRouter>
        <Switch>
            <Route path='/' component={Home} exact></Route>
            {
                summary.map(item => {
                    return <Route 
                            key={item.id}
                            path={item.path + '/:id'} 
                            render={
                                () => <Wrap 
                                        title={item.title}
                                        navData={item.navData}
                                        Component={item.component} >      
                                    </Wrap>
                                }
                            ></Route>
                        })
            }
        </Switch>
    </HashRouter>
}

export default Routes