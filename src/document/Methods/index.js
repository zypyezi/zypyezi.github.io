

import Methods from 'SRC/pages/Methods'
import renderMethod from 'SRC/component/Render'
import React, { Component } from 'react'


export const  methodData =   {
    title: 'Methods',
    id:'Methods',
    component: Methods,
    subtitle: 'Methods',
    path: '/Methods',
    default: '',
    navData: [
        {
            name: 'Methods',
            submenus:[]
        },
        {
            name: 'es6',
            submenus: [
                {
                    name: 'var 和 let const',
                    id: 'let'
                },
                {
                    name: 'promise',
                    id: 'promise'
                },
                {
                    name: 'proxy',
                    id: 'proxy'
                },
                {
                    name: 'class',
                    id: 'class'
                },
                {
                    name: 'module',
                    id: 'module'
                },
            ]
        }
    ]
}




const navData = methodData.navData
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

