
const data = [
    {
        type :'renderTitle',
        content: 'v-if & v-show'
    },
    {
        type: 'renderHtml',
        content: `
        <codeBlock>
            <code>v-if 是条件渲染，并且是惰性的</code>
            <code>v-show 只是css display属性的切换。初始渲染成本更高</code>
            <code>对一些场景，比如有滚动的弹框，使用v-show会记住滚动状态。一般状态的重置可能会需要多加一些参数去控制，并且会造成
            代码的不易理解，所以实践中，一般会直接使用v-if</code>
        </codeBlock>
        `
    },
    {
        type :'renderTitle',
        content: 'computed & watch'
    },
    {
        type: 'renderHtml',
        content: `
        <codeBlock>
            <code>computed 会使用缓存</code>
            <code>watch 常适用于异步或者开销大的操作</code>
            <code>只有界面上使用到的数据才会被注册监听，即触发computed自动计算。watch常用语路由变化检测</code>
        </codeBlock>
        `
    },
    {
        type :'renderTitle',
        content: 'v-for'
    },
    {
        type: 'renderHtml',
        content: `
        <codeBlock>
            <code>v-for优先级高于v-if， 两者应避免同时使用</code>
        </codeBlock>
        `
    },
    // {
    //     type: 'renderHtml',
    //     content: `
    //     <codeBlock>
    //         <code>v-for优先级高于v-if， 两者应避免同时使用</code>
    //     </codeBlock>
    //     `
    // },
]



export default data
