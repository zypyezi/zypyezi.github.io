import renderMethod from "../../component/Render";
import Product from 'SRC/pages/Product'
import React, { Component } from 'react'


export const ProductData =  {
    title:'需求集合',
    id:'product',
    component:Product,
    path: '/product',
    subtitle: '相关需求总结',
    // default: '/rem',
    navData:[
        {
            name: 'js',
            submenus: [
                {
                    name: '将 pdf 文件转化为 图片',
                    id: 'translatePdfToImg'
                },
                {
                    name: '图片压缩',
                    id: 'imageCompress'
                },
                {
                    name: '搜索高亮',
                    id: 'searchHighlight'
                },
                {
                    name: '原生上传文件',
                    id: 'uploadFile'
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

