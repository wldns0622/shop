export function reducer(state = [], action) {
  
  switch(action.type) {
    case '증가':
      let upData = [...state];
      upData[0].quan++;
      return upData;

    case '감소':
      let downData = [...state];
      if(downData[0].quan > 0) {
        downData[0].quan--;
      }
      return downData;

    case '항목추가':
      let cart = [...state, {...action.payload}];
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