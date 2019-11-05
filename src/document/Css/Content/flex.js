const data = [
    {
        type: 'renderTitle',
        content: 'flexbox'
    },
    {
        type: 'renderSubTitle',
        content: 'flex 究竟解决了什么问题？'
    },
    {
        type: 'renderHtml',
        content: `
            <text>1. flex 可以很好的进行自适应几栏布局</text>
            <text>2. flex 可以很好的进行对齐居中操作</text>
            <text>2. flex 很适合响应式布局。不用设置固定的宽高。并且通过设置元素的排列顺序，可以减少后期修改代码的成本。</text>
            <text>flex 使用更为简洁的栅格系统。以往我们都是使用浮动 或者内联 来实现相关的布局，但是会牵扯出其他的一些问题。
            而使用flex布局则不会有这些影响。</text>
            <text>我们</text>
        `
    },
    {
        type: 'renderPop',
        html: '清除浮动带来的影响',
        content: `
        <title>清除浮动带来的影响</title>
        <text>1.  清除一个元素的浮动有时会强制它出现在一个不相关的页面部分的下边</text>
        <text>2. 清除浮动会使用到before 和 after两个伪元素，导致不能将伪元素用于其它用途</text>
        `
    },
    {
        type: 'renderPop',
        html: '使用内联产生的影响',
        content: `
        <title>使用内联产生的影响</title>
        <text>1.  内联间的空白问题</text>
        <codeBlock>
            <code>方法1:</code>
            <code><li>1</li </code>
            <code>/</code>
            <code>方法2:</code>
            <code><li>1</li><!-- </code>
            <code>--!><li>2</li></code>
            <code>方法3:</code>
            <code><li> </code>
            <code>1</li><li></code>
            <code>2</li></code>
            <code>方法4:</code>
            <code><li>1 </code>
            <code><li>2</code>
            <code>方法5:</code>
            <code>设置font-size为0</code>
            <code>方法6:</code>
            <code>设置负的margin值</code>
            <code>方法7:</code>
            <code>使用flex布局</code>
            <code>方法8:</code>
            <code>使用float布局</code>
        </codeBlock>
        `
    },
    {
        type: 'renderSubTitle',
        content: 'flex 常见实践'
    },
    {
        type: 'renderUl',
        content: [
            '输入附加组件',
            '粘性页脚',
            '垂直居中'
        ]
    }, 
    {
        type: 'renderSubTitle',
        content: 'flex 基础属性'
    },
]