
const data = [
    {
        type: 'renderTitle',
        content: 'v-model更多用法'
    },
    {
        type: 'renderHtml',
        content: `
        <text>灵活使用v-model可以减少很多代码量，一般不需要进行格式化处理的数据都可以使用v-model</text>
        <text>常见的几种 input、radio、checkbox见下方的demo1</text>
        <text>demo2 主要是想记录一下 v-model 在组件上的用法。是的，它还可以作用在组件上</text>
        `
    },
    {
        type : 'renderJS',
        content: `
demo1 : 常见的几种v-model用法

<template>
    <div>
        <div>
            <input v-model="msg" placeholder="input message">
            <p>Msg: {{ msg }}</p>
        </div>
       
        <div>
            <input type="radio" value="msg1" v-model="msg1">
            <input type="radio" value="msg2" v-model="msg1">
            <p>data: {{ msg1 }}</p>
        </div>
        
        <div>
            <input type="checkbox" value="check" v-model="isChecked" true-value="1" false-value="0"> 
            <p>checked: {{ isChecked }}</p>
        </div>

        <div>
            <input type="checkbox" value="c1" v-model="vals">
            <input type="checkbox" value="c2" v-model="vals">
            <input type="checkbox" value="c3" v-model="vals">
            <p>checked: {{ vals }}</p>
        </div>

        <div @click="showData">查看数据</div>
    </div>
</template>

<script>
 export default {
  name: 'v-model' ,
  data(){
      return{
        baseValue: '33',
        checkValue: true,
        msg: '',
        msg1: false,
        isChecked: 1,
        vals: []
      }
  },
  created(){

  },
  methods: {
    showData (){
    }  
}
}
</script>
        `
    },
    {
        type: 'renderJS',
        content:   `
1. 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件
  |-- 因为v-model 只是一个语法糖
  |-- 任意组件都可以使用该方法，直接使用默认的input 事件 和 value props 值

  \`\`\`
  <base-model :value="baseValue" @input="parentValue = arguments[0]"></base-model>
  
  \`\`\`
2. 当 value被占用 或者input 不存在时，可以通过修改model 的属性 [常见于select / checkbox]
  |-- prop  该表单元素的值
  |-- event  改变元素值时触发的事

// demo2 

 <base-model v-model="baseValue" ></base-model>
 
export const  baseModel = {
    props: {
        value: String
    },

    methods: {
        handleClick () {
            this.$emit('input', 'test')
        }
    },
    

    render (h) {
        return (
            <div onClick={() => this.handleClick() }>{this.value}</div>
        )
    }
}


<check-model v-model="checkValue"></check-model>

export const checkModel = {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: \`
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  \`
}


        `
    }
]



export default data
