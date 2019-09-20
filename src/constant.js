// 文章分类
import Demo from 'SRC/pages/Demo'
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