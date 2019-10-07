import renderMethod from "../../component/Render";
import MobileQuestion from 'SRC/pages/MobileQuestion'
import React, { Component } from 'react'


export const MQData =  {
    title:'移动端问题',
    id:'h5',
    component:MobileQuestion,
    path: '/mobileQuestion',
    subtitle: '移动端遇到的问题总结',
    default: '/rem',
    navData:[
        {
            name: '适配问题',
            submenus: [
                {
                    name: 'rem',
                    id: 'rem'
                }
            ]
        },
        {
            name: '优化',
            submenus: [
                {
                    name: '首屏加载问题',
                    id: 'firstPage'
                }
            ]
        },
        // {
        //     name: '兼容性',
        //     submenus: [
        //         {
        //             name: '',
        //             id: ''
        //         }
        //     ]
        // },
        // {
        //     name: '其它',
        //     submenus: [
        //         {
        //             name: '首屏加载问题',
        //             id: 'firstPage'
        //         }
        //     ]
        // }
    ]
}

const navData = MQData.navData
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

