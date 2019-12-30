import renderMethod from "../../component/Render";
import Math from 'SRC/pages/Math'
import React, { Component } from 'react'


export const MathData =  {
    title:'编程与数学',
    id:'math',
    component:Math,
    path: '/math',
    default: '/andor',
    subtitle: '编程与数学, 从来都是一家',
    navData:[
        {
            name: 'andor',
            submenus: [
                {
                    name: '与或非',
                    id: 'andor'
                },
            ]
        }

    ]
}

const navData = MathData.navData
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

