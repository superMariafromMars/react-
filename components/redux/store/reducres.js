/**
 * state 可以给他赋初始值，后续传递进来的state就是
 * 上一次计算之后返回给store的值
 * 
 * action 是参数
 */

 // 读取本地的仓库的值
const localState = JSON.parse(localStorage.getItem('MYCART') || '[]')

export default (previousState = localState,action) => {
    switch (action.type) {
        case 'ADD_GOODS':
            // state.push(action.goods)
            const addGoodsList = JSON.parse(JSON.stringify(previousState))  

            const addGoods = addGoodsList.find(item => item.id === action.goods.id)
            if (addGoods){ // 之前的数组中有，则只是更改数量
                addGoods.num += action.goods.num
            } else { // 不存在，则添加
                addGoodsList.push(action.goods)
            }

            return addGoodsList

        case 'UPDATE_GOODS':
            // 取出之前的数组
            const updateGoodsList = JSON.parse(JSON.stringify(previousState))  
            
            // 根据id找到之前的对象
            const editGoods = updateGoodsList.find(item => item.id === action.id)
            
            // 更新它的值
            editGoods.num = action.num

            return updateGoodsList
        
        case 'DELETE_GOODS':
            // 取出之前的数组
            const deleteGoodsList = JSON.parse(JSON.stringify(previousState)) 

            // 根据id找到该索引
            const index = deleteGoodsList.findIndex(item => item.id === action.id)

            // 删除
            deleteGoodsList.splice(index,1)

            return deleteGoodsList
        
        default:
            return JSON.parse(JSON.stringify(previousState))
    }
}