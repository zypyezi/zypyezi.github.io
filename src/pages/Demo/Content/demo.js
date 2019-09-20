import React, { Component } from 'react'


const demo = [
    {
        type: 'renderTitle',
        content: '这是一段标题'
    },
    {
        type: 'renderText',
        content: '这是一段纯文字内容'
    },
    {
        type: 'renderUl',
        content: [
            '第一条',
            '第二条',
            '第三条'
        ]
    },
    {
        type: 'renderCSS',
        content: 
        `这是一段css代码`
    },
    {
        type: 'renderJS',
        content: 
        `这是一段js代码
        `
    }
]


export default demo