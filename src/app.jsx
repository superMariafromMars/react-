import React from "react";
import Components1 from "../components/components1.jsx";
import Components2 from "../components/components2.jsx";
import Componentstyle from '../components/style.jsx'
import Library from "../components/library.jsx"
import Basic from "../components/Basic.jsx"
import Counter from "../components/counter.jsx"
import Route from "../components/router/router.jsx"
import Layout from "../components/router/Layout.jsx"
class App extends React.Component{
    //生命周期函数
    getChildValue(data){
        console.log("父组件",data);
    }
    render(){
        // jsx语法
        return (
        <div>
            <Route></Route>
            {/* <Layout></Layout> */}
            {/* <Basic></Basic> */}
            {/* <Library></Library> */}
            {/* <Componentstyle></Componentstyle> */}
             {/* <Components1 sex="女" age={16}></Components1> */}
             {/* <Components2 name='函数组件' age={12}></Components2> */}
            {/* <Counter props={10} callback={data=>this.getChildValue(data)}></Counter> */}
        </div>
        )
    }
}

export default App