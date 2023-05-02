import { useState } from 'react';
import { Button, Modal } from '@/components';
import styled from 'styled-components';

export function Category() {
  const post = '글제목';
  const [글제목, 글제목변경] = useState(['옷브랜드 ', '바지브랜드 ', '가방브랜드']);
  const [isModal, setModal] = useState(false);
  const openModal = () => {
    setModal(!isModal);
  };

  return (
    <div>
      <List>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = '바꼈냐?';
            글제목변경(copy);
          }}
        >
          글수정
        </button>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.sort((a, b) => (a > b ? 1 : -1)); // string으로 sort 시 사용되는 문법

            글제목변경(copy);
          }}
        >
          가나다순정렬
        </button>
        <h4>
          {글제목[0]} <Button></Button>
        </h4>
        <p>2월17일 발행</p>
      </List>
      <List>
        <h4>{글제목[1]}</h4>
        <p>2월 18일발행</p>
      </List>
      <List>
        <h4 onClick={openModal}>{글제목[2]}</h4>
        <p>2월 19일발행</p>
      </List>
      {isModal === true ? <Modal /> : null}
    </div>
  );
}

const List = styled.div`
  padding-left: 20px;
  text-align: left;
  border-bottom: 1px solid grey;
`;
