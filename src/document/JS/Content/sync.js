

import React, { Component } from 'react'

const dataType = [
    {
        type: 'renderTitle',
        content: 'js中常见异步'
    },
    {
        type: 'renderSubTitle',
        content: '同步 VS 异步'
    },
    {
        type: 'renderHtml',
        content:   `
            <codeBlock>
                <code>同步： 在主线程上执行的任务，必须前一个任务执行完毕，才能执行下一个任务</code>
                <code>异步： 进入任务队列排队的任务。</code>
                <code>当异步任务完成，会在队列中添加一个事件【回调函数etc】，表明当前的异步任务可以进入执行栈。</code>
                <code>但是只有当执行栈中的所有同步任务完成，系统才会去读取任务队列</code>
            </codeBlock>
            
        `
    },
    {
        type: 'renderSubTitle',
        content: '事件循环'
    },
    {
        type: 'renderHtml',
        content:   `
            <codeBlock>
                <code>js主线程拥有一个函数调用栈和任务队列</code>
                <code>JavaScript 主线程会在执行栈清空后，读取任务队列。在读取到任务队列中的函数后，将该函数入栈。一直运行直到执行栈清空，再次去读取任务队列，不断循环。</code>
                <code>当异步任务完成，会在队列中添加一个事件【回调函数etc】，表明当前的异步任务可以进入执行栈。</code>
            </codeBlock>
            
        `
    },
    {
        type: 'renderSubTitle',
        content: 'js中的几种异步'
    },
    {
        type: 'renderHtml',
        content: `
            <codeBlock>
                <p>setTimeout / setInterval</p>
                <code>1.由浏览器内核的timer模块来处理，只有当时间到达的时候，才会将回调函数添加到任务队列中</code>
                <code>2.需等主线程的所有同步任务完成后才会执行，所以即使定时时间为0也不一定立马执行</code>
                <pre><code className="language-javascript">
    console.log(1);
    setTimeout(function(){console.log(2);},0);
    console.log(3);
    
    // 1，3，2
                </code></pre>
            </codeBlock>
            <codeBlock>
                <p>事件</p>
                <code> 由浏览器内核的DOM Binding模块【事件触发线程】来处理，当事件触发的时候，回调函数立即添加至队列</code>
            </codeBlock>
            <codeBlock>
                <p>ajax</p>
                <code>由浏览器内核的network模块【异步http请求线程】来处理，在网络请求完成返回之后，才将回调添加至队列</code>
            </codeBlock>
            <codeBlock>
            <p>nodejs 的 process.nextTick</p>
            <code>在下一次Event Loop之前触发回调函数【主线程读取任务队列前】即在发生异步任务前 [在微任务前]</code>
            <code>全部process.nextTick的回调函数，执行都会早于Promise</code>
            <pre><code className="language-javascript">
   
        process.nextTick(function A() {
            console.log(1);
            process.nextTick(function B(){console.log(2);});
        });

        setTimeout(function timeout() {
            console.log('TIMEOUT FIRED');
        }, 0)
        
        // 1
        // 2
        // TIMEOUT FIRED
        
   // 即使嵌套多个，都会在当前执行栈执行【指定的回调总在当前执行栈尾部触发】
            </code></pre>
            </codeBlock>
            <codeBlock>
                <p>promise</p>
                <code>追加在本轮循环，但是promise属于微任务，所以在nextTick后执行</code>
            </codeBlock>
            <codeBlock>
            <p>nodejs 的setImmediate</p>
            <pre><code className="language-javascript">
//在当前任务队列的尾部添加事件，在下一次Event Loop时执行
    setImmediate(function A() {
        console.log(1);
        setImmediate(function B(){console.log(2);});
    });

    setTimeout(function timeout() {
        console.log('TIMEOUT FIRED');
    }, 0);

    console.log(55)
    
    //运行结果可能是1--TIMEOUT FIRED--2，也可能是TIMEOUT FIRED--1--2
    // 即使setTimeout未设置时间参数，但是有一个下限值，规定不能小于4ms， 所以至少是在4ms后才会执行setTimeout的回调函数
    // 但是由于同步任务执行时间一般肯定会超过4ms， 所以同步任务执行完毕后，setTimeout实际已到了触发事件
    // 所以此时异步宏任务已被触发，setTimeout已经被放入队列中，所以一般结果是 TIMEOUT FIRED--1--2
    setImmediate 总是将事件注册到下一轮Event Loop 
    
    //将上述例子修改一下
    
    setImmediate(function (){
        setImmediate(function A() {
            console.log(1);
            setImmediate(function B(){console.log(2);});
        });

        setTimeout(function timeout() {
            console.log('TIMEOUT FIRED');
        }, 0);
    });
    
    // 1
    // TIMEOUT FIRED
    // 2
    // 运行结果是固定的，当执行回调时，此时队列里面是空的，setImmediate会直接被调用【优先级更高】，而setTimeout 会进入下一次事件循环
    // 推荐使用setImmediate
               </pre></code>
            </codeBlock>
        `
    }
]


export default dataType