import { useState } from 'react';
import styled from 'styled-components';

export function Modal() {
  return (
    <Container>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #eee;
  text-align: left;
`;
