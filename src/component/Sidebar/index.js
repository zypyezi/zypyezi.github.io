import React, { Component } from 'react'
import styles from './index.scss'
import {withRouter} from 'react-router-dom'

  class Sidebar extends Component{
       constructor (props) {
            super(props)
            this.state = {
                activeMenu: null
            }
       } 


       componentWillMount(){
            let {id} = this.props.match.params
            this.setState({
                activeMenu: id
            })
       }

       showMenu = (menu) => {
           let {history} = this.props
           let {location} = history
           this.props.history.replace(`/${location.pathname.split('/')[1]}/${menu.id}`)
           this.setState({
                activeMenu: menu.id
           })
       }

       renderMenus = (menus) => {
        let {activeMenu} = this.state
            return (
                <ul>
                    {
                        menus.map(menu => {
                            return <li 
                                className={`${activeMenu == menu.id ? styles.active : ''} ${styles.menu}`}
                                key={menu.id}
                                onClick={this.showMenu.bind(this, menu)}
                                >{menu.name}</li>
                        })
                    }
                </ul>
            )
       }

       render () {
           let {navData} = this.props
        
           return ( 
              <div className={styles.sidebar}>
                  {
                    navData.map(category => {
                        return (
                            <ul  key={category.name}>
                                <li className={styles.category}>{category.name}</li>
                                {this.renderMenus(category.submenus)}
                            </ul>
                        )
                    })
                  }
              </div>
           )
        }

}

export default withRouter(Sidebar)