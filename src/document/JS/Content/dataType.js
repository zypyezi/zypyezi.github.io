import React, { Component } from 'react'


const arr1 = [
    {
        type: 'renderTitle',
        content: '七种内置类型'
    },
    {
        type: 'renderUl',
        content: [
            '基本类型 -  undefined 	 null	string 	number		boolean',
            '引用类型 -  object  传递的是引用地址',
            'es6 新增类型 - symbol  属于基本类型'
        ]
    },
    {
        type: 'renderPop',
        html: 'symbol',
        content: 
        ` 
        <title>symbol</title>

        <codeBlock>
            <code>let s = Symbol()</code>
            <code> let s2 = Symbol()</code>
            <code>s === s2  // false</code>
        </codeBlock>
    
        <codeBlock>
            <code>let s3 = Symbol('foo')</code>
            <code>s3.toString() // 'Symbol(foo)'</code>
            <code>s3.description // 'foo'   es2019</code>
        </codeBlock>
        <codeBlock>
            <code>let s1 = Symbol.for("bar")  // 全局登记</code>
            <code>let s2 = Symbol.for("bar")</code>
            <code>s1 === s2 // true</code>
            <code>Symbol.keyFor(s1) // "bar"</code>
        </codeBlock>
        
        
        <div>
         <p>1. 对象的属性名为字符串时， 容易造成属性名的冲突。es6引入Symbol的概念，使用Symbol生成的属性名是独一无二的</p>
         <p>2. Symbol 不是对象，是一个原始类型的值，不能使用new 命令</p>
         <p>3. 为了便于查看区分，可以传递参数 Symbol('foo') ; 也可以传递一个对象作为参数，此时会调用该对象的toString方法，转化为字符串再生成</p>
         <p>4. Symbol 不能和其他类型的值进行运算, 但是可以转化为布尔值， Boolean(s)  !s</p>
         <p>5. 使用Symbol 作为对象属性名时，不能使用点运算符</p>
         <p>6. Symbol 不会出现在for...in  for...of 循环中， 也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回，
         可通过 Object.getOwnPropertySymbols 获取，【非私有】
         Reflect.ownKeys 可以返回包含Symbol在内的所有健名</p>
    
        </div>
        `
    }
]

const arr2 = [
    {
        type: 'renderTitle',
        content: 'undefiend 和 null 的区别'
    },
    {
        type: 'renderSubTitle',
        content: 'null ---- 人为设置的空对象'
    },
    {
        type: 'renderHtml',
        content: `
            <codeBlock>
                <code>1、  Null 类型， 代表一个空对象指针【栈中的变量没有指向堆中的内存对象】</code>
                <code>
                    2、  判断类型方法 
                    <p>a.   typeof null == “object”</p>
                    <p>b.   Object.prototype.toString.call(null)  ==  [Object Null]</p>
                </code>
           
                <code>
                    3、  常见的几种null情况
            
                    <p>--   对象原型链的终点</p>
        
                    <p>--   当一个对象被赋值null之后，原来的对象在内存中就失去了指向，GC会择机回收该对象释放内存。</p>
        
                    <p>--   null有属于自己的类型Null，但是typeof之所以会被判定为Object.</p>
                    <p> 这是因为js数据类型在底层是以二进制形式存在的。二进制的前三位为0 会被typeof 判断为对象类型。而null的二进制恰好都是0，因为被误判为Object </p>    
                    <p>【000 - 对象】【100 - 字符串】 【110 - 布尔】</p>    
                        
                </code>
            </codeBlock>
        `
    },
    {
        type: 'renderSubTitle',
        content: 'undefined ---- 原始状态'
    },
    {
        type: 'renderHtml',
        content: `
            <codeBlock>
                <code>1、 undefined 类型，一个变量已被声明，但未初始化</code>
                <code>2、 typeof undefined == "undefined"</code>
           
                <code>
                    3、  常见的几种undefined情况
                    <p>--   访问对象上不存在的属性</p>
                    <p>--   定义形参，但是没有传递实参</p>
                    <p>--   void 操作符对任何表达式求值都返回undefined</p>
                </code>
            </codeBlock>
        `
    },
    {
        type: 'renderPop',
        html: 'Q',
        content: `
            <title>Q</title>
            <codeBlock>
                <code>null == undefined   </code>
                <code>// true    null 和undefiend 行为相似，都表示一个无效的值</code>
                <code>null === undefined            //  false      不属于同一种类型</code>
                <code>null >= 0                             //  true</code>
                <code>null == 0                            //  false</code>

            </codeBlock>
            
        `
    },
    {
        type: 'renderPop',
        html: '== 和 === 的区别',
        content: `
            <title>== 和 === 的区别</title>
            <div>这两个操作符都会先转换操作数【强制转型】，然后再进行相等性的判断</div>
            <div>字符串 & 数值 -- 将字符串转换为数值</div>
            <div>布尔值 &。 -- 将之转换为数值 0 和 1</div>
            <div>对象 & 非对象 -- 调用valueOf() 方法， 再按照之前的基本类型规则</div>
            <div>null 和 undefined 不能转换为其它任何值</div>
            <div>NaN 不等于NaN</div>
            <div>对象的比较 ： 如果两个操作数都指向同一个对象，则相等</div>
            <div>对象通过它们的引用（reference）进行比较。JavaScript 检查对象是否具有对内存中相同位置的引用</div>
            <div>{ age: 18 } == { age: 18 } // false</div>
        `
    },
    {
        type: 'renderPop',
        html: '关系运算符 和 相等运算符',
        content: `
            <title>关系运算符 和 相等运算符</title>
            <div>两者并不是同一类别的</div>
            <div>关系运算符需要尝试将运算元转为一个number</div>
            <codeBlock>
                <code>null > 0                       // true    null 尝试转型为number 则为0</code>
                <code>null == 0                   // false     在此处不允许被转型</code> 
            </codeBlock>
        `
    }
]


const arr3 = [
    {
        type: 'renderTitle',
        content: '判断类型的方式'
    },
]

const dataType = [
    ...arr1,
    ...arr2,
    ...arr3,
]


export default dataType