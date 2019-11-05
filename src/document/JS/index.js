

import JS from 'SRC/pages/JS'
import renderMethod from 'SRC/component/Render'
import React, { Component } from 'react'


export const  jsData =   {
    title: 'JS',
    id:'Js',
    component: JS,
    subtitle: 'js相关知识',
    path: '/js',
    default: '/dataType',
    navData: [
        {
            name: 'js基础知识',
            submenus: [
                {
                    name: '数据类型',
                    id: 'dataType'
                },
                {
                    name: '闭包',
                    id: 'bibao'
                },
                {
                    name: 'this',
                    id: 'this'
                },
                {
                    name: '原型',
                    id: 'propotype'
                },
                {
                    name: 'js中常见异步',
                    id: 'sync'
                },
                {
                    name: '事件循环',
                    id: 'eventLoop'
                },
                {
                    name: '订阅发布模式',
                    id: 'pubsub'
                },
                {
                    name: '单例模式',
                    id: 'singleton'
                },
                {
                    name: '缓存',
                    id:'cache'
                },
                {
                    name: 'jsonp',
                    id:'jsonp'
                },
                {
                    name: 'xss攻击',
                    id: 'xss'
                },
                {
                    name: '杂记',
                    id: 'all'
                }
            ]
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
        },
        {
            name: '正则',
            submenus: [
                {
                    name: '基础类校验',
                    id: 'baseRegexp'
                },
            ]
        },
        {
            name: '常用的js方法',
            submenus: [
                {
                    name: '基础类',
                    id: 'basemethods'
                },
            ]
        }
    ]
}




const navData = jsData.navData
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

