const demo1 = [
    {
        type: 'renderTitle',
        content: 'React Element VS React Component'
    },
    {
        type: 'renderHtml',
        content: `
            <text>Element 是一个纯对象</text>
            <text>Component数据结构是类或者纯对象，它根据输入参数，并最终返回一个React Element</text>
            <text>React 通过判断type是字符串还是函数来决定是Element还是Component</text>
        `
    },
    {
        type: 'renderJS',
        content: 
        `
    // <E /> 是一个语法糖， 相当于React.createElement(type, props, children)
    // 而React.createElement('p', {}, '')获得的是一个对象
    const E = <p>Wow</p>;
    render(){
        return (
            <div><E /></div>  //会报错
        )
    }
    
    render(){
        return (
            <div>{E}</div>  //不会报错
        )
    }


    render (){
        // children是一个React元素
        const Child = this.props.children
        // 这种方法是错误的， children是一个React元素， 不是组件
        return <div><Child /></div>
        // 以下的方法才是正确的
        return <div>{React.cloneElement(child, {tip: 'right!'})}</div>
    }
`
    },
]


const data = [
    ...demo1
]

export default data