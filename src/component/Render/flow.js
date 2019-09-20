import React, { Component } from 'react';
import jsplumb from 'jsplumb';
import $ from 'jquery';
import styles  from './index.scss';
const jsPlumbIn = jsplumb.jsPlumb;



//空心圆端点样式设置
let hollowCircle = {
    endpoint: ["Dot", {radius: 7}], // 端点的形状
    isSource: true, // 是否可以拖动（作为连线起点）
    connector: ["Flowchart", {stub: [0, 0], gap: 3, cornerRadius: 5, alwaysRespectStubs: true}],
    // 连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
    isTarget: true, // 是否可以放置（连线终点）
    maxConnections: 10, // 设置连接点最多可以连接几条线
    overlays:[ ['Arrow', { width: 12, length: 12, location: 0.8 }] ],
    paintStyle: { stroke: '#3d7e9a', strokeWidth: 1 },
    endpointStyle: { fill: '#3d7e9a', outlineStroke: '#3d7e9a', outlineWidth: 2 }
};

class JsplumbTest extends Component {

    componentDidMount(){

        let _this = this
        jsPlumbIn.ready(function () {

            // _this.connectAndLabel('item_left', 'item_right')

            _this.addPoint('item_left', ['Right'])
            _this.addPoint('item_right', ['Left'])

            _this.connect( ['item_left', 'item_right'] , 'label')
            
            // _this.addPoint('item_right', ['Right'])
    
        })

        // jsPlumbIn.draggable('item_left')
        // jsPlumbIn.draggable('item_right')
    }

    //为已有流程框连线 设置文字
    connectAndLabel = (source, target) =>{
        jsPlumbIn.connect({
            source: source,
            target: target,
            ...hollowCircle
        })
    }

    //添加锚点
    addPoint = (id, anchor) => {
        jsPlumbIn.addEndpoint(id, {
            anchors: anchor,
            uuid: id
          }, hollowCircle)
    }


    connect = (uuids, label) => {
        jsPlumbIn.connect(
            {
                uuids: uuids,
                ...hollowCircle,
                label
            })
    }


    // 菱形  判断框
    renderDecision = () => {

    }

    // renderProcess = () => {

    // }

    // 起止
    renderTerminal = (item) => {
        return <div>
                <div className={styles.terminal}>
                    {item}
                </div>
            </div>
    }

    renderPoint = (item) => {
        if(/^st=>start:/.test(item) || /^e=>end:/.test(item)){
            return this.renderTerminal(item.replace(/^st=>start:/, '').replace(/^e=>end:/, ''))
        }
    }
    

    render() {
        const data = [
            'st=>start:开始',
            'cond1=>condition: 第一个判断',
            'e=>end: 结束',
        ]
        const connectLine = [
            
        ]
        return (
            <div className="Dotcon" >
                {
                    data.map(item => {
                        return this.renderPoint(item)
                    })
                }
                {/* <div id="item_left" ></div> */}
                {/* <div id="item_right"></div> */}
            </div>
        );
    }
  }
  
  export default JsplumbTest;