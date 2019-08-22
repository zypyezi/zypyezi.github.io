import React, { Component, Fragment } from 'react'
import styles from './index.scss'
import {ArticlesList} from '../../constant'

  class TimeLine extends Component{
       constructor (props) {
            super(props)
       }

       getMonth = (t) => {
           let time = new Date(+t)
           let y = time.getFullYear()
           let m = time.getMonth() + 1
           return y + ' 年 ' + m + ' 月'
       }

       renderArticles = (article) => {
           return article.map(item => {
               return (
                   <div  key={item.id} className={styles['article-item']}>
                       <span className={`${styles.dot} ${styles['small-dot']}`}></span>
                       <span className={styles['article-item-title']}>
                            {item.title}
                            <svg className={`icon ${styles.happyicon}`} aria-hidden="true">
                                <use xlinkHref='#iconkaixinguo1' ></use>
                            </svg>
                        </span>
                   </div>
               )
           })
       }

       render () {
           let totalMount = 0
            ArticlesList.map(item => {
                totalMount += item.articlesList.length
           })
           
           return ( 
              <div className={styles.timeline}>
                <span className={styles.dot}></span>
                <span className={styles.total}>已经加了{totalMount}次油了， 不能放弃哇～</span>
                <svg className={`icon ${styles.happyicon}`} aria-hidden="true">
                    <use xlinkHref='#iconkaixinguo' ></use>
                </svg>
                {
                    ArticlesList.map( (article, index) => {
                        let month = this.getMonth(article.monthKey)
                        return (
                            <Fragment>
                                <div key={index}>
                                    <span className={`${styles.dot} ${styles['middle-dot']}`}></span>
                                    <span className={styles.timeTitle}>{month}</span>
                                </div>
                                {this.renderArticles(article.articlesList)}
                            </Fragment>

                        )
                    })
                }
              </div>
           )
        }

}

export default TimeLine