let initialData =  [{ id: 0, name: '멋진 신발', quan: 2},{ id: 1, name: '멋진 신발2', quan: 5}];

export function reducer(state = initialData, action) {
  
  switch(action.type) {
    case '증가':
      let upData = [...state];
      upData[0].quan++;
      return upData;
    case '감소':
      let downData = [...state];
      if(downData.quan > 0) {
        downData[0].quan--;
      }
      return downData;
    default:
      return state;
  }
}

export function alertReducer(state = true, action) {
  if(action.type === "닫기") {
    return false;
  } else {
    return true;
  }
}