
import styles from './index.scss'
import React, { Component } from 'react'


export const renderTitle = (content) => {
    return <h1>{content}</h1>
}

export const renderHead = (content) => {
    return <h1>{content}</h1>
}


export const renderP = (content) => {
    return <p>{content}</p>
}

export const renderSubLine = (content) => {
    return <span>{content}</span>
}

export const renderCode = (content) => {
    return <pre><code class="language-css">{content}</code></pre>
}