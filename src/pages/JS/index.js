



import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import PopRight from 'SRC/component/PopRight'
import content from './Content/index'
  class JS extends Component{
       constructor (props) {
            super(props)
            this.state = {
               showPop: false,
               popData: null
            }
       }


       componentDidUpdate(){
         Prism.highlightAll()
       }

       showPop = (e, show, html) => {
          e.stopPropagation()
         this.setState({
            showPop: show,
            popData: html
         })
       }

       hidePop = () => {
         this.setState({
            showPop: false,
            popData: null
         })
       }

       render () {
        let {match} = this.props
        let {params} = match
        let activeId = params.id
        let Com = content[activeId]
           return ( 
              <div key={activeId} className={'pos-r h-100' } onClick={this.hidePop}>
                  <Com showPop={this.showPop}></Com>
                  <PopRight popData={this.state.popData} showPop={this.showPop} show={this.state.showPop}></PopRight>
                  
              </div>
           )
        }

}

export default withRouter(JS)