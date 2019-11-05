
 const data = [
    {
        type: 'renderTitle',
        content: '缓存'
    },
    {
        type: 'renderSubTitle',
        content: '页面的缓存可以分为两种：'
    },
    {
        type: 'renderHtml',
        content: `
        <text>1. 强制缓存 </text>
        <text>    -- 即每次进页面都会强制重新获取资源文件</text>
        <text>    -- http请求的cache-control字段，可以设置public和max-size， 表明在某一段时间内可以使用本地资源不去请求服务器</text>
        <text>    -- 这种方式如果出现一段时间内资源被更新的情况， 那就会导致用户看到的仍是旧的资源，并且如果接口已被同步更新，可能就会出现报错</text>
        <text>2. 协商缓存</text>
        <text>    -- 每次读取资源文件时，会像浏览器发送请求，询问是否可以使用本地缓存</text>
        <text>    -- 这种方式不能很好的利用缓存策略， 浪费较多的资源</text>
        `
    },
    {
        type: 'renderSubTitle',
        content: '最佳实践'
    },
    {
        type: 'renderHtml',
        content: `
        <text> 最佳的实践方式就是尽可能的使用强缓存，但是能在版本更新的时候让原有缓存失效。</text>
        <text> 所以我们使用这种方式： html资源使用协商缓存， js和css资源使用强缓存，并且会带上hash值。每次更新版本时， 会修改静态资源的路径</text>
        `
    },
    {
        type: 'renderSubTitle',
        content: '后端设置'
    },
    {
        type: 'renderHtml',
        content: `
        <text>    协商缓存： res.setHeader('Cache-Control', 'public, max-age=xxx')</text>
        <text>    强缓存：   </text>
        <text>    res.setHeader('Cache-Control', 'public, max-age=0')</text>
        <text>    res.setHeader('Last-Modified', xxx)</text>
        <text>    res.setHeader('ETag', xxx)</text></text>
        `
    },

]


export default data