const data = [
    {
        type: 'renderTitle',
        content: '事件委托'
    },
    {
        type: 'renderHtml',
        content: `
            <text>也称作事件代理，利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件</text>
            <text>使用事件代理的优点：</text>
            <text>1. 减少内存，将与dom的交互操作减少为1次，提升性能</text>
            <text>2. 动态插入的子元素仍旧可以监听到事件</text>
            <text>获取实际操作dom节点  event.target || event.srcElement</text>
        `
    },
    {
        type: 'renderPop',
        html: 'DOM事件流阶段',
        content: `
            <title>DOM事件流阶段</title>
            <p>DOM事件流存在三个阶段，事件捕获阶段、目标阶段、冒泡【事件监听的第三个参数为false， 默认值】阶段</p>


            <codeBlock>
                <p>当事件捕获和事件冒泡 一起存在时</p>
                <code>1.document 往 target节点，捕获前进，遇到注册的捕获事件立即触发执行</code>
                <code>2.到达target节点，触发事件（对于target节点上，是先捕获还是先冒泡则捕获事件和冒泡事件的注册顺序，先注册先执行）</code>
                <code>3.target节点 往 document 方向，冒泡前进，遇到注册的冒泡事件立即触发</code>
            </codeBlock>

            <p>
            stopPropagation方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上其他的事件监听函数。
            既可以阻止事件冒泡，也可以阻止事件捕获，也可以阻止处于目标阶段
            </p>
            <p>stopImmediatePropagation方法阻止同一个事件的其他监听函数被调用，不管监听函数定义在当前节点还是其他节点</p>
        `
    },
    {
        type: 'renderTitle',
        content: 'load 和 DOMContentLoaded'
    },
    {
        type: 'renderHtml',
        content: `
            <text>load</text>
            <codeBlock>
                <code>load 应该仅用于检测一个完全加载的页面 当一个资源及其依赖资源已完成加载时，将触发load事件</code>
                <code>页面的html、css、js、图片等资源都已经加载完之后才会触发 load 事件</code>
            </codeBlock>
            <text>DOMContentLoaded</text>
            <codeBlock>
                <code>当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载</code>
                <code>HTML被加载、解析完毕之后就触发， 可以访问到dom元素</code>
            </codeBlock>
        `
    },
    {
        type: 'renderPop',
        html: '页面输入一个URL之后，发生了什么',
        content: `
            <title>页面输入一个URL之后，发生了什么</title>
        `
    },
    {
        type: 'renderTitle',
        content: 'instanceof 原理'
    },
]

export default data