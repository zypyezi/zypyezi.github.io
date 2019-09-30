// 文章分类
import Demo from 'SRC/pages/Demo'
import JS from 'SRC/pages/JS'

import Vue from 'SRC/pages/Vue'

import React from 'SRC/pages/Vue'

export const summary = [
    {
        title: 'Demo',
        id:'Demo',
        component: Demo,
        path: '/demo',
        navData: [
            {
                name: 'Demo',
                submenus: [
                    {
                        name: 'Demo1',
                        id: 'Demo1'
                    }
                ]
            }
        ]
    },
    {
        title: 'JS',
        id:'Js',
        component: JS,
        subtitle: 'js相关知识',
        path: '/js',
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
                    }
                ]
            }
        ]
    },
    {
        title:'Vue',
        id:'vue',
        component:Vue,
        path: '/vue',
        subtitle: 'Vue相关',
        navData:[
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
            }
        ]
    },
    {
        title:'React',
        id:'react',
        component: React,
        path: '/react',
        subtitle: 'React相关'
    }
]