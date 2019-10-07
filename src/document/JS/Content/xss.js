const Data = [
    {
        type: 'renderTitle',
        content: '网络攻击'
    },
    {
        type: 'renderSubTitle',
        content: '一、xss攻击'
    },
    {
        type: 'renderHtml',
        content: `
            <text>XSS(Cross-Site Scripting，跨站脚本攻击)是一种代码注入攻击。攻击者在目标网站上注入恶意代码，当被攻击者登陆网站时就会执行这些恶意代码，这些脚本可以读取 cookie，session tokens，或者其它敏感的网站信息，对用户进行钓鱼欺诈，甚至发起蠕虫攻击等</text>
            <text>
                <ul>
                    <li>1. 存储型(持久性)</li>
                    <p>恶意脚本永久存储在目标服务器上。当浏览器请求数据时，脚本从服务器传回并执行，影响范围比反射型和DOM型XSS更大。存储型XSS攻击的原因仍然是没有做好数据过滤：前端提交数据至服务端时，没有做好过滤；服务端在接受到数据时，在存储之前，没有做过滤；前端从服务端请求到数据，没有过滤输出</p>
                    <codeBlock>
                        <text>攻击步骤</text>
                        <code>1.攻击者将恶意代码提交到目标网站的数据库中。</code>
                        <code>2.用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。</code>
                        <code>3.用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。</code>
                        <code>4.恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</code>
                    </codeBlock>
                    <codeBlock>
                        <text>防御措施</text>
                        <code>1.前端数据传递给服务器之前，先转义/过滤(防范不了抓包修改数据的情况)</code>
                        <code>2.服务器接收到数据，在存储到数据库之前，进行转义/过滤</code>
                        <code>3.前端接收到服务器传递过来的数据，在展示到页面前，先进行转义/过滤</code>
                    </codeBlock>
                </ul>
            </text>
            <text>
                <ul>
                    <li>2.反射型(非持久型)</li>
                    <codeBlock>
                        <text>攻击步骤</text>
                        <code>1.攻击者构造出特殊的 URL，其中包含恶 意代码。</code>
                        <code>2.用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。</code>
                        <code>3.用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。</code>
                        <code>4.恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作</code>
                    </codeBlock>
                    <codeBlock>
                        <text>防御措施</text>
                        <code>1.后端可以设置 httpOnly</code>
                        <code>2.对url的查询参数进行转义后再输出到页面</code>
                    </codeBlock>
                </ul>
            </text>
            <text>
                <ul>
                    <li>3.DOM型</li>
                    <codeBlock>
                        <text>攻击步骤</text>
                        <code>1.攻击者构造出特殊数据，其中包含恶意代码。</code>
                        <code>2.用户浏览器执行了恶意代码。</code>
                        <code>3.恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</code>
                    </codeBlock>
                    <codeBlock>
                        <text>防御措施</text>
                        <code>1.防范 DOM 型 XSS 攻击的核心就是对输入内容进行转义(DOM 中的内联事件监听器和链接跳转都能把字符串作为代码运行，需要对其内容进行检查)</code>
                    </codeBlock>
                </ul>
            </text>

            <text>其他措施:</text>
            <text>1.服务端使用 HTTP的 Content-Security-Policy 头部来指定策略，或者在前端设置 meta 标签
            <text>2.输入内容长度和内容限制</text>
            <text>3.HTTP-only Cookie: 禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。</text>
           
        `
    },
    {
        type: 'renderSubTitle',
        content: '二、csrf攻击'
    },
    {
        type: 'renderHtml',
        content: `
            <codeBlock>
                <text>攻击流程</text>
                <code>1.受害者登录A站点，并保留了登录凭证（Cookie）。</code>
                <code>2.攻击者诱导受害者访问了站点B。</code>
                <code>3.站点B向站点A发送了一个请求，浏览器会默认携带站点A的Cookie信息。</code>
                <code>4.站点A接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是无辜的受害者发送的请求。</code>
                <code>5.站点A以受害者的名义执行了站点B的请求。</code>
                <code>6.攻击完成，攻击者在受害者不知情的情况下，冒充受害者完成了攻击。</code>
            </codeBlock>
            <codeBlock>
                <text>防御措施</text>
                <code>1. 添加验证码(体验不好)验证码能够防御CSRF攻击，但是我们不可能每一次交互都需要验证码，否则用户的体验会非常差，但是我们可以在转账，交易等操作时，增加验证码，确保我们的账户安全。</code>
                <code>2. 判断请求的来源：检测Referer(并不安全，Referer可以被更改)  Referer 可以作为一种辅助手段，来判断请求的来源是否是安全的，但是鉴于 Referer 本身是可以被修改的，因为不能仅依赖于Referer</code>
                <code>3. 使用Token(主流)
                CSRF攻击之所以能够成功，是因为服务器误把攻击者发送的请求当成了用户自己的请求。那么我们可以要求所有的用户请求都携带一个CSRF攻击者无法获取到的Token。服务器通过校验请求是否携带正确的Token，来把正常的请求和攻击的请求区分开。跟验证码类似，只是用户无感知。</code>
                <code>- 服务端给用户生成一个token，加密后传递给用户</code>
                <code>- 用户在提交请求时，需要携带这个token</code>
                <code>- 服务端验证token是否正确</code>
                <code>4. Samesite Cookie属性</code>
                为了从源头上解决这个问题，Google起草了一份草案来改进HTTP协议，为Set-Cookie响应头新增Samesite属性，它用来标明这个 Cookie是个“同站 Cookie”，同站Cookie只能作为第一方Cookie，不能作为第三方Cookie，Samesite 有两个属性值，分别是 Strict 和 Lax。
            </codeBlock>
        `
    },
    {
        type: 'renderSubTitle',
        content: '三、点击劫持'
    },
    {
        type: 'renderHtml',
        content: `
            <text>一个Web页面中隐藏了一个透明的iframe，用外层假页面诱导用户点击，实际上是在隐藏的frame上触发了点击事件进行一些用户不知情的操作</text>
            <codeBlock>
                <text>攻击流程</text>
                <code>1.攻击者构建了一个网页</code>
                <code>2.将被攻击的页面放置在当前页面的 iframe 中</code>
                <code>3.使用样式将 iframe 叠加到内容的上方</code>
                <code>4.将iframe设置为100%透明</code>
                <code>5.你被诱导点击了网页内容，你以为你点击的是***，而实际上，你成功被攻击了</code>
            </codeBlock>
            <codeBlock>
                <text>防御</text>
                <code>1.frame busting
                <pre><code>
    if ( top.location != window.location ){
        top.location = window.location
    }
                    </code>
                </pre>
                <code>
                需要注意的是: HTML5中iframe的 sandbox 属性、IE中iframe的security 属性等，都可以限制iframe页面中的JavaScript脚本执行，从而可以使得 frame busting 失效。
                </code>
                <code>2. X-Frame-Options</code>
                <code>X-FRAME-OPTIONS是微软提出的一个http头，专门用来防御利用iframe嵌套的点击劫持攻击。并且在IE8、Firefox3.6、Chrome4以上的版本均能很好的支持。</code>
                <code>可以设置为以下值:</code>
                <code>DENY: 拒绝任何域加载</code>
                <code>SAMEORIGIN: 允许同源域下加载</code>
                <code>ALLOW-FROM: 可以定义允许frame加载的页面地址</code>
                </code>
            </codeBlock>
        `
    }
]

export default Data