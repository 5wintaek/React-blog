/*eslint-disable*/
import './styles/App.css'; // 경로 import 해야함
import { useState } from 'react';
import { Button } from './components/Button/Button';

function App() {
  let post = '강남 우동 맛집'; // 자료 잠깐 저장할 땐 변수
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동맛집',
    'React독학',
  ]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  // let copy = [...글제목];
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {글제목.map(function (titles, index) {
        return (
          <div className="list" key={index}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle(index);
              }}
            >
              {글제목[index]} <Button></Button>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          setTitle(0);
        }}
      >
        글제목0
      </button>
      <button
        onClick={() => {
          setTitle(1);
        }}
      >
        글제목1
      </button>
      <button
        onClick={() => {
          setTitle(2);
        }}
      >
        글제목2
      </button>

      {modal == true ? (
        <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} />
      ) : null}
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(['여자코트추천', '남자코트좋아', '옷이너무좋은데']);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
