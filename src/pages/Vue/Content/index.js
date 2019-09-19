import React, { Component } from 'react'
import diff from './diff'
import renderMethod from 'SRC/component/Render'


export default {
    diff: <div>
        {
            diff.map(item => {
                return renderMethod[item.type](item.content)
            })
        }
    </div>
}