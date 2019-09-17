import React, { Component } from 'react'


export default Wrap = function ({title}) {
    return (
        <div>
            {title}
            {this.props.children}
        </div>
    )
}
