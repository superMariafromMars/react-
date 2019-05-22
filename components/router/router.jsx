import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";

//定义两个组件
const Meun1 = props => {
  // 不用写render重复渲染
  return <div>我是组件1</div>;
};
const Meun2 = props => {
  return <div>我是组件2</div>;
};
const NotFound404 = props => {
  return <div>404错误,找不到您要的网页</div>;
};
export default class RouteDemo extends Component {
  render() {
    return (
      <Router>
        <div className="left">
          <Link to="/layout/Menu1">菜单一</Link>
          <Link to="/layout/Menu2">菜单二</Link>
        </div>
        <div className="right"> 
            <Switch>
                <Route path="/layout/Menu1" component={Meun1}></Route>
                <Route path="/layout/Menu2" component={Meun2}></Route>
                <Redirect from="/" to="/layout/Menu1" />
                <Route component={NotFound404} />
            </Switch>
        </div>
      </Router>
    );
  }
}
