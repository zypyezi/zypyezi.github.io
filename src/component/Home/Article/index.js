import React, { Component } from 'react'
import {ArticlesList, WEATHER_ICON} from '../../../constant'
import styles from './index.scss'
import { withRouter } from 'react-router'

console.log(styles, 'styles')
  class Article extends Component{
       constructor (props) {
            super(props)
       }

      

       handleClick = (item, index) => {
            this.props.history.push(`/articles/${index}/${item.id}`)
       }

       renderItem (item, index) {
            return (
                <div className={styles['article-item']} key={item.id} onClick={() => this.handleClick(item, index)}>
                    <div className={styles.left}>
                        <div className={styles.date}>{item.date}</div>
                        <div className={styles.week}> {item.week}</div>
                        <div className={styles.weather}>
                            <svg className={`icon ${styles.weathericon}`} aria-hidden="true">
                                <use xlinkHref={`#${WEATHER_ICON[item.weather]}`} ></use>
                            </svg>
                        </div>
                    </div>
                    
                    <div className={styles.right}>
                        {item.title}
                    </div>
                </div>
            )
       }

       render () {
           return ( 
              <div className={styles.article}>
                  {
                      ArticlesList.map((article,index) => {
                          return (
                            <div key={index}>
                                <div className={styles.maintitle}>
                                        <svg className={`icon ${styles.iconlingxing}`} aria-hidden="true">
                                            <use xlinkHref="#iconlingxing" ></use>
                                        </svg>
                                        {article.monthTime} 
                                        <svg className={`icon ${styles.iconlingxing}`} aria-hidden="true">
                                            <use xlinkHref="#iconlingxing" ></use>
                                        </svg>
                                    </div>
                                {
                                    article.articlesList.map(item => {
                                        return this.renderItem(item, index)
                                    })
                                }
                            </div>
                          )
                      })
                  }
              </div>
           )
        }

}

export default withRouter(Article)