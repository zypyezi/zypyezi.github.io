



import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import content from './Content/index'
import JsplumbTest from '../../component/Render/flow'
  class DemoPage extends Component{
       constructor (props) {
            super(props)
       }

       render () {
        let {match} = this.props
        let {params} = match
        let activeId = params.id
           return ( 
              <div>
                  {content[activeId]}
                  <JsplumbTest></JsplumbTest>
              </div>
           )
        }

}

export default withRouter(DemoPage)