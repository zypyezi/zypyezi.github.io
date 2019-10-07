import renderMethod from "../../component/Render";
import Css from 'SRC/pages/Css'
import React, { Component } from 'react'


export const CssData =  {
    title:'css',
    id:'css',
    component:Css,
    path: '/react',
    subtitle: 'css 相关问题',
    // default: '/rem',
    navData:[
        {
            name: 'Css',
            submenus: [
                {
                    name: 'BFC',
                    id: 'bfc'
                },
                {
                    name: '盒模型',
                    id: 'box'
                }
            ]
        },
        

    ]
}

const navData = CssData.navData
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

