import { useState } from 'react';
import styled from 'styled-components';

export function Modal(props) {
  const isChange = () => {
    return props.글제목변경(['남자반팔추천', '바지브랜드', '가방브랜드']);
  };

  return (
    <Container background={'yellow'}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={isChange}>글수정</button>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  text-align: left;
  background: ${(props) => props.background || 'skyblue'};
`;
