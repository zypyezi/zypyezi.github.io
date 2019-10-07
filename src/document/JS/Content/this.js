

const Data = [
    {
        type: 'renderTitle',
        content: 'this'
    },
    {
        type: 'renderHtml',
        content: `
            <text>javascript 中的this指向， 是在函数被调用时确定的， 而不是在函数定义时确定的。
            函数的调用方式决定了this的指向，要判断this指向需要确定this的真正调用者【这句话很重要！！！】</text>
        `
    },
    {
        type: 'renderSubTitle',
        content: '常见的几种调用方式'
    },
    {
        type : 'renderHtml',
        content:   `
            <codeBlock>
                <code>1. 直接调用  ： func(arg1, arg2)  等价于func.call(undefined, arg1, arg2)</code>
                <code>2. 方法调用【隐式绑定】  ： obj.func(arg1, arg2)     </code> 
                <li> 等价于 obj.func.call(obj, arg1, arg2)   直接点号调用， 调用者就是obj</li>
                <code>3. 显式绑定  ： func.call(obj, arg1, arg2)   //直接绑定修改func内部this指向</code>
            </codeBlock>
            <text>以上三种方式 其实都可以总结为一种方式  func.call(context, arg1, arg2), this其实本质就是context 的内容</text>
            <text>直接调用方式，此时this相当于undefiend， 但是在非严格模式下，此时会指向window</text>
            <text>使用bind 其实本质也是使用了call</text>
        `
    },
    {
        type: 'renderJS',
        content: `使用数组的形式：

        function fn (){ console.log(this) }
        var arr = [fn, fn2]
        arr[0]()  // this 指向arr

使用对象形式：    
        var obj = {
            foo : function(){ console.log(this.bar) },
            bar : 1
          }
          
          var foo = obj.foo
          var bar = 2
          
          obj.foo()  // 1 。 属于方法调用模式
          foo()     //2  属于直接调用模式

EventHandler ：
        btn.addEventListener('click', function handler(){
            console.log(this) 
        })
        // 当使用 addEventListener() 为一个元素注册事件的时候，
        // 句柄里的 this 值是该元素的引用。其与传递给句柄的 event 参数的 currentTarget 属性的值一样。
        // 相当于 handler.call(event.currentTarget, event) 
        // 注意一些封装的事件 需要去看实际实现源码才能确定this指向， 或者直接console 就更快啦
        `
    }, 
    {
        type : 'renderHtml',
        content:   `
            <codeBlock>
                <code>4. 使用new创建</code>
                <code> </code> 
                <code></code>
            </codeBlock>
        `
    },
    {
        type: 'renderPop',
        html: 'new 一个实例的时候，发生了什么',
        content: `
            <title>new 一个实例的时候，发生了什么</title>
            <codeBlock>
                <code>1）创建空对象</code>
                <code>2）添加实例对象的__proto__,  指向函数对象原型 Foo.prototype</code>
                <code>3）将this绑定至实例对象</code>
                <code>4）new 的结果是由构造函数返回的对象</code>
            </codeBlock>
            <text>简单实现</text>
            <codeBlock>
                <pre ><code className="language-javascript">
    function Foo ( name ){
        this.name = name
    }
    
    
    new Foo = {
        let obj = {}
        obj.__proto__ = Foo.prototype
        var result =  Foo.call(obj,”name”);
        return 
            typeof  result ===‘object’  
            ?  result  
            :  obj
    }
                </code></pre>
            </codeBlock>

            <text>Demo</text>
        <codeBlock>
            <pre><code className="language-javascript">
    function Foo(){
        getName = function(){
            console.log(1)
        }
        return this;
    }
    Foo.getName = function(){
        console.log(2)
    }
    Foo.prototype.getName = function(){
        console.log(3)
    }
    var getName = function(){
        console.log(4)
    }
    function getName(){
        console.log(5)
    }
    
    
    // ouput:
    Foo.getName();
    getName();
    Foo().getName();
    getName();
    new Foo.getName();
    new Foo().getName();
    new new Foo().getName();
    
    
    分析 ：
        1. Foo.getName();
        --  直接调用Foo.getName方法， 输出 2
    
        2. getName();
        --  定义过程中，getName函数实际上被定义了两次[变量提升]。相当于依次执行
        --  function getName() { console.log(5) }
        --  var getName
        --  getName = function(){ console.log(4) }
        --  输出 4
    
        3. Foo().getName();
        -- 执行Foo()  得到指向Foo的this指针
        -- Foo().getName == function(){ console.log(1) }
        -- 输出 1
    
        4. getName();
        -- 经过第三步骤的执行后，由于Foo函数内部的getName变量前面并没有var， 
        -- 所以实际上是再次修改了全局变量getName
        -- 输出  1
        -- 【若 getName 前面由var， 则该答案仍然是 4 】
        
        5. new Foo.getName();
        --  var Func = Foo.getName()  ==> ƒ (){console.log(2)}
        --  new Func  ==>  
        --  输出  2
        
        6. new Foo().getName();
        --  var a = new Foo()  ==>  创建Foo实例
        --  a.getName ==>  a实例上无getName方法，沿着原型链往上查找， 最终取到Foo.prototype.getName
        --  输出  3
        --  【Foo.getName， 定义的是Foo的静态方法，无法被实例继承】
        
        7. new new Foo().getName();
        -- var a = new Foo()  ==>  创建Foo实例
        -- var Func = a.getName()  ==>  ƒ (){console.log(3)}
        -- new Func
        -- 输出 3
            </code></pre>
        </codeBlock>
        `
    },
    {
        type : 'renderHtml',
        content:   `
            <codeBlock>
                <code>5. 箭头函数</code>
                <code> 箭头函数在自己的作用域内不绑定 this。如果要使用 this ，就会指向定义时所在的作用域的 this 值。之前的this指向需要根据实际调用者进行判断， 现在使用箭头函数就可以直接根据定义时所在的作用域来判断，更方便简明</code> 
                <code> 即使使用bind、call方法修改仍然不会有影响</code>
            </codeBlock>
        `
    },
    {
        type: 'renderSubTitle',
        content: 'this指向当前函数运行的环境'
    },
    {
        type: 'renderJS',
        content: `Eg1 : 
        var obj = { foo : 1 }
      
      // js引擎先在内存里面生成一个对象 { foo : 1 }
      // 把这个对象的内存地址赋值给变量obj
      /**
        * -- 读取obj.foo
        *   1. 从obj拿到内存地址
        *   2. 从该地址读出原始的对象    
        *   3. 返回原始对象的foo属性
     **/
        {
          foo : {
              [[value]] : 1,
              [[writable]]: true,     // 可写入
              [[enumerable]]:true,    // 可枚举
              [[configurable]]:true   // 可修改属性、删除
          }
        }
    `
    },
    {
        type: 'renderJS',
        content: ` Eg2 :
        var obj = { foo : function () {} } 
        
       // 引擎将函数单独保存在内存中，将函数地址赋给foo属性的value值
       // 由于函数是单独存储的，所以可以有不同的运行环境 ==>  this的引出， 指代函数当前运行环境
       {
          foo : {
              [[value]] : 函数内存地址,
              [[writable]]: true,     // 可写入
              [[enumerable]]:true,    // 可枚举
              [[configurable]]:true   // 可修改属性、删除
          }
        }
      `
    },
    {
        type: 'renderPop',
        html: 'bind pollfill实现',
        content: `
        <codeBlock>
        <pre ><code className="language-javascript">
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this, // this在这里指向的是目标函数
      fBound = function () {
        return fToBind.apply(
        // 如果外部执行var obj = new fBound(),则将obj作为最终的this，放弃使用oThis
          this instanceof fToBind
            ? this  // 此时的this就是new出的obj
            : oThis || this, // 如果传递的oThis无效，就将fBound的调用者作为this

            / 将通过bind传递的参数和调用时传递的参数进行合并，并作为最终的参数传递
          aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    // 将目标函数的原型对象拷贝到新函数中，因为目标函数有可能被当作构造函数使用
      fBound.prototype = this.prototype;

    / 返回fBond的引用，由外部按需调用
   return fBound;
  };
}
        </code></pre>
        </codeBlock>
        `
    },
    {
        type: 'renderPop',
        html: '《js高级程序设计》里对作用域的解释',
        content: `
            <title>《js高级程序设计》里对作用域的解释</title>
            <codeBlock>
                <code>引言：作用域对于很多概念的理解有很重要的作用，所以放在开头  </code>
            </codeBlock>
            <codeBlock>
                <title>一、</title>
                <code>执行环境   --  定义了变量或函数有权访问的其他数据</code>
                <code>变量对象 VO  --  保存的是环境中定义的所有变量和函数</code>
                <code>全局执行环境  --  最外围的执行环境。根据宿主环境，有不同的全局执行环境</code>
                <code>web浏览器  ---  window对象</code>
                <code>VO销毁时机  ---   执行环境中的代码执行完毕后，环境被销毁，变量对象那个随之销毁</code>
                <code>每个函数都有自己的执行环境。执行函数时，函数的环境就会被推入一个环境栈，执行完毕推出栈</code>
                </code>
            </codeBlock>
            <codeBlock>
                <title>二、</title>
                <code>作用域链  --  保证对执行环境内的变量对象的有序访问</code>
                <code>作用域链的最前端永远是当前执行的函数所在环境的变量对象</code>
                <code>作用域链逐级往下一个包含环境寻找，直至全局执行环境</code>
                <code>只有作用域链上存在的变量才可以正常访问到</code>
                </code>
            </codeBlock>
            <codeBlock>
                <title>三、</title>
                <code>活动对象  --  当前正在执行的函数的变量对象</code>
                <code>和VO其实是一样的对象，但是是不同时间段出现的</code>
                <code>最开始只包含一个变量，即arguments对象【全局环境不存在】</code>
                </code>
            </codeBlock>
            <codeBlock>
                <title>四、</title>
                <code>延长作用域链  --   在作用域链的前端临时增加一个变量对象</code>
                <code>with  将指定的对象添加到作用域链中</code>
                <code>catch  创建一个新的变量【被抛出的错误对象】</code>
                </code>
            </codeBlock>
            
        `
    },
    {
        type: 'renderPop',
        html: '执行上下文（Execution Context = 【VO, ScopeChain）',
        content: `
            <title>执行上下文</title>

            <p>函数调用栈 （call stack） -- 栈底永远是全局上下文，栈顶是当前正在执行的上下文。全局上下文在浏览器关闭后出栈</p>
            <h3># 生命周期</h3>

                <h4>创建阶段</h4>
                <ul>
                    <li>1.创建变量对象</li>
                    <codeBlock>
                        <code>arguments对象</code>
                        <code>函数声明 -- 根据函数名创建一个属性，属性值指向该函数的内存地址。同名函数会被覆盖优先级高于变量声明</code>
                        <code>变量声明 -- 根据变量名创建一个属性，值为undefined。</code>
                        <code> a.若同名变量已存在，为了防止同名函数被修改，会跳过该操作</code>
                        <code> b.注意为var声明的变量当遇到同名的属性时，会跳过而不会覆盖</code>
                        <code> c.es6中的let情况有所不同</code>
                    </codeBlock>
                    <codeBlock>
                        <code>VO = {</code>
                        <code> arguments: {...}, </code>
                        <code> foo: <foo reference>  // 表示foo的地址引用</code>
                        <code> a: undefined</code>
                        <code>}</code>
                    </codeBlock>
                    <li>2.生成作用域链</li>
                    <codeBlock>
                        <code>全局作用域和函数作用域</code>
                        <code>由当前环境与上层环境的一系列变量对象组成，它保证了当前执行环境对符合访问权限的变量和函数的有序访问</code>
                    </codeBlock>
                    <li>3.确定this指向</li>
                    <codeBlock>
                        <code>.如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的this指向该对象。</code>
                        <code>.如果函数独立调用，那么该函数内部的this，则指向undefined</code>
                        <code>.在非严格模式中，当this指向undefined时，它会被自动指向全局对象</code>
                        <code>.{}不会形成作用域</code>
                        <code>.匿名函数，this指向全局</code>
                    </codeBlock>
                </ul>
                <code></code>
                <h4>执行阶段</h4>
                <ul>
                    <codeBlock>
                        <code>// 执行阶段</code>
                        <code>VO ->  AO   // Active Object</code>
                        <code>// 变量对象和活动对象是处于执行上下文的不同生命周期的同一个对象</code>
                        <code>AO = {</code>
                            <code>arguments: {...},</code>
                            <code>foo: <foo reference>,</code>
                            <code> a: 1,</code>
                            <code>this: Window</code>
                            <code>}</code>
                    </codeBlock>
                    <li>1.变量复制</li>
                    <li>2.函数引用</li>
                    <li>3.执行其他代码</li>
                </ul>
        
        `
    }
    
   
]

export default Data