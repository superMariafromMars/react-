import React, { Component } from "react";

import {HashRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'

import './Index.css'

// 导入Element的主题
import 'element-theme-default';

// 导入子组件
import GoodsList from './GoodsList'
import Cart from './Cart'

import {connect} from "react-redux"
export default class Index extends Component {
  constructor(){
    super()

    //不用state
    // this.state = {
    //   totalCount:this.calcTotalCount() // 第一次去仓库中取值
    // }
  }

  componentWillMount(){
    // 不用监听
    // store.subscribe(this.watchStore)

    // 监听浏览器的刷新及关闭
    window.onbeforeunload = function(){
      localStorage.setItem('MYCART',JSON.stringify(store.getState()))
    }
  }

  // watchStore = () => {
  //   this.setState({
  //     totalCount:this.calcTotalCount()// 重新去仓库中获取最新的值
  //   })
  // }

  // componentWillUnmount(){
  //   // 销毁当前Index组件的时候，把监听移除
  //   if (store && store.unsubscribe){
  //     store.unsubscribe(this.watchStore)
  //   }
  }

  calcTotalCount = () => {
    const goodsList = store.getState()

    let totalCount = 0
    goodsList.forEach(item => {
      totalCount += item.num
    })

    return totalCount
  }

  render() {
    return (
      <Router>
        <h2 className="title">
          买买买-商城
          <p>
            <Link
              to="/goodslist"
              className="router-link-exact-active router-link-active"
            >
              商品列表
            </Link>
            <Link to="/cart">
              购物车{this.state.totalCount > 0 && <span>（{this.state.totalCount}）</span>}
            </Link>
          </p>
        </h2>
        <div>
            <Switch>
                <Route path="/goodslist" component={GoodsList}/>
                <Route path="/cart" component={Cart}/>
                <Redirect exact from="/" to="/goodslist"/>
            </Switch>
        </div>
      </Router>
    );
  }
}
