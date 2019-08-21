import React, { Component } from 'react'
import {ArticlesList} from '../../constant'
import { withRouter } from 'react-router'
import styles from './index.scss'

  class Articles extends Component{
       constructor (props) {
            super(props)

            this.state = {
                currentArticleList: [],
                selectedArticle: null
            }
       }

       componentWillMount () {
            let {params : {month, id} } = this.props.match
            this.setState({
                currentArticleList: ArticlesList[month].articlesList,
                selectedArticle: id
            })
        }


        componentWillReceiveProps () {
            console.log(this.props.match.params)
        }

       // 左侧菜单栏
       renderNavs = () => {
           let {selectedArticle, currentArticleList} = this.state
            return (
                <div className={styles.nav}>
                    {
                        currentArticleList.map(item => {
                            return (
                                <div className={`${item.id == selectedArticle ? styles.active : '' } ${styles['nav-item']}`}>{item.title}</div>
                            )
                        })
                    }
                </div>
            )
       }

       render () {
           return ( 
              <div>
                  {this.renderNavs()}
              </div>
           )
        }

}

export default withRouter(Articles)