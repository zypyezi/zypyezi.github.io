import React, { Component } from 'react'
import dataType from './dataType'
import bibao from './bibao'
import renderMethod from 'SRC/component/Render'


export default {
    dataType: function(props) {
        return (
            <div>
                {
                    dataType.map(item => {
                        if(item.type == 'renderPop'){
                            return renderMethod[item.type](item, props)
                        }else{
                            return renderMethod[item.type](item)
                        }
                    })
                }
            </div>
        )
    },
    bibao: <div>
        {
            bibao.map(item => {
                return renderMethod[item.type](item)
            })
        }
    </div>
}