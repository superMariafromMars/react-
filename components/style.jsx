import React,{Component} from "react";
import style from "../components/style/css.css"
import "./style/css.css"
const style1 = {
    color:'green',
    fontSize:'14px'
}
class Compstyle extends React.Component{
    // 生命周期函数
    style2 = {
        color:'hotpink',
        fontSize:'14px'
    }
    render(){
        const style3 = {
            color:'yellow',
            fontSize:'14px'
        }
        // jsx语法
        return (
        <div>
            <span style={style1}>1.写在render外面的样式</span>
            <span className="style1">1.写在render外面的样式</span>
            <br/>
            <span style={this.style2}>2.作为一个属性的style,需要用this来指向</span>
            <span className="style2">2.作为一个属性的style,需要用this来指向</span>
            <br/>   
            <span style={style3}>3.render里面</span>
        </div>
        )
    }
}

export default Compstyle