import styles from './index.scss'
import React, { Component } from 'react'



const renderMethod =  {
    renderText: ({content}) => {
        return <div className={styles.block}>{content}</div>
    },
    renderUrl: ({content = 'demo', url = ''}) => {
        return <a href={url} target="_blank" className={styles.block}>{content}</a>
    },
    renderTitle: ({content}) => {
        return <div className={styles.title}>{content}</div>
    },
    renderSubTitle: ({content}) => {
        return <div className={styles.subtitle}>{content}</div>
    },
    renderBold: ({content}) => {
        return <div className={styles.bold}>{content}</div>
    },
    renderUl: ({content = []}) => {
        return (
            <ul className={styles.ul}>
                {
                    content.map((item,index) => {
                        return <li key={index}>{index +1 }. {item}</li>
                    })
                }
            </ul>
        )
    },
    renderCSS : ({content}) => {
        return (
        <pre >
        <code className="language-css">
            {content}
        </code>
        </pre>    
        )
    },
    renderJS : ({content}) => {
        return (
            <pre ><code className="language-javascript">{content}</code></pre>
        )
    },
    renderHtml: ({content}) => {
        return (
            <div dangerouslySetInnerHTML={{__html: content}} > 
            </div>
            )
    },
    renderPop: ({content, html}, props) => {
        return (
            <div className={styles.pop}> 
                {html}
                <svg onClick={(e) => props.showPop(e, true, content)} className={`icon ${styles.icon} cp`} aria-hidden="true">
                    <use xlinkHref="#icontip" ></use>
                </svg>
            </div>
        )
    }
}



export default (data, props) => {
    return (
        <div>
            {
                data.map(item => {
                    if(item.type == 'renderPop'){
                        return renderMethod[item.type](item, props)
                    }else{
                        return renderMethod[item.type](item)
                    }
                })
            }
        </div>
    )
}

