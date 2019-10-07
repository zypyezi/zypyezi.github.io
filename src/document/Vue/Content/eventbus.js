

const data = [
    {
        type: 'renderTitle',
        content: 'EventBus'
    },
    {
        type: 'renderHtml',
        content: `
        <text>利用发布/订阅的模式</text>
        <text>注册一个对象【中间者】， 里面主要包含addEventListener 和 dispatch 两个函数。
    每一次addEventListener时，会向总对象订阅一个事件 【一般包含作用域、事件名字、参数】
    而执行dispatch 的时候， 就是在该对象中去寻找对应的事件，并执行</text>
    <text>具体实践，在vue 中使用eventbus</text>
        `
    },
    {
        type: 'renderJS',
        content: `
// 创建Index.vue 包含两个子组件
<template>
  <div>
      <click-child></click-child>
      <show-child></show-child>
  </div>
</template>
<script>
import ClickChild from './ClickChild.vue'
import ShowChild from './ShowChild.vue'
export default {
  name: 'event-bus' ,
  components:{ClickChild,ShowChild},
}
</script>
        `
    },
    {
       type: 'renderSubTitle',
       content: '一、利用vue自身的$emit $on '
    },
    {
        type: 'renderHtml',
        content: `
        <text>直接创建一个vue 实例， 可以利用实例的$emit $on 方法直接进行组件间的交互</text>
        <text>平时组件内使用的this.$emit 方法， this指向的是vm 实例， 所以其实本质是一样的</text>
        <codeBlock>
            // bus.js 文件
            <code>import Vue from 'vue'</code>
            <code>export const EventBus = new Vue()</code>
            
            // click-child组件
            <code>EventBus.$emit('click')</code>
            // show-child组件
            <code>EventBus.$on('click', () => {} )</code>
        </codeBlock>
        `
    },
    {
        type: 'renderSubTitle',
        content: '二、全局的事件总线  -- 发布/订阅方法 ， '
    },
    {
        type: 'renderHtml',
        content: `
        <text> 相比于前者，只是把EventBus 创建的实例放到了 Vue的原型上</text>
        <text>这样就可以在全局通过this.$bus来直接访问 事件总线的实例， 避免各处引用bus.js 文件的弊端</text>
        <codeBlock>
            <pre><code>
     Object.defineProperties(Vue.prototype, {
        $bus: {
            get: function () {
                return EventBus
            }
        }
    })    
</code></pre>
    </codeBlock>
        `
    },
    {
        type: 'renderSubTitle',
        content: '三、原生实现 '
    },
    {
        type: 'renderJS',
        content: `
// 在Index.vue 中引入文件   import './eventBus'
//  核心文件  eventBus.js
import Vue from 'vue'
var factory = function (){
    var EventBusClass = {}

    EventBusClass = function () {
        this.listeners = {}
    }
    EventBusClass.prototype = {
        addEventListener: function(type, callback, scope) {
			// arguments 是伪数组 无法直接调用slice方法
			// 利用 call 将Array.prototype.slice 方法作用域arguments
			// 而slice方法会返回一个新的数组
			// 所以变相将arguments 转化成了一个具有实例方法的数组 【本质是生成了新的数组】
			var args = Array.prototype.slice.call(arguments)
			args = args.length > 3 ? args.slice(3) : []
			if(typeof this.listeners[type] != "undefined") {
				this.listeners[type].push({scope:scope, callback:callback, args:args});
			} else {
				this.listeners[type] = [{scope:scope, callback:callback, args:args}];
			}
        },
        removeEventListener: function(type, callback, scope) {
            var curListeners = this.listeners[type]
			if(typeof curListeners != "undefined") {
				var len = this.listeners[type].length;
				var newArray = [];
				for(var i=0; i<len; i++) {
					var listener = this.listeners[type][i];
					if(listener.scope != scope || listener.callback != callback) {
                        newArray.push(listener)
					} 
				}
				this.listeners[type] = newArray;
			}
        },
        dispatch: function(type) {
			var args = Array.prototype.slice.call(arguments)
            var curListener = this.listeners[type]
			if(typeof curListener != "undefined") {
				var listeners = curListener.slice();
				for(var i=0; i<listeners.length; i++) {
					var listener = listeners[i];
					if(listener && listener.callback) {
						var concatArgs = args.slice(1).concat(listener.args);
						listener.callback.apply(listener.scope, concatArgs);
					}
				}
			}
        },
        
    }


	var EventBus = new EventBusClass();
	return EventBus;
}
var EventBus = factory()

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})

`
    },
    {
        type:'renderJS',
        content:`
// showChild 子组件
 mounted() {
    // 由于this.$bus 注册到了全局 所以可以直接使用addEventListener, 注册自定义事件
    this.$bus.addEventListener('click', (e, data) => {
      console.log(e, 'clickme')
    })
  }
        `
    },
    {
        type:'renderJS',
        content:`
// clickChild 子组件
 methods:{
  handleClick(item){
      this.$bus.dispatch('click', item)
      }
  }
        `
    },
    {
        type: 'renderHtml',
        content: `<text> 注： 虽然尚未使用过vue1.0， 但是查看资料说，vue1.0 中组件的通信主要通过vm.dispatch 沿父链向上传播， 用vm.$broadcast 向下广播</text>`
    }
]


export default data
