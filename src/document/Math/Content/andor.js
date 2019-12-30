const data = [
    {
        type: 'renderTitle',
        content: '与或非'
    },
    {
        type: 'renderText',
        content: '偶然在掘金上看到一篇文章， 讲述了如何简化js中的与或非的逻辑，有所感悟。这的确不就是一道数学题吗?'
    },
    {
        type: 'renderText',
        content: '虽然并不一定很实用，但我觉得这是一种思路问题， 多种思路多种解决方式。在实际业务中，因为追求代码简化，抛弃了原来的判断逻辑，可能会适得其反，因为后面维护的人就无法得知他的逻辑究竟是什么。所以一切从实际需求出发。'
    },
    {
        type: 'renderText',
        content: '下面是一个举例，经过数学的处理，可以很完美的解释数学的魅力'
    },
    {
        type: 'renderJS',
        content: 'a && d || b && c && !d || (!a || !b) && c'
    },
    {
        type: 'renderHtml',
        content: `
        <text>上面的代码转化为数学原理，其实就是布尔代数， 大学基本都学过。</text>
        <text>根据以下等价关系：</text>
        <text>a && d  =>  AB</text>
        <text>a || b =>  A + B</text>
        <text>!a => <span class="td-o">A</span></text>
        <text>可以转化为以下的数学题</text>
        <text>AD + BC<span class="td-o">D</span> + (<span class="td-o">A</span> + <span class="td-o">B</span>)C</text>
        `
    },
    {
        type: 'renderText',
        content: '接下去的问题就转化成了如何简化这一个数学公式。布尔代数有几个基本公式'
    },
    {
        type: 'renderHtml',
        content: `
        <text>1. A + A = A, A + <span class="td-o">A</span> = 1</text>
        <text>2. AB + A<span class="td-o">B</span> = 1</text>
        <text>3. A + AB = A</text>
        <text>4. <span class="td-o">A</span> + <span class="td-o">B</span> = <span class="td-o">AB</span> , <span class="td-o">A</span><span class="td-o">B</span> = <span class="td-o">A+B</span></text>
        <text>5. AB + <span class="td-o">A</span>C= AB + <span class="td-o">A</span>C + BC  </text>
        `
    },
    {
        type: 'renderHtml',
        content: `
        <text>原始式子：AD + BC<span class="td-o">D</span> + (<span class="td-o">A</span> + <span class="td-o">B</span>)C， 依次转化如下</text>
        <text>=> 利用公式4   AD + BC<span class="td-o">D</span> + <span class="td-o">AB</span>C </text>
        <text>=> 利用公式5   AD + BC<span class="td-o">D</span> + ABC +<span class="td-o">AB</span>C</text>
        <text>=> 利用公式2   AD + BC<span class="td-o">D</span> + C </text>
        <text>=> 利用公式2   AD + C </text>
        `
    },
    {
        type: 'renderText',
        content: '至此，转化完毕，简洁的代码出现了'
    },
    {
        type: 'renderHtml',
        content:   `

        
         参考文章： <a href="https://juejin.im/post/5e078eede51d45583a66d1e0">https://juejin.im/post/5e078eede51d45583a66d1e0</a>
        `
    }
]



export default data