import React, { Component } from 'react'
import Style from './index.scss'

  class PopRight extends Component{
       constructor (props) {
            super(props)
       }

       componentDidUpdate(){
            Prism.highlightAll()
        }

       render () {
           let {popData, show} = this.props
           return ( 
              <div className={Style.Popright} style={{width: show? '300px': '0px'}} >
                  <div dangerouslySetInnerHTML={{__html: popData}} className={Style.content}>

                  </div>
              </div>
           )
        }

}

export default PopRight