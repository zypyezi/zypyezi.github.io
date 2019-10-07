import React, { Component } from 'react'
import Style from './index.scss'

  class PopRight extends Component{
       constructor (props) {
            super(props)
       }

   

        handleClick(e){
           e.stopPropagation
        }

       render () {
           let {popData, show} = this.props
           return ( 
              <div className={Style.Popright} style={{width: show? '450px': '0px'}} onClick={this.handleClick}>
                  <div dangerouslySetInnerHTML={{__html: popData}} className={Style.content}>

                  </div>
              </div>
           )
        }

}

export default PopRight