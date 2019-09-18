import React, { Component } from 'react'
import styles from './index.scss'

const menus = [
    {
        name: '首页',
        icon: 'iconxiazai44',
        id: 'home',
        path: '/'
    },
    {
        name: '标签',
        icon: 'iconbiaoqian',
        id: 'tag',
        path: '/'
    },
    {
        name: '归档',
        icon: 'iconguidang',
        id: 'page',
        path: '/'
    }
]
  class PageHead extends Component{
       constructor (props) {
            super(props)
       }

       render () {
           let {title} = this.props
           return ( 
              <div className={styles.head}>
                  <div className={styles.author}>
                        <div className={styles.line}></div>
                        <div>{title}</div>
                        <div className={styles.line}></div>
                  </div>

                  <ul className={styles.menu}>
                        {
                            menus.map(item => {
                                return (
                                    <li className={styles.menuitem}>
                                        <svg className={`icon ${styles.menuicon}`} aria-hidden="true">
                                            <use xlinkHref={`#${item.icon}`} ></use>
                                        </svg>
                                        <span>{item.name}</span>
                                    </li>
                                )
                            })
                        }
                  </ul>
              </div>
           )
        }

}

export default PageHead