

// 观察者模式

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



// 发布订阅模式
const Observe = {
    subs:{},
    add: function (type, fn){
        this.subs[type] ?  this.subs.push(fn) :   this.subs[type] = [fn]
    },
    remove: function (type, fn) {
        let i = __message[type].length - 1
        for ( ; i >= 0; i-- ) {
            this.subs[type][i] === fn && this.subs[type].splice(1,1)
        }
        
    },
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




