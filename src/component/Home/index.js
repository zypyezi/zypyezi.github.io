import React, { Component } from 'react'
import Article from './Article/index';

const getCurTime = function(){
    let t = new Date()
    let m = t.getMonth() + 1
    let d = t.getDate()
    let h = t.getHours()
    let min = t.getMinutes()
    return {
        month: m > 10 ? m : '0' + m,
        day: d > 10 ? d : '0' + d,
        hour: h > 10 ? h : '0' + h,
        minute: min > 10 ? min : '0' + min
    }
}
const calendar = [getCurTime()]

  class App extends Component{
       constructor (props) {
            super(props)

            this.state = {
                calendar: calendar
            }
       }

       componentWillMount () {
           this.getTime()
       }


       componentWillUnmount () {
           this.timer && clearInterval(this.timer)
       }



       getTime = () => {

           let getCurTime = () => {
            let t = new Date()
            let m = t.getMonth() + 1
            let d = t.getDate()
            let h = t.getHours()
            let min = t.getMinutes()
            let {calendar} = this.state
            calendar.push({
                 month: m > 10 ? m : '0' + m,
                 day: d > 10 ? d : '0' + d,
                 hour: h > 10 ? h : '0' + h,
                 minute: min > 10 ? min : '0' + min
             })
             if(calendar.length > 2) {
                 calendar.splice(0, 1)
             }
             this.setState({
                 calendar : calendar
             })
           }
           this.timmer = setInterval(getCurTime, 1000)
        
       }


       renderTitle = () => {
            return <div className="transition-down">
                <p className="title" key="title">Yezi Zhang</p>
                <p className="subtitle" key="subtitle">my only sunshine</p>
            </div>
       }


       renderCalendar = () => {
            let {calendar} = this.state
            let prev = calendar[0] 
            let after = calendar[1]
            if(!prev || !after){
                return null
            }
           return <div className="mt-30 calendar-box">
                <div className="calendar">
                    <span  key={prev.month}>{prev.month}</span>
                    {
                        after.month != prev.month && <span key={after.month}>{after.month}</span>
                    }
                </div>
                月
                <div className="calendar">
                    <span  key={prev.day}>{prev.day}</span>
                    {
                        after.day != prev.day && <span key={after.day}>{after.day}</span>
                    }
                </div>
                日
                <div className="calendar">
                    <span  key={prev.hour}>{prev.hour}</span>
                    {
                        after.hour != prev.hour && <span key={after.hour}>{after.hour}</span>
                    }
                </div>
                :
                <div className="calendar">
                    <span  key={prev.minute}>{prev.minute}</span>
                    {
                        after.minute != prev.minute && <span key={after.minute}>{after.minute}</span>
                    }
                </div>
            </div>
       }


       renderArticles = () => {
            return <div className="pos-r ta-l oh mt-60">
                <div className="title1">Articles</div>
                <div className="ml-20">
                    <Article></Article>
                </div>
            </div>
        }


        // 暂定 未开放
       renderContent = () => {
           return <div className="pos-r ta-l oh mt-60">
               <div className="title1">Works</div>
               <div className="ml-20">
                <div className="box">
                    <span data-hover="Easy-use-ui">Easy-use-ui</span>
                    <span>my own ui library</span>
                </div>
                <div className="box">
                    <span>Canvas</span>
                </div>
               </div>
           </div>
       }

       render () {
           return ( 
              <div  className="ta-c">
                  {this.renderTitle()}
                  {this.renderCalendar()}
                  {this.renderArticles()}
              </div>
           )
        }

}

export default App