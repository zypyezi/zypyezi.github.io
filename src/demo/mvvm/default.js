

class Watcher {
    constructor(name, el, vm){

    }
}


class MyVue {
    constructor(options){
        this.options = options
        this.$el = document.getElementById(options.el)
        this.$data = options.data
        this.directives = {}
        this.observe(this.$data)
        this.complier(this.$el)
    }

    observe(data){

        for(let key in data){
            // 判断是不是属于自己本身的属性
            if( data.hasOwnProperty(key) ){
            	this.directives[key] = [];
            }

            //递归遍历
            if ( typeof val === 'object' ) {
            	//递归遍历
            	this.obverse(val);
            }

            let val = data[key]
            let _dir = this.directives[key];

            Object.defineProperty(
                this.$data.key,
                {
                    enumerable: true,
                    configurable: true,
                    get:function () {
                        return val
                    },
                    set: function (newVal) {
                        if(val != newVal){
                            _dir.forEach(function (item) {
                                //调用自身指令的更新操作
                                item._update();
                            })
                        }
                    }
                }
            )

        }

    } 

    complier(el) {
        let nodes = el.children
        console.log('nodes', nodes)
        for( let i = 0 ;  i < nodes.length ; i++ ){
            let node = nodes[i];
            // 递归对所有元素进行遍历，并进行处理
            if( node.children.length ){
                this.compile(node);
            }
        
            //如果有 v-text 指令 , 监控 node的值 并及时更新
            if( node.hasAttribute('v-text')){
                let attrValue = node.getAttribute('v-text');
                //将指令对应的执行方法放入指令集
                this.directives[attrValue].push(new Watcher('text',node,this,attrValue,'innerHTML'))
            }
        
            //如果有 v-model属性，并且元素是INPUT或者TEXTAREA，我们监听它的input事件
            if( node.hasAttribute('v-model') && ( node.tagName === 'INPUT' || node.tagName === 'TEXTAREA')){
                let _this = this;
                //添加input时间
                node.addEventListener('input',(function(){
                    let attrValue = node.getAttribute('v-model');
                    //初始化赋值
                    _this.directives[attrValue].push(new Watcher('input',node,_this,attrValue,'value'));
                    return function () {
                        //后面每次都会更新
                        _this.$data[attrValue] = node.value;
                    }
                })())
            }
        }

    }

}