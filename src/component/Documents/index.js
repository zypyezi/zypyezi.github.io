import React, { Component } from 'react'
import {renderHead, renderP, renderSubLine, renderCode} from './Components'

  class Documents extends Component{
       constructor (props) {
            super(props)
       }


       renderContent = (n) => {
            if(/^code:/.test(n)){
                return renderCode(n.replace(/^code:/g, ''))
            }else{
                return renderP(n)
            }
           
       }

       render () {
           let {id} = this.props
           let note =  require(`./Notes/${id}`).default
           return ( 
              <div>
                  {
                      note.content.map(n => {
                          return this.renderContent(n)
                      })
                  }
              </div>
           )
        }

}

export default Documents