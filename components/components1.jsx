import React from 'react'

export default class Components1 extends React.Component{
    constructor(){
        super()
        this.state = {
            sex:"男",
            age:18
        }
        this.handclick = this.handclick.bind(this);
    }
    handclick(sex,age){
       this.setState({
           sex,
           age
       }),
       console.log("更改数据完成");
       
    }
    
    render(){
        return <div>
            {/* 我是类组件 */}
            <p>{this.state.sex}----{this.state.age}</p>
            <p >{this.props.sex}-------{this.props.age}</p>
            {/* <button onClick = {()=>this.state.sex="中" }>点击更改不可观测数据</button> */}
            <button onClick = {()=>this.handclick("女",12)}>点击更改可视数据</button>
        </div>
        
    }
}