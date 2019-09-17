import React, { Component } from 'react'
import styles from './index.scss'

  class Today extends Component{
       constructor (props) {
            super(props)
       }

       handleClick = () => {
           this.props.click(true)
       }
       render () {
           return ( 
              <span className={styles.today} onClick={this.handleClick}>
                  <svg className={`icon ${styles.icon}`} aria-hidden="true">
                    <use xlinkHref="#icontoday" ></use>
                </svg>
              </span>
           )
        }

}

export default Today