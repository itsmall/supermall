import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'
export default {
  addCart(context, payload) {

    /*  方法一
    let oldProduct = null;
     for (const iterator of state.cartList) {
       if (iterator.id === payload.id) {
         oldProduct = iterator;
         break;
       }
     }
     //判断oldProduct是否存在
     if (oldProduct) {
       oldProduct.count += 1;
     } else {
       // payload.count = 1
       state.cartList.push(payload);
     } */
    /* 方法二
          let index = state.cartList.indexOf(payload);
          if (index === -1) {
            let oldProduct = state.cartList[index];
            oldProduct.count += 1
          } else {
            state.cartList.push(payload);
          } */

    return new Promise((resolve, reject) => {


      //查找数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.id === payload.id)

      //判断oldProduct是否存在
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve("当前的数量加1")
        // oldProduct.count += 1;
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve("添加了新的商品")
        // context.state.cartList.push(payload);
      }

    })
  }

}
