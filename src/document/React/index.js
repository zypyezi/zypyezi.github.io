import renderMethod from "../../component/Render";
import ReactCom from 'SRC/pages/React'
import React, { Component } from 'react'


export const ReactData =  {
    title:'React',
    id:'react',
    component:ReactCom,
    path: '/react',
    subtitle: 'React 相关问题',
    // default: '/rem',
    navData:[
        {
            name: 'react',
            submenus: [
                {
                    name: 'react-hook',
                    id: 'reacthook'
                }
            ]
        },
        {
            name: 'react-router',
            submenus: [
                {
                    name: '简单远离实现',
                    id: 'demo'
                }
            ]
        },

    ]
}

const navData = ReactData.navData
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

