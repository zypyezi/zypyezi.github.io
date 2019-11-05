import renderMethod from "../../component/Render";
import Webpack from 'SRC/pages/Webpack'
import React, { Component } from 'react'


export const webpackData =  {
    title:'Webpack',
    id:'Webpack',
    component:Webpack,
    path: '/webpack',
    subtitle: 'webpack相关',
    default: '/summary1',
    navData:[
        {
            name: '杂记',
            submenus: [
                {
                    name: '杂记1',
                    id: 'summary1'
                }
            ]
        }
    ]
}

const navData = webpackData.navData
const menu = {}

navData.map(item => {
    item.submenus.map(it => {
        menu[it.id] =  (props) => {
            return <div key={it}>
                {
                    renderMethod(
                        require('./Content/' + it.id).default,
                        props
                    )
                }
            </div>
        }
    })
})

export const content =  {
    ...menu
}

