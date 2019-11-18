const data = [
    {
        type: 'renderTitle',
        content: 'css3 新增属性'
    },
    {
        type: 'renderSubTitle',
        content: '一. css3新增了很多选择器， 解决了很多需要js才能解决的布局问题'
    },
    {
        type: 'renderHtml',
        content: `
        <codeBlock>
        
        </codeBlock>
        `
    },
    {
        type: 'renderSubTitle',
        content: '二. @font-size 加载字体样式，允许进行自定义字体的载入'
    },
    {
        type: 'renderSubTitle',
        content: '其他属性'
    },
    {
        type: 'renderHtml',
        content: `
        <codeBlock>
            <code>1. word-wrap : </code>
        </codeBlock>
        `
    },
    {
        type: 'renderPop',
        html: 'word-wrap vs  white-space vs word-break',
        content: `
            <title>word-wrap vs  white-space vs word-break</title>
            <text>word-wrap -- 控制单词如何被拆分换行的</text>
            <codeBlock>
                <code>1) normal </code>
                <code>2) break-word  只有当一个单词一整行都显示不下时，才会拆分换行该单词</code>
            </codeBlock>
             <text>white-space -- 控制空白字符的显示</text>
            <codeBlock>
                <code>1) normal </code>
                <code>2) nowrap 不仅空格被合并，换行符无效，连原本的自动换行都没了！只有br标签才能导致换行</code>
                <code>3) pre 空格和换行符全都被保留了下来，不过自动换行还是没了</code>
                <code>4) pre-wrap 保留空格和换行符，且可以自动换行</code>
                <code>5) pre-line 空格被合并了，但是换行符可以发挥作用</code>
                <code>总结： </code>
                <code>1. normal 是默认值，只保留自动换行和br标签， nbsp;标签</code>
                <code>2. pre-wrap， 空格、换行符、自动换行都保留。pre-line相比较于pre-wrap，合并了空格。pre相比较于pre-wrap，失去了自动换行。</code>
                <code>3. nowrap只保留br和nbsp;标签</code>
            </codeBlock>
             <text>word-break -  控制单词如何被拆分换行</text>
            <codeBlock>
                <code>1) normal </code>
                <code>2) break-all  所有单词碰到边界一律拆分换行</code>
                <code>3) keep-all  所有“单词”一律不拆分换行， 只有空格可以触发自动换行</code>
                <code>4) break-word 效果跟word-wrap:break-word一样，然而只有Chrome、Safari等部分浏览器支持</code>
            </codeBlock>
            
        `
    },
]



export default data
