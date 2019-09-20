import styles from './index.scss'
import React, { Component } from 'react'



export default {
    renderText: (content) => {
        return <div className={styles.block}>{content}</div>
    },
    renderTitle: (content) => {
        return <div className={styles.title}>{content}</div>
    },
    renderSubTitle: (content) => {
        return <div className={styles.subtitle}>{content}</div>
    },
    renderBold: (content) => {
        return <div className={styles.bold}>{content}</div>
    },
    renderUl: (content) => {
        return (
            <ul>
                {
                    content.map((item,index) => {
                        return <li key={index}>{index +1 }. {item}</li>
                    })
                }
            </ul>
        )
    },
    renderCSS : (content) => {
        return (
        <pre>
        <code className="language-css">
            {content}
        </code>
        </pre>    
        )
    },
    renderJS : (content) => {
        return (
            <pre><code className="language-javascript">{content}</code></pre>
        )
    }
}

// export const renderTitle = (content) => {
//     return <h1>{content}</h1>
// }

// export const renderHead = (content) => {
//     return <h1>{content}</h1>
// }


// export const renderP = (content) => {
//     return <p>{content}</p>
// }

// export const renderSubLine = (content) => {
//     return <span>{content}</span>
// }

