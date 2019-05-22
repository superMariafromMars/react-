import React, { Component } from "react";

export default class library extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        { id: 1, name: "谢逊", skill: "七伤拳" },
        { id: 2, name: "灭绝师太", skill: "周芷若" },
        { id: 3, name: "成昆", skill: "混元霹雳手" }
      ],
      bookName:'',
      isAdd:true,
      isEdit:false,
      editId:null
    };
  }
  getTabelValue(){
      let container = "";
        this.state.books.forEach(item => {
             container+= 
            `<tr key=${item.id}>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.skill}</td>
            <td>
              <a href="">编辑</a>
              <a href="">删除</a>
            </td>
          </tr>`
      })
      
      this.refs.test.innerHTML = container;
  }
  getNewId(){
    const ids = this.state.books.map(item=>{return item.id})
    console.log(ids);
    
    const max = Math.max(...ids);
    return max+1
  }
  addOrUpdate(){
    // 点击的是同一个按钮,根据点击的次序切换增加或者修改
    if(!this.state.isEdit){
      console.log(this.state.bookName);
      let newArray = [...this.state.books,{id:this.getNewId(),name:this.state.bookName}]
        this.setState({
          books:newArray
        })
        console.log(newArray);
    }else{
      // 修改数据
      const isEditBook = this.state.books.find(item=>item.id == this.state.editId)
      // isEditBook.name = this.state.bookName;
      const newArray2 = this.state.books.map(
        item => item.id+1
      )
      console.log(newArray2);
      
      this.state.isEdit = false;  
      this.state.bookName = "";
    }
    this.setState({bookName:'',editId:null})
    console.log(this.state.bookName);
  }
  editBook(id){
    const Choose =this.state.books.find(item=>{return item.id == id})
    // console.log(Choose.name);
    console.log(this.state.editId);
    
    this.setState({bookName:Choose.name})

    //不显示视图上,只是单纯的记录一下,更高的性能
    this.state.isEdit = true
    this.state.editId = id
  }
  deleteBook(id){
      let didDelete = this.state.books.filter(
        // item=>{return item.id != id}
        item =>{
          if(item.id != id){
            return true
          }
        }
        )
        console.log(didDelete);
      this.setState({books:didDelete})
      // this.setState().books=didDelete
  }
  render() {
    const {books,bookName} = this.state;
    return (
      <div>
        书名:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type="text" value={bookName}
         onChange={(e)=>{this.setState({bookName:e.target.value})}}/>
        <button onClick={()=>this.addOrUpdate()}>新增/修改</button>
        <table>
          <thead>
            <tr>
              <th>序号</th><th>姓名</th>
              <th>技能</th>
            </tr>
          </thead>
          <tbody ref="test">
            {this.state.books.map(item => {
                return (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.skill}</td>
                    <td>
                    <a onClick={()=>{this.editBook(item.id)}} href="javascript:void(0)">编辑</a>
                    <a onClick={()=>{this.deleteBook(item.id)}} href="javascript:void(0)">删除</a>
                    </td>
                    </tr>
                    );
                })}
          </tbody>
        </table >
        {/* <button onClick={() => this.getTabelValue()}>点击生成数据</button> */}
      </div>
    );
  }
}
