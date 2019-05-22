import React from 'react';
import Reactdom from 'react-dom';

//导入根组件,如果不写配置,直接写成app,需要在webpack中进行配置
import App from "./app.jsx";
import store from '../components/redux/store/index'
import { Provider } from 'react-redux'
//渲染根组件的内容到public/index.html

// 供给者,在这里设置全局可用的store
Reactdom.render(<Provider store={store}>
    <App />
  </Provider>,document.getElementById("root"));