import React, { Component } from 'react'
import {ArticlesList} from '../constant'
import { withRouter } from 'react-router'
import styles from './index.scss'
import PageHead from '../PageHead';
import TimeLine from '../TimeLine';
import Today from '../Today';
import EverydaySentence from '../EverydaySentence';
import Documents from '../Documents';

  class Articles extends Component{
       constructor (props) {
            super(props)

            this.state = {
                currentArticleList: [],
                selectedArticle: {},
                show: false
            }
       }

       componentWillMount () {
            let {params : {month, id} } = this.props.match
            let  currentArticleList = ArticlesList[month].articlesList
            this.setState({
                currentArticleList: currentArticleList,
                selectedArticle: currentArticleList.find(it => it.id == id)
            })
        }


        componentWillReceiveProps () {
            console.log(this.props.match.params)
        }

        show = (value) =>{
            this.setState({show : value })
        }

       // 左侧菜单栏
       renderNavs = () => {
           let {selectedArticle, currentArticleList} = this.state
            return (
                <div className={styles.nav}>
                    {
                        currentArticleList.map(item => {
                            return (
                                <div className={`${item.id == selectedArticle.id ? styles.active : '' } ${styles['nav-item']}`}>{item.title}</div>
                            )
                        })
                    }
                </div>
            )
       }

       render () {
           let {selectedArticle} = this.state
           return ( 
              <div className="h-100 oh">
                  <PageHead></PageHead>
                  {
                      selectedArticle.id
                      ?  <Documents article={selectedArticle}></Documents>
                      :  <TimeLine></TimeLine>
                  }
                  {/* <Today click={this.show}></Today>
                  {
                      this.state.show &&  <EverydaySentence close={() => this.show(false)}></EverydaySentence>
                  } */}
              </div>
           )
        }

}

export default withRouter(Articles)