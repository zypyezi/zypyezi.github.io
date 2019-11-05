const data = [
    {
        type: 'renderTitle',
        content: 'css  是否会阻止页面的解析和渲染'
    },
    {
        type: 'renderHtml',
        content: `
        <text>1. 页面的完整加载过程应该可以分为解析和渲染两部分</text>
        <text>2. 由于js 和 css 的解析过程其实是两个线程进行的， 所以页面执行到css时，css线程获取获取css资源并进行下载，不会阻塞页面js的执行和dom结构的解析。</text>
        <text>3. 但是由于页面渲染会依赖css，并且js也有可能影响页面的渲染，所以最终的渲染过程会等页面所有的资源加载完毕之后再执行，即css会影响页面的</text>
        `
    }
]



export default data