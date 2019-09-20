import React, { Component } from 'react'
import demo from './demo'
import renderMethod from 'SRC/component/Render'


export default {
    demo: <div>
        {
            demo.map(item => {
                return renderMethod[item.type](item.content)
            })
        }
    </div>
}