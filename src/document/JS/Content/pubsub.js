const Data = [
    {
        type: 'renderTitle',
        content: '发布订阅模式'
    },
    {
        type: 'renderSubTitle',
        content: '观察者模式  VS 发布订阅模式'
    },
    {
        type: 'renderHtml',
        content: `
            <codeBlock>
                <code>观察者模式中，发布者和观察者直接通信。</code>
                <code>而发布订阅模式， 发布者和订阅者并不知道对方的存在，而是通过第三方的消息代理来进行通信交互</code>
            </codeBlock>
        `
    },
    {
        type: 'renderPop',
        html: '观察者模式简单demo',
        content: `
        <title>观察者模式</title>
        <pre><code>
const Subject = function () {
    return {
        observers:[],
        add: function (obj) {
            this.observers.push(obj)
        },
        remove: function () {
            
        },
        notify: function (...args) {
            this.observers.forEach(observer => observer.update(...args));
        }
    }
}

const Observer = function () {
    return {
        update: function (...args) {
            console.log(...args)
        }
    }
    
}
        
const obj1 = new Observer()
const obj2 = new Observer()
const sub = new Subject()
sub.add(obj1)  // （目标和观察者建立了依赖关系）
sub.add(obj2)
sub.notify('notified !');

        </code></pre>
        `
    },
    {
        type: 'renderPop',
        html: '订阅发布模式简单demo',
        content: `
        <title>订阅发布模式</title>
        <pre><code>
const Observe = {
    subs:{},
    // 添加注册
    add: function (type, fn){
        this.subs[type] 
        ?  this.subs.push(fn) 
        :  this.subs[type] = [fn]
    },
    // 移除
    remove: function (type, fn) {
        let i = __message[type].length - 1
        for ( ; i >= 0; i-- ) {
            this.subs[type][i] === fn 
            && this.subs[type].splice(1,1)
        }
        
    },
    // 发布
    subscribe : function (type, args) {
        var subList = this.subs[type]
        for ( let i =0 ; i < subList.length; i++ ) {
            subList[i].call(this, args)
        }
    }
}


//订阅消息
Observe.add('say', function (data) {
    console.log(data);
})

//发布消息
Observe.subscribe('say', { text : 'hello world' } )  // {text: "hello world"}
        </code></pre>
        `
    },

]

export default Data