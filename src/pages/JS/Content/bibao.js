import React, { Component } from 'react'


const bibao = [
    {
        type: 'renderTitle',
        content: '闭包'
    },
    {
        type: 'renderUl',
        content: [
            '简单类型 -  undefined 	 null		string 	number		boolean',
            '复杂类型 -  object',
            'es6 新增类型 - symbol'
        ]
    },
    {
        type: 'renderJS',
        content: 
        `symbol

        let s = Symbol()
        let s2 = Symbol()
        s === s2  // false
        
        let s3 = Symbol('foo')
        s3.toString() // 'Symbol(foo)'
        s3.description // 'foo'   es2019
        
        let s1 = Symbol.for("bar")  // 全局登记
        let s2 = Symbol.for("bar")
        s1 === s2 // true
        Symbol.keyFor(s1) // "bar"
        
         1. 对象的属性名为字符串时， 容易造成属性名的冲突。es6引入Symbol的概念，使用Symbol生成的属性名是独一无二的
         2. Symbol 不是对象，是一个原始类型的值，不能使用new 命令
         3. 为了便于查看区分，可以传递参数 Symbol('foo') ; 也可以传递一个对象作为参数，此时会调用该对象的toString方法，转化为字符串再生成
         4. Symbol 不能和其他类型的值进行运算, 但是可以转化为布尔值， Boolean(s)  !s
         5. 使用Symbol 作为对象属性名时，不能使用点运算符
         6. Symbol 不会出现在for...in  for...of 循环中， 也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回，
             可通过 Object.getOwnPropertySymbols 获取，【非私有】
             Reflect.ownKeys 可以返回包含Symbol在内的所有健名
        
        `
    }
]


export default bibao