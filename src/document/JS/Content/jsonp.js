const data = [
    {
        type: 'renderTitle',
        content: 'jsonp'
    },
    {
        type: 'renderSubTitle',
        content: '什么是跨域'
    },
    {
        type: 'renderHtml',
        content: `
        <text>跨域是由于浏览器的同源策略导致的。</text>
        <text>浏览器存在同源策略，该策略是为了保护用户信息的安全，防止恶意的网站窃取数据</text>
        <text>最常见的，如果没有同源策略，那么不同网站之间的cookie信息可以随意被获取，就会导致关键信息的泄漏，并且被盗取账号</text>
        <text>非同源将禁止获取cookie、localStorage、indexedDB， 禁止访问DOM， 禁止发送ajax请求 （请求可以发送，但是浏览器拒绝接受响应）</text>
        `
    },
    {
        type: 'renderSubTitle',
        content: '为什么要有跨域'
    },
    {
        type: 'renderHtml',
        content: `
        <text>ajax的同源策略主要是为了防止CSRF攻击。</text>
        <text>因为我们每一次发起HTTP请求，都会带上相应的cookie</text>
        <text>DOM的同源策略同理。iframe如果可以跨域访问也会导致攻击</text>
        `
    },
    {
        type: 'renderSubTitle',
        content: 'CORS（跨域资源共享）'
    },
    {
        type: 'renderHtml',
        content: `
        <text>实现CORS通信的关键是服务器，只要服务器实现了CORS接口，就可以跨域通信</text>
        <text>
        CORS跨域的判定标准：</text>
        <text>1. 浏览器根据同源策略对前端页面和后台交互地址做匹配，若同源，则直接发送数据请求；若不同源，则发送跨域请求</text>
        <text>2. 服务器收到浏览器跨域请求后，根据自身配置返回对应头文件。若未配置过任何允许跨域，则文件头不包含Access-Control-Allow-origin字段。若配置过域名，则返回Access-Control-Allow-origin + 对应配置规则里的域名方式</text>
        <text>3. 浏览器根据接收到的响应头的Access-Control-Allow-origin 字段做匹配，若无该字段则说明不允许跨域，会抛出错误。若有该字段则进行当前域名匹配。</text>
        <text>以上两种方式是不同的，一者是服务器允许跨域请求，但是origin指定的源不在许可范围内。一者是服务器不允许任何跨域请求</text>
        
        `
    },
    {
        type: 'renderSubTitle',
        content: '简单请求和非简单请求'
    },
    {
        type: 'renderHtml',
        content: `
        <text>简单请求：</text>
        <text>非简单请求：</text>
        `
    },
    {
        type: 'renderSubTitle',
        content: '原理'
    },
    {
        type: 'renderHtml',
        content: `
        <text>核心是动态添加script标签来调用服务器提供的js脚本</text>
        <text>我们知道script标签可以跨域访问资源，是不存在访问限制的。jsonp其实就是利用了这一原理。我们在页面上构造一个script标签，
        将需要访问的接口名字作为src参数传入，就可以访问到该接口。但是后续的交互需要后端的配合。我们需要在拼接的url后面跟上callback回调函数。
        后端经过处理，识别到是跨域请求后，会返回一个执行callback回调的js代码，并且参数为返回的json</text>
        <text>jquery的jsonp方法，其实就是对原生的jsonp进行了一层封装，方便我们可以像使用一般的get请求一样进行jsonp的处理</text>
        <text>axios不支持jsonp的请求</text>
        `
    },
    {
        type: 'renderSubTitle',
        content: '原生代码示例'
    },
    {
        type: 'renderJS',
        content: `
    const jsonP = (url, data={}, callback, removeCookieFromUrl) =>{

        window[callback.name] = callback.fn
        let fullUrl = url + '?callback=' + callback.name
        if(!removeCookieFromUrl){
            let cookieArr = document.cookie.split(';')
            for (let i = 0; i < cookieArr.length; i++) {
            let nv = cookieArr[i].split('=')
            data[nv[0].replace(/(^\s*)|(\s*$)/g, '')] = nv[1]
            }
        }
    
        for (let i in data) {
            fullUrl += '&' + i + '=' + data[i]
        }
    
        let script = document.createElement('script')
        script.src = fullUrl
    
        document.getElementsByTagName('head')[0].appendChild(script)
    
    }
    
        `
    }
]


export default data