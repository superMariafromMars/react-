import React from 'react'
// import './Layout.css'

import {BrowserRouter as Router, Link,Route,Switch,Redirect } from "react-router-dom"

const Menu1 = props => {
    return <div>
        我是右边的菜单1组件
    </div>
}

const Menu2 = props => {
    return <div>
        我是右边的菜单2组件
    </div>
}

export default class Layout extends React.Component{
    render(){
        return <Router className="layout">
            {/* 左边 */}
            <div className="left">
                 左边菜单 <br/>
                <br />
                <Link to="/layout/menu1">菜单1</Link><br/>
                <Link to="/layout/menu2">菜单2</Link><br/>
            </div>

            {/* 右边 */}
            <div className="right">
                <div className="content">
                    <Switch>
                        <Route path='/layout/menu1' component={Menu1}/>
                        <Route path='/layout/menu2' component={Menu2}/>
                        <Redirect from="/layout/" to="/layout/menu1" />
                    </Switch>
                </div>
            </div>
        </Router>
    }
}