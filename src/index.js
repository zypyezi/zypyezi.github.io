import { Provider } from 'react-redux'
import React, {
    PureComponent,
    Component
} from 'react'
import ReactDOM from 'react-dom'
import Routers from 'SRC/route/index'
import './styles/base.scss'
import './styles/index.scss'
import Prism from "prismjs";
import "SRC/statics/prism.css";
// import store from 'SRC/store/index'


ReactDOM.render(
    // <Provider store={store}>
            <Routers />
    // </Provider>
    ,
    document.getElementById('root')
)
