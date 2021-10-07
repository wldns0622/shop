export function reducer(state = [], action) {
  
  switch(action.type) {
    case '증가':
      let upData = [...state];
      upData[action.data].quan++;
      return upData;

    case '감소':
      let downData = [...state];
      if(downData[action.data].quan > 0) {
        downData[action.data].quan--;
      }
      return downData;

    case '항목추가':
      let cart = [...state];
      let target = cart.findIndex((el) => el.id === action.payload.id);
      if(target > -1) {
        cart[target].quan++;
      } else {
        cart.push({...action.payload});
      }

      return cart;

    default:
      return state;
  }
}

// export function alertReducer(state = true, action) {
//   if(action.type === "닫기") {
//     return false;
//   } else {
//     return true;
//   }
// }