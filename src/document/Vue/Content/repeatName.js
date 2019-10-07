

const data = [
    {
        type: 'renderTitle',
        content: '属性重名问题'
    },
    {
        type: 'renderSubTitle',
        content: '先给出结论： 优先级 props > data  > computed > methods'
    },
    {
        type: 'renderSubTitle',
        content: '初始化顺序 props > methods > data > computed '
    },
    {
        type: 'renderHtml',
        content: `
        <codeBlock>
         <pre><code><a href="https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L48">源码地址</a>
    vm._watchers = []
    const opts = vm.$options
    if (opts.props) initProps(vm, opts.props)
    if (opts.methods) initMethods(vm, opts.methods)
    if (opts.data) {
        initData(vm)
    } else {
        observe(vm._data = {}, true /* asRootData */)
    }
    if (opts.computed) initComputed(vm, opts.computed)
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch)
}</code></pre>
        </codeBlock>
        `
    },
    {
        type: 'renderSubTitle',
        content: '有以下几种属性重名的情况'
    },
    {
        type: 'renderUl',
        content: [
            'data 和 computed 出现同名的情况',
            'data 和 props 出现同名',
            'computed 和 methods 同名',

        ]
    },
    {
        type: 'renderHtml',
        content:`
         <h4>data 和 props 出现同名</h4>
         <text>props上的同名属性会覆盖data,抛出警告</text>
         <codeBlock>
         <pre><code><a href="https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L140">源码地址</a>
    // initData 函数
   if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        \`The data property key is already declared as a prop. \` +
        \`Use prop default value instead.\`,
        vm
      )
    }
        </code></pre>
        </codeBlock>
        <h4>data 和 computed 出现同名的情况</h4>
        <text>data 定义的变量的优先级比 computed 高， computed 定义的变量会被覆盖掉</text>
        <text> 源码中有一段代码，会对该情况提出一种警告</text>
         <codeBlock>
         <pre><code><a href="https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L200">源码地址</a>
    // initComputed 函数
   if (key in vm.$data) {
        warn('The computed property key is already defined in data', vm)
    }else if (vm.$options.props && key in vm.$options.props) {
        warn(The computed property key is already defined as a prop.', vm)
    }
        </code></pre>
        </codeBlock>
        <h4>computed 和 methods 同名 </h4>
        <codeBlock>
         <pre><code><a href="https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L230">源码地址</a>
    // initComputed 函数  
   if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
        warn(
            \`Computed property key was assigned to but it has no setter.\`,
            this
        )
        }
    }
        </code></pre>
        </codeBlock>
        `
    }

]


export default data
