import { useState } from 'react';
import { Button, Modal } from '@/components';
import styled from 'styled-components';

export function Category() {
  const post = '글제목';
  const [글제목, 글제목변경] = useState(['옷브랜드 ', '바지브랜드 ', '가방브랜드']);
  const [isModal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [value, setValue] = useState('');
  const openModal = (i) => {
    setModal(!isModal);
    setTitle(i);
  };

  return (
    <div>
      {글제목.map((a, i) => {
        return (
          <List key={i}>
            <h4 onClick={openModal}>
              {글제목[i]} <Button />
            </h4>
            <p>2월 18일발행</p>
          </List>
        );
      })}

      <input
        onChange={(e) => {
          setValue(e.target.value);
          console.log(value);
        }}
      />

      {isModal === true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} /> : false}
    </div>
  );
}

const List = styled.div`
  padding-left: 20px;
  text-align: left;
  border-bottom: 1px solid grey;
`;
