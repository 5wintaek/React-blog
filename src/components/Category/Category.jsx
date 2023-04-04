import { useState } from 'react';
import styled from 'styled-components';

export function Category() {
  const post = '글제목';
  const [a, b] = useState('남자코트추천');
  return (
    <List>
      <h4>{a}</h4>
      <p>2월17일 발행</p>
    </List>
  );
}

const List = styled.div`
  padding-left: 20px;
  text-align: left;
  border-bottom: 1px solid grey;
`;
