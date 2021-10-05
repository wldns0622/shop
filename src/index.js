import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App';
import { reducer, alertReducer } from './reducer/reducer';

// HashRouter 대체 가능
// HashRouter은 조금더 라우팅을 안정하게 할 수 있음
// 주소창은 서버에게 리소스를 연결하는 곳이다.
// Hash라우터는 실수로 서버에 요청을 하지 않기위해서 사용함
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let store = createStore(combineReducers({reducer, alertReducer}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
