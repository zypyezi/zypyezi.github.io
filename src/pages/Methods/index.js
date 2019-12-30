



import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import PopRight from 'SRC/component/PopRight'
import {content} from 'SRC/document/Methods/index'

  class Methods extends Component{
       constructor (props) {
            super(props)
            this.state = {
               showPop: false,
               popData: null
            }
       }

       componentWillMount(){
         let {match} = this.props
         let {params} = match
         let activeId = params.id
         this.preId = activeId
       }


       componentDidUpdate(){
         Prism.highlightAll()
         let {match} = this.props
        let {params} = match
        let activeId = params.id
        if(activeId != this.preId){
         document.getElementById('scroll-container').scrollTop = 0
        }
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
            <div key={activeId} className={'pos-r' } onClick={this.hidePop} style={{paddingBottom: '100px'}} >
                 {activeId && <Com showPop={this.showPop}></Com> }
                  <PopRight popData={this.state.popData} showPop={this.showPop} show={this.state.showPop}></PopRight>
              </div>
           )
        }

}

export default withRouter(Methods)