import React, { Component } from 'react'
import {summary} from 'SRC/route/config'
import styles from './index.scss'


const getCurTime = function(){
    let t = new Date()
    let m = t.getMonth() + 1
    let d = t.getDate()
    let h = t.getHours()
    let min = t.getMinutes()
    return {
        month: m > 9 ? m : '0' + m,
        day: d > 9 ? d : '0' + d,
        hour: h > 9 ? h : '0' + h,
        minute: min > 9 ? min : '0' + min
    }
}
const calendar = [getCurTime()]

  class App extends Component{
       constructor (props) {
            super(props)

            this.state = {
                calendar: calendar
            }

            this.timer = null
       }

       componentWillMount () {
           this.getTime()
       }


       componentWillUnmount () {
           this.timer && clearInterval(this.timer)
       }


       toPage = (data) => {
            this.props.history.push(`${data.path}${data.default ? data.default : ''}` )
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
                 month: m > 9 ? m : '0' + m,
                 day: d > 9 ? d : '0' + d,
                 hour: h > 9 ? h : '0' + h,
                 minute: min > 9 ? min : '0' + min
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
            return <div className={styles['transition-down']}>
                <p className={styles.title} key="title">Yezi Zhang</p>
                <p className={styles.subtitle} key="subtitle">my only sunshine</p>
            </div>
       }


       renderCalendar = () => {
            let {calendar} = this.state
            let prev = calendar[0] 
            let after = calendar[1]
            if(!prev || !after){
                return null
            }
           return <div className={`mt-30 ${styles['calendar-box']}`}>
                <div className={styles.calendar}>
                    <span  key={prev.month}>{prev.month}</span>
                    {
                        after.month != prev.month && <span key={after.month}>{after.month}</span>
                    }
                </div>
                月
                <div className={styles.calendar}>
                    <span  key={prev.day}>{prev.day}</span>
                    {
                        after.day != prev.day && <span key={after.day}>{after.day}</span>
                    }
                </div>
                日
                <div className={styles.calendar}>
                    <span  key={prev.hour}>{prev.hour}</span>
                    {
                        after.hour != prev.hour && <span key={after.hour}>{after.hour}</span>
                    }
                </div>
                :
                <div className={styles.calendar}>
                    <span  key={prev.minute}>{prev.minute}</span>
                    {
                        after.minute != prev.minute && <span key={after.minute}>{after.minute}</span>
                    }
                </div>
            </div>
       }


       renderArticles = () => {
            return <div className="pos-r ta-l oh mt-60">
                <div className={styles.title1}>Articles</div>
                <div className="ml-20">
                    {
                        summary.map(item => {
                            return (
                                <div className={styles.box} key={item.id} onClick={this.toPage.bind(this, item)}>
                                    <span data-hover={item.title}>{item.title}</span>
                                    <span>{item.subtitle}</span>
                                </div>
                            )
                        })
                    }
                    
                    <div className={styles.box}>
                        <span>Canvas</span>
                    </div>
                </div>
            </div>
        }


        // 暂定 未开放
       renderContent = () => {
           return <div className="pos-r ta-l oh mt-60">
               <div className={styles.title1}>Works</div>
               <div className="ml-20">
                
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