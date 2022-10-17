import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';        // app이라는 태그를 불러와주세요. .js가 생략된 구조 / app이라는 이름으로 활용하겠습니다.
// 이 부분을 써야 가지고 올 수 있음 // app.js에서 사용자 정의태그(컴포넌트)를 불러와서 사용하겠습니다.  
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  // id가 root인 것을 가져와달라 // ReactDOM을 만들자 
root.render(
  <React.StrictMode>   
    <App />           
  </React.StrictMode>
);

// react.strictMode -> 안전점검모드 / 없어도 돌아가는데 지장은 없지만 미리 검사해주는 역할 
// app이라는 태그로 여러가지가 나와짐 / app.js를 여기로 불러옴 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
