/*eslint-disable*/

import logo from './logo.svg';
import './App.css'; // 경로 import 해야함
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; // 자료 잠깐 저장할 땐 변수
  let [글제목,b] =  useState('남자 코트 추천')
  

  function 함수(){
    console.log(1);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div >
      <div className='list'>
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
      
    </div>
  );
}

export default App;

