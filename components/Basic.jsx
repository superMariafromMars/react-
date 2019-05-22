import React from 'react'

// 导包
import {BrowserRouter,Link,Route,Switch,Redirect} from 'react-router-dom'

import NotFound from './NotFound'

// 定义组件
const NewsList = props => {
    return <ul>
        {/* params传参 */}
        {/* <li><Link to="/newsdetail/1001">奚梦瑶见家长</Link></li> */}
        {/* search & query传参 */}
        {/* <li><Link to={{pathname:'/newsdetail',search:"?newsId=1001"}}>奚梦瑶见家长</Link></li> */}
        <li><Link to={{pathname:'/newsdetail',search:'?newsId=1001'}}>奚梦瑶见家长</Link></li>
        <li>Ⅰ型大城市 落户</li>
        {/* <li><Link to="/newsdetail/1003">雷军年薪百亿</Link></li> */}
        <li><Link to={{pathname:'/newsdetail',search:'?newsId=1003'}}>雷军年薪百亿</Link></li>
    </ul>
}

const NewsDetail = props => {
    // console.log(props)
    
    console.log(props)

    const newsId = new URLSearchParams(props.location.search).get('newsId')
    console.log(newsId)
    // 如果是通过params传值，我在子组件中 props/this.props.match.params.newsId
    // Vue中获取params的值 this.$route.params.newsId

    // 如果是通过search传值，在组件中处理，比较麻烦 new URLSearchParams(props.location.search).get('newsId')
    // Vue中通过 this.$route.query.newsId
    return <div>
        我是新闻详情组件
    </div>
}

export default class Basic extends React.Component{
    render(){
        return <BrowserRouter>
            <p>
                <Link to="/newslist">新闻列表</Link>&nbsp;&nbsp;
                {/* <Link to="/">新闻列表</Link>&nbsp;&nbsp; */}
                <Link to="/foodslist">食品列表</Link>
            </p>
            <hr/>
            <div>
                <Switch>
                    <Route path="/newslist" component={NewsList} />
                    {/* <Route exact path="/" component={NewsList} /> */}
                    <Route path="/foodslist" render={props => {
                        return <ul>
                            <li>西兰花炒蛋</li>
                            <li>金拱门</li>
                            <li>黄焖鸡米饭</li>
                        </ul>
                    }}/>
                    {/* /newsdetail/1001 */}
                    {/* params传参时候的设置 */}
                    {/* <Route path="/newsdetail/:newsId" component={NewsDetail}/> */}
                    {/* query传参时候的设置 */}
                    <Route path="/newsdetail" component={NewsDetail}/> 
                    {/* 要写在to的规则后面 */}
                    <Redirect exact from="/" to="/foodslist" />
                    <Redirect exact from="/foodslist" to="/foodslist" />

                     {/* 404 匹配一定要放在最后 */}
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    }
}