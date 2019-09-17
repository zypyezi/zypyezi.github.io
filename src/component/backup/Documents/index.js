import React, { Component } from 'react'
import styles from './index.scss'

import {renderHead, renderP, renderSubLine, renderCode} from './Render'

  class Documents extends Component{
       constructor (props) {
            super(props)
       }


       renderContent = (n) => {
            if(/^code:/.test(n)){
                return renderCode(n.replace(/^code:/g, ''))
            }else if(/^title:/.test(n)){
                return renderTitle(n.replace(/^title:/g, ''))
            }else if(/^strong:/.test(n)){
                return renderStrong(n.replace(/^strong:/g, ''))
            }else if(/^img:/.test(n)){
                return renderImg(n.replace(/^img:/g, ''))
            }else if(/^head:/.test(n)){
                return renderHead(n.replace(/^head:/g, ''))
            }else{
                return renderP(n)
            }
           
       }

       render () {
           let {article} = this.props
           let note =  require(`./Notes${article.path}`).default
           return ( 
              <div className="h-100">
                
                <div className={styles.floatcontent}>

                </div>

                <div className={styles.fixedcontent}>
                    <div className={styles.title}>
                      {article.title}
                    </div>
                    <div className={styles.content}>
                            {
                                note.content.map(n => {
                                    return this.renderContent(n)
                                })
                            }
                        </div>
                </div>
                    
                 
                  
              </div>
           )
        }

}

export default Documents