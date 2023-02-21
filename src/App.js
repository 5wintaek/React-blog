/*eslint-disable*/

import logo from './logo.svg';
import './App.css'; // 경로 import 해야함
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let[글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let[따봉,따봉변경] = useState(0)

  function 함수(){
    console.log(1);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>난 블로그임</h4>
      </div >
      <h4>{post}</h4>
    </div>
  );
}

export default App;

