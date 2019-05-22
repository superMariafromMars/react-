import React,{Component} from "react"

export default class Counter extends Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state={
            count:props.props
        }
    }
    add = () =>{
        this.setState(
            {count:this.state.count +1},
            // 执行完了之后用传一个回调的方法,这个方法可以是父组件传过来的
        //    ()=>{
        //     this.props.callback(this.state.count)
        //    } 
           function(){this.props.callback(this.state.count)}
        )
        
    }
    render(){
        return <div>
            <div style={{"color":"red"}}>计数器</div>
            <div>父组件传过来的值:{this.props.props}</div>
            <div>子组件传过来的值:{this.state.count}</div>
            <button onClick={()=>{this.add()}}>+1</button>
        </div>
    }
}