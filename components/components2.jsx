// 如果该文件中有jsx语法，一定要导入React
import React from 'react'

// function Component2(props){
function Component2({name,age}){
    // console.log(props)
    return <div>我是函数组件
        <p>{name} === {age}</p>
    </div>
}

export default Component2