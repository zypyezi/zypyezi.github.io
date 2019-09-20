import React, { Component } from 'react'
import PageHead from '../PageHead'
import SideBar from '../Sidebar'
import styles from './index.scss'
const Wrap = function ({Component, title, navData}) {
    return (
        <div className="h-100">
            {/* <PageHead title={title}></PageHead> */}
            <div className="h-100">
                {/* <SideBar navData={navData}></SideBar> */}
                <div className={styles.container}>
                    <Component></Component>
                </div>
                
            </div>
           
        </div>
    )
}


export default Wrap
