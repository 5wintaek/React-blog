import React, { useState } from 'react';
import styled from 'styled-components';

export function Button() {
  const [count, setCount] = useState(0);
  return (
    <ButtionStyle
      onClick={(e) => {
        e.stopPropagation(); // 상위 HTML 이벤트 버블링 막는법
        setCount(count + 1);
      }}
    >
      ❤️{count}
    </ButtionStyle>
  );
}

const ButtionStyle = styled.button`
  border: none;
  border-radius: 10px;
  padding: 4px 12px;
  margin: 5px;
  font-size: 14px;
`;
