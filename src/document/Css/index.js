import renderMethod from "../../component/Render";
import Css from 'SRC/pages/Css'
import React, { Component } from 'react'


export const CssData =  {
    title:'Html & Css',
    id:'css',
    component:Css,
    path: '/htmlcss',
    subtitle: 'html & css 相关问题',
    default: '/all',
    navData:[
        {
            name: 'Html',
            submenus: [
                {
                    name: 'html5 新增内容',
                    id: 'html5'
                },
            ]
        },
        {
            name: 'Css',
            submenus: [
                {
                    name: '杂记',
                    id: 'all'
                },
                {
                    name: 'css3 新属性',
                    id: 'css3'
                },
                {
                    name: 'BFC',
                    id: 'bfc'
                },
                {
                    name: '实现局中',
                    id: 'center'
                },
                {
                    name: '盒模型',
                    id: 'box'
                },
                {
                    name: 'flex',
                    id: 'flex'
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

