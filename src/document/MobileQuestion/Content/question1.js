
const data = [
    {
        type: 'renderTitle',
        content: 'ios 输入框 设置line-height， 导致光标显示异常'
    },
    {
        type: 'renderHtml',
        content: `
        <text>调试时用的是安卓手机，由于安卓input输入框的光标没有ios那么明显，所以一直没有发现这个问题。
        产生原因 ： 为了保证标题 和 input 框中的文字垂直居中，使用了heigh和line-height，导致整个光标高度变成了输入框的高度。如果不小心将 input 的height 或者 line-height 设置了， 可能就会导致蓝色光标异常显示的情况。
        
        设计稿规则是 ： 左侧是标题，input框位于同一行，靠右侧边缘。
        思路是 ： 由于本来是输入框右浮动，想要垂直居中，就使用了line-height。 现在改变了思路，使整一行靠右显示，将标题设置为浮动，此时就不需要考虑输入框的居中问题了。
       </text>
        <codeBlock>
            <pre><code>
// 原代码
.label { }
.input{
	float : right ;
	height : 40px;
	line-height : 40px;
}

// 最终解决的方法是
.form-item{
	text-align : right
}
 .label { float : left }
.input{
	line-height:20px;
}
            </code></pre>
        </codeBlock>
        `
    },
]


export default data