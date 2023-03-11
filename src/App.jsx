/*eslint-disable*/

import logo from './logo.svg';
import './App.css'; // 경로 import 해야함
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집'; // 자료 잠깐 저장할 땐 변수
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동맛집',
    'React독학',
  ]);
  const [count, setCount] = useState(0);
  let copy = [...글제목];

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순정렬
      </button>

      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              setCount(count + 1);
            }}
          >
            ❤️
          </span>
          {count}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
