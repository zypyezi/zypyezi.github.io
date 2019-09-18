import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import content from './Content/index'
  class VuePage extends Component{
       constructor (props) {
            super(props)
       }

       renderContent = (Comp) => {
           return <Comp></Comp>
       }

       render () {
        let {match} = this.props
        let {params} = match
        let activeId = params.id
           return ( 
              <div>
                  {this.renderContent(content[activeId])}
              </div>
           )
        }

}

export default withRouter(VuePage)