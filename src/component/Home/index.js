import React, { Component } from 'react'


  class App extends Component{
       constructor (props) {
            super(props)
       }

       jump = () => {
           location.href = 'http://yezizhang.com/docs/vue/index.html'
       }

       renderTitle = () => {
            return <div className="transition-down">
                <p className="title" key="title">Yezi Zhang</p>
                <p className="subtitle" key="subtitle">my only sunshine</p>
            </div>
       }


       renderContent = () => {
           return <div className="pos-r ta-l oh mt-60">
               <div className="title1">Works</div>
               <div className="ml-20">
                <div className="box">
                    Easy-use-ui
                </div>
               </div>
           </div>
       }

       render () {
           return ( 
              <div onClick={this.jump} className="ta-c">
                  {this.renderTitle()}
                 
                {this.renderContent()}
              </div>
           )
        }

}

export default App