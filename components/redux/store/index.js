import {createStore} from 'redux'

// 导入一个reducer
import reducer from './reducres'

// 创建仓库
const store = createStore(reducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

// 导出store
export default store