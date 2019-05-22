import React, { Component } from "react";

import { Table,Button,InputNumber  } from "element-react";

import store from './store/'

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      columns: [
        {
          label: "名称",
          prop: "name"
        },
        {
          label: "图片",
          render(data){
            return <img style={{width:100,height:100}} src={data.url} />
          }
        },
        {
          label: "数量",
          render:data => {
            return <InputNumber value={data.num} onChange={(val)=>{this.changeNumber(data,val)}} size="small" defaultValue={data.num} min="1" />
          }
        },
        {
          label: "单价",
          prop: "price"
        },
        {
          label: "总价",
          render(data){
            return <span>{data.price * data.num}</span>
          }
        },
        {
          label: "操作",
          render:data => {
            return <span>
                <Button onClick={()=>{this.deleteGoods(data.id)}} type="danger">删除</Button>
            </span>
          }
        }
      ],
      goodsList:store.getState(),
      totalPrice:this.calcTotalPrice()
    };
  }

  deleteGoods = id => {
    store.dispatch({
      type:'DELETE_GOODS',
      id
    })
  }

  componentWillMount(){
    // 监听本地仓库数据的变化，如果本地仓库数据变化了，就执行 watchStore这个回调函数
    store.subscribe(this.watchStore)
  }

  watchStore = () => {
    this.setState({
      goodsList:store.getState(),
      totalPrice:this.calcTotalPrice()
    })
  }

  componentWillUnmount(){
    if (store && store.unsubscribe){
      store.unsubscribe(this.watchStore)
    }
  }

  // 更改了商品的数量
  // changeNumber = val => {
  //   console.log(val)
  // }
  changeNumber = (goods,value) => {
    store.dispatch({
      type:'UPDATE_GOODS',
      id:goods.id,
      num:value
    })
  }

  calcTotalPrice = () => {
    const goodsList = store.getState()

    let totalPrice = 0
    goodsList.forEach(item => {
      totalPrice += item.num * item.price
    })

    return totalPrice
  }

  render() {
    return (
      <div>
        <Table
          style={{ width: "100%" }}
          columns={this.state.columns}
          data={this.state.goodsList}
        />
        <p style={{marginLeft:5}}>
          总价:{this.state.totalPrice}
        </p>
        <br/>
        <Button style={{marginLeft:5,width:100}} type="success">结算</Button>
      </div>
    );
  }
}
