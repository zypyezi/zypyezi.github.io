import renderMethod from "../../component/Render";
import Http from 'SRC/pages/Http'
import React, { Component } from 'react'


export const HttpData =  {
    title:'Http',
    id:'Http',
    component:Http,
    path: '/http',
    subtitle: '网络知识',
    default: '/cookie',
    navData:[
        {
            name: '缓存那些事儿',
            submenus: [
                {
                    name: 'cookie、session等',
                    id: 'cookie'
                },
            ]
        },

    ]
}

const navData = HttpData.navData
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

