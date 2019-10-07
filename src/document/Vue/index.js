import renderMethod from "../../component/Render";
import Vue from 'SRC/pages/Vue'
import React, { Component } from 'react'


export const vueData =  {
    title:'Vue',
    id:'vue',
    component:Vue,
    path: '/vue',
    subtitle: 'Vue相关',
    default: '/diff',
    navData:[
        {
            name: '基础原理',
            submenus: [
                {
                    name: 'data属性相关',
                    id: 'data'
                },
                {
                    name: '属性重名问题',
                    id: 'repeatName'
                }
            ]
        },
        {
            name: 'vue源码',
            submenus: [
                {
                    name: 'diff',
                    id: 'diff'
                },
                {
                    name: '双向绑定',
                    id: 'bind'
                }
            ]
        },
        {
            name: '使用技巧及注意点',
            submenus: [
                {
                    name: 'eventbus的使用',
                    id: 'eventbus'
                },
                {
                    name: 'v-model的更多用法',
                    id: 'vmodel'
                },
                {
                    name: '问题记录',
                    id: 'question'
                },
                {
                    name: '优化点',
                    id: 'optimize'
                },
                {
                    name: '小记录',
                    id: 'record'
                }
            ]
        }
    ]
}

const navData = vueData.navData
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

