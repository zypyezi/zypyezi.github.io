import React, { Component } from 'react'


  class App extends Component{
       constructor (props) {
            super(props)
       }

       jump = () => {
           location.href = 'http://yezizhang.com/docs/vue/index.html'
       }

       render () {
           return ( 
              <div onClick={this.jump}>
                  跳转到vue 
              </div>
           )
        }

}

export default App